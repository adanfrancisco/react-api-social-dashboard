import React, { useRef, useState } from 'react'

import '../styles/Switch.css'

export default function Switch() {
	const [checked, setChecked] = useState(false)
	const ref = useRef(null)

	const handleChange = () => {
		setChecked(ref.current.checked)
		if (ref.current.checked) {
			document.body.classList.remove('is-light-mode')
			document.body.classList.add('is-dark-mode')
		} else {
			document.body.classList.remove('is-dark-mode')
			document.body.classList.add('is-light-mode')
		}
	}

	return (
		<div className='dark-mode'>
			<p className='dark-mode-title'>{checked ? 'Light Mode' : 'Dark Mode'}</p>
			<input
				ref={ref}
				type='checkbox'
				className='checkbox'
				id='checkbox'
				onChange={handleChange}
			/>
			<label className='switch' checked={checked} htmlFor='checkbox'></label>
		</div>
	)
}
