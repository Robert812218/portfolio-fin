import React, { useState, useEffect } from 'react';
import './App.css';
import Profile from './components/Profile';
import Languages from './components/Languages';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer'; 
import Blog from './components/Blog';

// ADD A BLOG PAGE 
	// ADD BLOGS ABOUT LINUX AND WHATNOT
// ADD LINK TO GITHUB 
// ADD GIT/VERSION CONTROL TO TECHNOLOGIES SECTION
// ADD PHP TECH + A PROJECT
// ADD A MACHINE LEARNING PROJECT
// PROLOG AND/OR GO?
// ADD COMMAND LINE/HTML/CSS (incl.SCSS, Tailwind) SKILLS
// ADD RUST PROJECT


export default function App() {
	const [active, setActive] = useState("");
	const [profile, setProfile] = useState("");
	const [languages, setLanguages] = useState("");
	const [projects, setProjects] = useState("");
	const [contactPage, setContactPage] = useState("");
	const [blog, setBlog] = useState("");
	const [contactForm, setContactForm] = useState("");

	function checkStates() {
	}

	function renderProfile() {
		setProfile(!profile);
		setLanguages("");
		setProjects("");
		setContactForm("");
		setBlog("");
	}	

	function renderLanguages() {
		setProfile("");
		setLanguages(!languages);
		setProjects("");
		setContactForm("");
		setBlog("");
	}

	function renderProjects() {
		setProfile("");
		setLanguages("");
		setProjects(!projects);
		setContactForm("");
		setBlog("");
	}

	function renderContactForm() {
		setProfile("");
		setLanguages("");
		setProjects("");
		setContactForm(contactForm);
		setBlog("");
	}
	

	function renderBlog() {
		setProfile("");
		setLanguages("");
		setProjects("");
		setContactForm("");
		setBlog(!blog);
	}

	function renderActive() {
		setActive(!active);
	}

	return (
    		<div>
			<h1>PORTFOLIONI</h1>

			<button onClick={renderProfile}>About Me</button>
			<button onClick={renderLanguages}>Languages</button>
			<button onClick={renderProjects}>Projects</button>
			<button onClick={renderBlog}>Blog</button>
			<button onClick={setContactForm}>Get In Touch</button>	

			

 			<div class="render-area display flex-row">
				
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
				{blog &&
				<div>
					<Blog />
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

