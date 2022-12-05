import React, { useState, useEffect } from 'react';
import ElixirDesc from './languageDescriptions/ElixirDesc';
import ClojureDesc from './languageDescriptions/ClojureDesc';
import CSharpDesc from './languageDescriptions/CSharpDesc';
import JavascriptDesc from './languageDescriptions/JavascriptDesc';
import RubyDesc from './languageDescriptions/RubyDesc';
import PythonDesc from './languageDescriptions/PythonDesc';
import RustDesc from './languageDescriptions/RustDesc';
import SQLDesc from './languageDescriptions/SQLDesc';

export default function Languages() {
	const [clojure, setClojure] = useState("");		
	const [elixir, setElixir] = useState("");		
	const [cSharp, setCSharp] = useState("");		
	const [javascript, setJavascript] = useState("");		
	const [ruby, setRuby] = useState("");		
	const [python, setPython] = useState("");		
	const [rust, setRust] = useState("");		
	const [sql, setSQL] = useState("");
	

	return (
		// Make this flex-column - buttons on left, descriptions on right
		<div>
			<ul>
				<li>Javascript/React.js
					<button>+</button>
				</li>
				<li>Rust/WebAssembly
					<button>+</button>
				</li>
				<li>Elixir/Phoenix
					<button>+</button>
				</li>
				<li>ClojureScript/Reagent
					<button>+</button>
				</li>
				<li>Python/Django
					<button>+</button>
				</li>
				<li>Ruby/Rails
					<button>+</button>
				</li>
				<li>C#
					<button>+</button>
				</li>
				<li>SQL/Postgres
					<button>+</button>
				</li>
				
			</ul>
			{/* Render Area */}
			<div>
				<h4>RENDER AREA</h4>
				{clojure && <ClojureDesc />}
				{elixir && <ElixirDesc />}
				{cSharp && <CSharpDesc />}
				{javascript && <JavascriptDesc />}
				{ruby && <RubyDesc />}
				{python && <PythonDesc />}
				{rust && <RustDesc />}
				{sql && <SQLDesc />}
			</div>
		</div>
	);
}
