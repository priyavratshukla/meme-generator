import React, {Component} from 'react';
import HeaderComp from './components/HeaderComp';
import MemeGenerator from './components/MemeGenerator';
import './App.css';

class App extends Component{
	constructor(){
		super()
	}
	render(){
		return(
			<div>
				<HeaderComp />
				<MemeGenerator />
			</div>
		)
	}
}

export default App;

