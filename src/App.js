import React, { useState, useEffect } from 'react';
import './App.css';
import Profile from './components/Profile';
import Languages from './components/Languages';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
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
// DO SOME FLUTTER/DART PROJECTS
// ADD VIRTUAL MACHINES/KALI LINUX MAYBE

function App() {
	return (
		<body class="overflow-hidden">
			<div x-data="{ sidebarOpen: false }" class="relative flex h-screen text-gray-800 bg-white font-roboto">
			</div>
		</body>
	);
}


export default function AppOld() {
	const [active, setActive] = useState("");
	const [profile, setProfile] = useState("");
	const [languages, setLanguages] = useState("");
	const [projects, setProjects] = useState("");
	const [contactPage, setContactPage] = useState("");
	const [blog, setBlog] = useState("");
	const [contactForm, setContactForm] = useState("");

	useEffect(() => {
		setProjects(!projects);
	}, []);

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
			<div>

				<nav class="bg-white shadow dark:bg-gray-800">
    					<div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
				
						<h1>ROBERT KELLY</h1>

        					<button onClick={renderProfile} class="text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6">About Me</button>

       						<button onClick={renderLanguages} class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Languages, Frameworks, and Technologies</button>

        					<button onClick={renderProjects} class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Projects</button>

        					<button onClick={renderBlog} class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Blog</button>

        					<button onClick={renderContactForm} class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Get in touch</button>

    					</div>
				</nav>

			


			</div>
			
				

	

 			<div className="render-area">
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

    		</div>
  	);
}

