import React from 'react'

import '../styles/CardSmall.css'

export default function CardSmall({ data }) {
	return (
		<div className='card-small'>
			<p className='card-small-views'>{data.name}</p>
			<p className='card-small-icon'>
				<img src={data.icono} alt={data.name} />
			</p>
			<p className='card-small-number'>{data.amount}</p>
			<p className='card-small-percentage'>
				<span className={data.status === 'increase' ? '' : 'down'}>
					<img
						src={
							data.status === 'increase'
								? '/images/icon-up.svg'
								: '/images/icon-down.svg'
						}
						alt={data.status}
					/>
					{data.percent}%
				</span>
			</p>
		</div>
	)
}
