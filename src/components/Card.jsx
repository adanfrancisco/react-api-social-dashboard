import React from 'react'

import '../styles/Card.css'

export default function Card({ data }) {
	const classes = `card ${data.type}`
	return (
		<article className={classes}>
			<p className='card-title'>
				<img src={data.icono} alt={data.type} />
				{data.user ? data.user : 'Nickname'}
			</p>
			<p className='card-followers'>
				<span className='card-followers-number'>{data.followers}</span>
				<span className='card-followers-title'>Followers</span>
			</p>
			<p className='card-today'>
				<img
					src={
						data.status === 'increase'
							? '/images/icon-up.svg'
							: '/images/icon-down.svg'
					}
					alt={data.status}
				/>
				<span className={data.status === 'increase' ? '' : 'down'}>
					{data.amount} Today
				</span>
			</p>
		</article>
	)
}
