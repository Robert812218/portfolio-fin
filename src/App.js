import React, { useState, useEffect } from 'react';
import './App.css';
import Route from './components/Route';
import Header from './components/Header';

function MainMenu() {
	return (
		<div className="PageChoiceContainer">
			<button className="PageChoiceButton">Home</button>
			<button className="PageChoiceButton">Page</button>
		</div>
	);
}


function App() {
  return (
    <div className="App">
	<h1>NEWEST PORTFOLIO</h1>
	<header>ROBERT KELLY</header>
    </div>
  );
}

export default App;
