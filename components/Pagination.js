import React from 'react'

export const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let x = 1; x <= Math.ceil(totalPosts / postsPerPage); x++) {
        pageNumbers.push(x)
    }

    return (
        <nav>
            <ul className='pagination'>
                {pageNumbers.map(el => (
                    <li key={el} className="page-item">
                        <a onClick={() => paginate(el)} className='page-link'>
                            {el}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
