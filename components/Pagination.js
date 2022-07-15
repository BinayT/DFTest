import React from 'react'

export const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];
    const totalPages = Math.ceil(totalPosts / postsPerPage)

    for (let x = 1; x <= totalPages; x++) {
        pageNumbers.push(x)
    }

    return (
        <nav>
            <ul>
                {pageNumbers.map(el => (
                    <li key={el}>
                        <a href='!#' onClick={() => paginate(el)} className='page-link'>
                            {el}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}