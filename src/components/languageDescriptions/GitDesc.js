import React from "react";


export default function GitDesc() {
	const str1 = `GitHub, Inc. (/ˈɡɪthʌb/[a]) is an Internet hosting service for software development and version control using Git. It provides the distributed version control of Git plus access control, bug tracking, software feature requests, task management, continuous integration, and wikis for every project.[5] Headquartered in California, it has been a subsidiary of Microsoft since 2018.[6]`;
	const str2 = `It is commonly used to host open source software development projects.[7] As of June 2022, GitHub reported having over 83 million developers[8] and more than 200 million repositories,[9] including at least 28 million public repositories.[10] It is the largest source code host as of November 2021.`;

	

	return (
		<div>
			<h1>GITHUB</h1>
				
				<h2>Overview</h2>
					<p>${str1}</p>
					<p>${str2}</p>
		</div>
	);
}
