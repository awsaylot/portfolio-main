import React from 'react'

import ContactForm from './ContactForm'

import '../../styles/Contact.css'

export default function Contact() {
	return (
		<div className='section' id='contact'>
			<p>
				Please fill out your information in order to send me an email for more information.
			</p>
			<ContactForm />
		</div>
	)
}
