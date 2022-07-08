import React from 'react'

import '../../styles/NavBar.css'

export default function NavBar() {
	return (
		<div className='border' id='nav-bar'>
			<ul className='horizontal-list'>
				<li className='horizontal'><a className='no-deco' href='/#about' >About</a></li>
				<li className='horizontal'><a className='no-deco' href='/#projects' >Projects</a></li>
				<li className='horizontal'><a className='no-deco' href='/#portfolio' >Portfolio</a></li>
				<li className='horizontal'><a className='no-deco' href='/#contact' >Contact</a></li>
			</ul>
		</div>
	)
}
