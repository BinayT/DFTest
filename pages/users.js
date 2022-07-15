import React, { useState } from 'react'

import cardStyles from '../styles/User.module.css'
import Card from '../components/Card'
import { Pagination } from '../components/Pagination'
import { PostsPerPage } from '../components/PostsPerPage'

const Users = ({ page1, page2 }) => {
    const data = [...page1.data, ...page2.data]

    const [posts] = useState(data)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(1)

    // Get current posts.
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <>
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