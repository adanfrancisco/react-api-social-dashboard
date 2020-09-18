import React, { useState, useEffect } from 'react'

import Card from './Card'

function TopCardList() {
	const [cardListData, setCardListData] = useState([])

	async function getData() {
		const response = await fetch('https://api-svelte-dashboard.vercel.app/')
		const data = await response.json()

		setCardListData(data)
	}

	useEffect(() => {
		getData()
	}, [])

	return (
		<section className='top-cards'>
			<div className='wrapper'>
				<div className='grid'>
					{cardListData.map((card, i) => (
						<Card key={i} data={card} />
					))}
					{/* <article className='card twitter'>
						<p className='card-title'>
							<img src='/images/icon-twitter.svg' alt='' />
							@byRedHunter
						</p>
						<p className='card-followers'>
							<span className='card-followers-number'>28k</span>
							<span className='card-followers-title'>Followers</span>
						</p>
						<p className='card-today'>
							<img src='/images/icon-up.svg' alt='' />
							12 Today
						</p>
					</article>
					<article className='card instagram'>
						<p className='card-title'>
							<img src='/images/icon-instagram.svg' alt='' />
							@byRedHunter
						</p>
						<p className='card-followers'>
							<span className='card-followers-number'>6k</span>
							<span className='card-followers-title'>Followers</span>
						</p>
						<p className='card-today'>
							<img src='/images/icon-up.svg' alt='' />
							12 Today
						</p>
					</article>
					<article className='card youtube'>
						<p className='card-title'>
							<img src='/images/icon-youtube.svg' alt='' />
							Jhonny Quispe
						</p>
						<p className='card-followers'>
							<span className='card-followers-number'>12k</span>
							<span className='card-followers-title'>Followers</span>
						</p>
						<p className='card-today'>
							<img src='/images/icon-up.svg' alt='' />
							12 Today
						</p>
					</article> */}
				</div>
			</div>
		</section>
	)
}

export default TopCardList
