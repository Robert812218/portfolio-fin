import React, { useState, useEffect } from 'react';
import './App.css';
import Profile from './components/Profile';
import Languages from './components/Languages';
import Projects from './components/Projects';


export default function App() {
	const [view, setView] = useState("");


	
	function renderProfile() {
		setProjects = true;
	}

	return (
    		<div>
			<h1>PORTFOLIONI</h1>

			<button onClick={renderProfile}>About Me</button>
			<button>Languages</button>
			<button>Projects</button>
			<button></button>


			<div>
				{active === "profile" && 
				<div>
					<Profile />
				</div>}
				{langs && <Languages />}
				{projects && <Projects />}
			</div>
    		</div>
  	);
}

