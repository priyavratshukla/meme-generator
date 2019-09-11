import React, {Component} from 'react';


//todo app continued

class App extends Component{
	constructor(){
		super()
		this.state = {
			firstName:'',
			lastName:'',
			age:''
		}
		this.handleChnage = this.handleChnage.bind(this)
		
	}

	handleChnage(event){
		const {name, value, type, checked} = event.target
		type === 'checkbox' ? this.setState({[name]:checked}) : this.setState({
			[name]:value
		})

		/*this.setState({
			[event.target.name]:event.target.value
		})*/
	}


	handleSubmit(){
		alert('your form has been submitted succesfully.')
	}

	render(){
		
		return(
			<form onSubmit={this.handleChnage}>
			<div className="todo-list">
				
				<input 
					type="text" 
					value={this.state.firstName} 
					name="firstName" 
					placeholder="First Name" 
					onChange={this.handleChnage} />
				
				<br/>

				<input 
					type="text" 
					value={this.state.lastName} 
					name="lastName" 
					placeholder="Last Name" 
					onChange={this.handleChnage} />

				<br/>

				<input 
					type="number" 
					value={this.state.age} 
					name="age" 
					placeholder="Age" 
					onChange={this.handleChnage} />

				<br/>

				<button>Submit</button>

				<br/>

				<h1>Entered Information :</h1>
				<br/>
				<h3>Your Name : {this.state.firstName} {this.state.lastName}</h3>
				<br/>
				<h3>Your Age : {this.state.age}</h3>
			
			</div>
			</form>
		)
	}
}





export default App;