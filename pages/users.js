import React from 'react'
import Image from 'next/image'

import cardStyles from '../styles/User.module.css'

import Card from '../components/Card'

const users = ({ page1, page2 }) => {
    const data = [...page1.data, ...page2.data]

    return (
        <div className={cardStyles.card__container}>
            {data.map(el => <Card key={el.id} data={el} />)}
        </div>
    )
}

export default users

export async function getServerSideProps() {
    const [page1Req, page2Req] = await Promise.all([
        fetch('https://reqres.in/api/users'),
        fetch('https://reqres.in/api/users?page=2')
    ]);
    const [page1, page2] = await Promise.all([
        page1Req.json(),
        page2Req.json()
    ]);
    return { props: { page1, page2 } };
}