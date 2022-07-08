import React from 'react'


import About from './components/about/About';
import Contact from './components/contact/Contact';
import Landing from './components/landing/Landing';
import NavBar from './components/navBar/NavBar';
import Portfolio from './components/portfolio/Portfolio';
import Projects from './components/projects/Projects';

function App() {


	return (
		<div>
			<NavBar />
			<Landing />
			<About />
			<Projects />
			<Portfolio />
			<Contact />
		</div>
	);
}

export default App;
