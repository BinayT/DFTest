import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'

import { setUser } from '../redux/slices/userSlice'

import loginStyles from '../styles/Login.module.css'

const URL = 'https://reqres.in/api/login'

const Login = () => {
    const dispatch = useDispatch();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const router = useRouter()

    // Handler that handles login, only fires up  when we checked that we don't have any errors on email or password.
    const loginSubmissionHandler = async userData => {
        try {
            let response = await fetch(URL, {
                body: JSON.stringify(userData),
                method: 'POST',
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json",
                }
            })
            let data = await response.status;

            // Here I'm throwing error, catching it and setting the errors as soon as i see that the response status is different than 200. 
            if (data !== 200) throw Error(data)
            // If there's no error and status code is 200, then we send them to the users page.
            if (data === 200) {
                const userName = userData.email.split('.')[0]
                dispatch(setUser(userName))
                router.push('/users')
            }
        } catch (error) {
            setEmailError("User doesn't exist")
        }
    }

    // Handler that handles submission of the form, first checks if there are any errors on email or password, then moves towards the submission.
    const submitHandler = async e => {
        e.preventDefault();

        //Initially I'm setting the errors to empty string if they already have errors
        if (emailError !== '') await setEmailError('')
        if (passwordError !== '') setPasswordError('')

        //Only then I check if they make errors.
        if (email === '') {
            setEmailError('Email is required')
        } else if (password === '') {
            setPasswordError('Password is required')
        } else {
            // Only if there's no error, we proceed with the login.
            const reqBody = { email, password }
            loginSubmissionHandler(reqBody)
        }
    }


    return (
        <div className={loginStyles.main}>
            <p className={loginStyles.sign} align="center">Sign in</p>

            <form className={loginStyles.form1} onSubmit={submitHandler}>

                {emailError && <p className={loginStyles.error}>{emailError}</p>}
                <input className={loginStyles.un} type="email" name="email" align="center" placeholder="xyz@abc.com"
                    value={email} onChange={e => setEmail(e.target.value)} />

                {passwordError && <p className={loginStyles.error}>{passwordError}</p>}
                <input className={loginStyles.pass} type="password" name="password" align="center" placeholder="Password"
                    value={password} onChange={e => setPassword(e.target.value)} />

                <input type="submit" value="Submit" className={loginStyles.submit} />
            </ form>
        </div>
    )
}

export default Login