import React from "react";


export default function SQLDesc() {
	const str1 = `Structured Query Language, abbreviated as SQL,(/ˈsiːkwəl/ "sequel", /ˌɛsˌkjuːˈɛl/ (listen) S-Q-L; )[4][5] is a domain-specific language used in programming and designed for managing data held in a relational database management system (RDBMS), or for stream processing in a relational data stream management system (RDSMS). It is particularly useful in handling structured data, i.e. data incorporating relations among entities and variables.`;
	const str2 = `SQL offers two main advantages over older read–write APIs such as ISAM or VSAM. Firstly, it introduced the concept of accessing many records with one single command. Secondly, it eliminates the need to specify how to reach a record, e.g. with or without an index.`;

	const str3 = `PostgreSQL is a powerful, open source object-relational database system with over 35 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance.`;
	const str4 = ``;


        return (
                <div>
                        <h1>SQL</h1>
				<h2>Overview</h2>
					<p>${str1}</p>
					<p>${str2}</p>

				<h2>PostgreSQL</h2>
					<p>${str3}</p>
					<p></p>
				
                </div>  
        )   
}

