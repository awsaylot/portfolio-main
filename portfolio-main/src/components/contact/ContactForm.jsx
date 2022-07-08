import React from 'react'

export default function ContactForm() {
	return (
		<div className='border' id='contact-form'>
			<input className='form' type="text" placeholder='Name' />
			<input className='form' type="email" placeholder='Email Address' />
			<textarea type="text" placeholder='Detailed Request' cols='35' />
			<button className='form-button' type='submit'>Submit</button>
		</div>
	)
}
