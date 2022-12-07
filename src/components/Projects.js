import React, { useEffect } from 'react';
import Reverb from './githubProjects/Reverb';
import Scheduler from './githubProjects/Scheduler';
import LightBNB from './githubProjects/LightBNB';
import Memorizo from './githubProjects/Memorizo';
import Tinyapp from './githubProjects/Tinyapp';
import SnekMultiplayer from './githubProjects/SnekMultiplayer';
import AdventOfCode2022 from './githubProjects/AdventOfCode2022';


export default function Projects() {
	// Add Main projects section, and an 'other projects' section	
	// Eventually add "sort by languages" feature, not enough projects for that rn though	
	
	
	
	return (
			
		<div>
			<h1>PROJECTS</h1>
			
			<div class="flex">
				<ul>
					<li>
						<div>
						<Reverb />
						</div>
					</li>
					<li>
						<Scheduler />
					</li>	
					<li>
						<LightBNB />
					</li>
					<li>
						<Memorizo />
					</li>	
					<li>
						<Tinyapp />
					</li>
					<li>
						<SnekMultiplayer />
					</li>
					<li>
						<AdventOfCode2022 />
					</li>
				</ul>
			</div>

			<div>
			</div>
	
			
		</div>

	);
} 
