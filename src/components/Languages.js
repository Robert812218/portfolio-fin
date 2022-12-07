import React, { useState, useEffect } from 'react';
import ElixirDesc from './languageDescriptions/ElixirDesc';
import ClojureDesc from './languageDescriptions/ClojureDesc';
import CSharpDesc from './languageDescriptions/CSharpDesc';
import JavascriptDesc from './languageDescriptions/JavascriptDesc';
import RubyDesc from './languageDescriptions/RubyDesc';
import PythonDesc from './languageDescriptions/PythonDesc';
import RustDesc from './languageDescriptions/RustDesc';
import SQLDesc from './languageDescriptions/SQLDesc';
import VimDesc from './languageDescriptions/VimDesc';
import LinuxDesc from './languageDescriptions/LinuxDesc';
import GitDesc from './languageDescriptions/GitDesc';


export default function Languages() {
	const [clojure, setClojure] = useState("");		
	const [elixir, setElixir] = useState("");		
	const [cSharp, setCSharp] = useState("");		
	const [javascript, setJavascript] = useState("");		
	const [ruby, setRuby] = useState("");		
	const [python, setPython] = useState("");		
	const [rust, setRust] = useState("");		
	const [sql, setSQL] = useState("");
	const [vim, setVim] = useState("");
	const [linux, setLinux] = useState("");
	const [git, setGit] = useState("");



	function renderClojure() {
		setClojure(!clojure);
		setElixir("");
		setCSharp("");
		setJavascript("");
		setRuby("");
		setPython("");
		setRust("");
		setSQL("");
		setVim("");
		setLinux("");
		setGit("");
	}	

	function renderElixir() {
		setClojure("");
		setElixir(!elixir);
		setCSharp("");
		setJavascript("");
		setRuby("");
		setPython("");
		setRust("");
		setSQL("");
		setVim("");
		setLinux("");

		setGit("");
	}	
	function renderCSharp() {
		setClojure("");
		setElixir("");
		setCSharp(!cSharp);
		setJavascript("");
		setRuby("");
		setPython("");
		setRust("");
		setSQL("");
		setVim("");
		setLinux("");

		setGit("");
	}	

	function renderJavascript() {
		setClojure("");
		setElixir("");
		setCSharp("");
		setJavascript(!javascript);
		setRuby("");
		setPython("");
		setRust("");
		setSQL("");
		setVim("");
		setLinux("");

		setGit("");
	}	

	function renderRuby() {
		setClojure("");
		setElixir("");
		setCSharp("");
		setJavascript("");
		setRuby(!ruby);
		setPython("");
		setRust("");
		setSQL("");
		setVim("");
		setLinux("");

		setGit("");
	}	


	function renderPython() {
		setClojure("");
		setElixir("");
		setCSharp("");
		setJavascript("");
		setRuby("");
		setPython(!python);
		setRust("");
		setSQL("");
		setVim("");
		setLinux("");

		setGit("");
	}	

	function renderRust() {
		setClojure("");
		setElixir("");
		setCSharp("");
		setJavascript("");
		setRuby("");
		setPython("");
		setRust(!rust);
		setSQL("");
		setVim("");
		setLinux("");

		setGit("");
	}	

	function renderSQL() {
		setClojure("");
		setElixir("");
		setCSharp("");
		setJavascript("");
		setRuby("");
		setPython("");
		setRust("");
		setSQL(!sql);
		setVim("");
		setLinux("");

		setGit("");
	}	

	function renderVim() {
		setClojure("");
		setElixir("");
		setCSharp("");
		setJavascript("");
		setRuby("");
		setPython("");
		setRust("");
		setSQL("");
		setVim(!vim);
		setLinux("");

		setGit("");
	}	

	function renderLinux() {
		setClojure("");
		setElixir("");
		setCSharp("");
		setJavascript("");
		setRuby("");
		setPython("");
		setRust("");
		setSQL("");
		setVim("");
		setLinux(!linux);

		setGit("");
	}	

	function renderGit() {
		setClojure("");
		setElixir("");
		setCSharp("");
		setJavascript("");
		setRuby("");
		setPython("");
		setRust("");
		setSQL("");
		setVim("");
		setLinux("");
		setGit(!git);
	}	

	return (
		// Make this flex-column - buttons on left, descriptions on right
		<div>
			<ul>
				<li>Javascript/React.js
					<button onClick={renderClojure}>+</button>
				</li>
				<li>Rust/WebAssembly
					<button onClick={renderRust}>+</button>
				</li>
				<li>Elixir/Phoenix
					<button onClick={renderElixir}>+</button>
				</li>
				<li>ClojureScript/Reagent
					<button onClick={renderClojure}>+</button>
				</li>
				<li>Python/Django
					<button onClick={renderPython}>+</button>
				</li>
				<li>Ruby/Rails
					<button onClick={renderRuby}>+</button>
				</li>
				<li>C#
					<button onClick={renderCSharp}>+</button>
				</li>
				<li>SQL/Postgres
					<button onClick={renderSQL}>+</button>
				</li>
				<li>Vim
					<button onClick={renderVim}>+</button>
				</li>
				<li>Git/Github
					<button onClick={renderGit}>+</button>
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
				{vim && <VimDesc />}
				{linux && <LinuxDesc />}
				{git && <GitDesc />}
			</div>
		</div>
	);
}
