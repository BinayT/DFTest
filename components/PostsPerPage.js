import React, { useState } from 'react'

export const PostsPerPage = ({ setPostsPerPage }) => {
    const postsPerPage = [1, 2, 5, 10]

    const [selected, setSelected] = useState(postsPerPage[0]);

    const handleChange = event => {
        setSelected(event.target.value)
        setPostsPerPage(event.target.value)
    };

    return (
        <>
            <label htmlFor="postsPerPage">Posts Per Page</label>

            <select id="postsPerPage" name="postsPerPage" value={selected} onChange={handleChange}>
                {postsPerPage.map(el => (<option value={el} key={el}>{el}</option>))}
            </select>
        </>
    )
}
