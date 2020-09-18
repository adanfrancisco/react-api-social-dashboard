import React, { useState, useEffect } from 'react'

import CardSmall from './CardSmall'

import '../styles/Overview.css'

export default function Overview() {
	const [cardListData, setCardListData] = useState([])

	async function getData() {
		const response = await fetch(
			'https://api-svelte-dashboard.vercel.app/overview/'
		)
		const data = await response.json()

		setCardListData(data)
	}

	useEffect(() => {
		getData()
	}, [])

	return (
		<section className='overview'>
			<div className='wrapper'>
				<h2>Overview - Today</h2>
				<div className='grid'>
					{cardListData.map((data, i) => (
						<CardSmall key={i} data={data} />
					))}
				</div>
			</div>
		</section>
	)
}
