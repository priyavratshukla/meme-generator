import React, { Component } from 'react';

function MyHeader(){
	const headerstyle = {
		width:'100%',
		padding:'20px 0',
		background:'cyan'
	}
	return(
		<div>
			<nav className = "navbar" style={headerstyle}>
				<h1>Meme Generator</h1>
			</nav>
		</div>
	)
}

export default MyHeader;
