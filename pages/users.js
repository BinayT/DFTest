import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import Head from 'next/head'

import cardStyles from '../styles/User.module.css'
import { Card } from '../components/Card'
import { Pagination } from '../components/Pagination'
import { PostsPerPage } from '../components/PostsPerPage'
import Redirect from '../components/Redirect';

const Users = ({ page1, page2 }) => {
    const { user } = useSelector(state => state.user)
    console.log(user)
    const data = [...page1.data, ...page2.data]

    const [posts] = useState(data)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(1)

    // Get current posts.
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    if (user === null) {
        return <Redirect />
    }

    return (
        <>
            <Head>
                <title>Danelfin | Users Lists</title>
                <meta name="description" content="Viewing all the users avilable from https://reqres.in with pagination, which allows us to pick 1,2,5 and 10 users per page." />
                <link rel="icon" href="/logoDanelfin.ico" />
            </Head>
            <PostsPerPage setPostsPerPage={setPostsPerPage} />

            <div className={cardStyles.card__container}>
                {currentPosts.map(el => <Card key={el.id} data={el} />)}
            </div>
            <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
        </>
    )


}

export default Users

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