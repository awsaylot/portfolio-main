import React, {useState} from 'react'

export default function ContactForm() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [request, setRequest] = useState("");
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmitted(true);
	}

	if (submitted) {
		return (
			<h1 className='form'>Thank You</h1>
		)
	}

	return (
		<div className='border' id='contact-form'>
			<input className='form' type="text" placeholder='Name' value={name} onChange={e => setName(e.target.value)} />
			<input className='form' type="email" placeholder='Email Address' value={email} onChange={e => setEmail(e.target.value)} />
			<textarea type="text" placeholder='Detailed Request' cols='35' value={request} onChange={e => setRequest(e.target.value)} />
			<button className='form-button' type='submit' onClick={handleSubmit}>Submit</button>
		</div>
	)
}
