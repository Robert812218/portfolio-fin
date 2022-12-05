import React, { useState, useEffect } from 'react';
import './App.css';
import Profile from './components/Profile';
import Languages from './components/Languages';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer'; 


// home
// about me
// projects
// blog
// contact
// github
// resume (?)


export default function App() {
	const [profile, setProfile] = useState("");
	const [languages, setLanguages] = useState("");
	const [projects, setProjects] = useState("");
	const [contactPage, setContactPage] = useState("");
	const [contactForm, setContactForm] = useState("");

	function checkStates() {
	}

	function renderProfile() {
		setProfile(!profile);
		setLanguages("");
		setProjects("");
		setContactForm("");
	}	

	function renderLanguages() {
		setProfile("");
		setLanguages(!languages);
		setProjects("");
		setContactForm("");
	}

	function renderProjects() {
		setProfile("");
		setLanguages("");
		setProjects(!projects);
		setContactForm("");
	}

	function renderContactForm() {
		setProfile("");
		setLanguages("");
		setProjects("");
		setContactForm(contactForm);
	}
	
	return (
    		<div>
			<h1>PORTFOLIONI</h1>

			<button onClick={renderProfile}>About Me</button>
			<button onClick={renderLanguages}>Languages</button>
			<button onClick={renderProjects}>Projects</button>
			<button onClick={setContactForm}>Get In Touch</button>	

 			<div class="render-area">
				{profile && 
				<div>
					<Profile />
				</div>
				}
				{languages && 
				<div>
					<Languages />
				</div>
				}
				{projects &&
				<div>
					<Projects />
				</div>
				}
				{contactForm && 
				<div>
					<ContactForm />
				</div>}
				
			</div>

			<Footer />
    		</div>
  	);
}

