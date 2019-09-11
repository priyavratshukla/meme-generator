import React, {Component} from 'react';
import TodoItem from './components/TodoItem';
import todosData from './shared/todosData';
import Conditional from './components/Conditional'

//todo app continued

class App extends Component{
	constructor(props){
		super(props)
		/*this.state = {
			isLoading:true
		}
		*/
		/*this.state = {
			unreadMessage : ['a','b']
		}*/

		this.state ={
			isLoggedIn : true
		}
		this.handleLogInAndOut = this.handleLogInAndOut.bind(this)
	}

	handleLogInAndOut(){
		this.setState(prevState => {
			/*if(prevState.isLoggedIn == this.state.isLoggedIn){
				this.state.isLoggedIn = !this.state.isLoggedIn
			} 
*/
			return{
				isLoggedIn:!prevState.isLoggedIn
			}
		})
		
		console.log('handleLogInAndOut ' + this.state.isLoggedIn)
	}

	render(){
		/*return(
			<div>
				{this.state.unreadMessage.length >0  && 
				<h1>You have {this.state.unreadMessage.length} unread messages.</h1> 
			}
			</div>
		)*/
		let logCta = this.state.isLoggedIn ? "Log out" : "Log in"
		let displayCta = this.state.isLoggedIn ? "Log In" : "Log Out"
		return(
			<div>
				<button onClick={this.handleLogInAndOut} >{logCta}</button>
				<h1>{displayCta}</h1>
				
			</div>
			

		)
	}
}





export default App;