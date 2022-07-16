import React from 'react'
import Image from 'next/image'

import cardStyles from '../styles/User.module.css'

export const Card = ({ data }) => {

    return (
        <div className={cardStyles.card} key={data.id}>
            <Image loader={() => data.avatar} unoptimized={true} src={data.avatar} height={100} width={100} alt="Avatar" />
            <div className={cardStyles.card__details}>
                <p>{data.avatar}</p>
                <p>Name: {data.first_name} {data.last_name}</p>
                <p>Email: {data.email}</p>
            </div>
        </div>
    )
}