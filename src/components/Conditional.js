import React, {Component} from 'react'

/*function Conditional(props){
	console.log('conditional ' + props.handleLogInAndOut)
	if(props.isLoggedIn){
		return(
			<h1>LogIn</h1>
		)
	}else{
		return(
			<h1>LogOut</h1>
		)
	}
	
}*/

class Conditional extends Component{
	constructor(props){
		super(props)
	}
	render(){
		let logCta
		if(this.props.handleLogInAndOut){
			 logCta = "LoggedIn"
		}else{
			 logCta = "LoggedOut"
		}
		return(
			<div>
				{logCta}
			</div>
		)
	}
}

export default Conditional;