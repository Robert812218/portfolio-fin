import React from "react";


export default function ClojureDesc() {
	const str1 = `Clojure (/ˈkloʊʒər/, like closure)[15][16] is a dynamic and functional dialect of the Lisp programming language on the Java platform.[17][18] Like other Lisp dialects, Clojure treats code as data and has a Lisp macro system.[19] The current development process is community-driven,[20] overseen by Rich Hickey as its benevolent dictator for life (BDFL).`;		
	const str2 = `Clojure advocates immutability and immutable data structures and encourages programmers to be explicit about managing identity and its states.[22] This focus on programming with immutable values and explicit progression-of-time constructs is intended to facilitate developing more robust, especially concurrent, programs that are simple and fast.[23][24][15] While its type system is entirely dynamic, recent efforts have also sought the implementation of a dependent type system.[25]`;
	

	const str3 = `ClojureScript is a compiler for Clojure that targets JavaScript. It emits JavaScript code which is compatible with the advanced compilation mode of the Google Closure optimizing compiler.`;
	

        return (
                <div>
                        <h1>Clojure</h1>
				<h2>Overview</h2>
					<p>${str1}</p>
					<p>${str2}</p>

				<h2>ClojureScript</h2>
					<p>${str3}</p>
					<p></p>
                </div>  
        )   
}

