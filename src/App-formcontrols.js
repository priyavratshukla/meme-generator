import React, {Component} from 'react';
import TodoItem from './components/TodoItem';
import todosData from './shared/todosData';

//todo app continued

class App extends Component{
	constructor(){
		super()
		this.state = {
			firstName:'',
			lastName:'',
			description:'',
			isFriendly:true,
			gender:'',
			favColor:''
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
		const isFriendlyChk = this.state.isFriendly ? 'Friendly' : 'Not Friendly'
		
		return(
			<form onSubmit={this.handleSubmit}>
			<div className="todo-list">
				
				<input 
					type="text" 
					value={this.state.firstName} 
					name="firstName" 
					placeholder="enter your first name" 
					onChange={this.handleChnage} />
				
				<br/>

				<input 
					type="text" 
					value={this.state.lastName} 
					name="lastName" 
					placeholder="enter your last name" 
					onChange={this.handleChnage} />

				<br/>

				<input 
					type="email" 
					value={this.state.email} 
					name="email" 
					placeholder="enter your email" 
					onChange={this.handleChnage} />

				<br/>

				

				 

				<h1>{this.state.firstName} {this.state.lastName}</h1>
				<h2>{this.state.email}</h2>
				<br/>
				<textarea 
					name="description"
					placeholder="enter your details"
					value={this.state.description}
					onChange={this.handleChnage}
				 />
				<h2>{this.state.description}</h2>

				
				 <br/>

				<input 
					type="checkbox" 
					name="isFriendly"
					value={this.state.isFriendly}
					onChange={this.handleChnage}
				/> is Friendly?

				<h2>you are {isFriendlyChk}</h2>

				<br/>

				<input 
					type="radio"
					name="gender"
					value="male"
					checked={this.state.gender === 'male'}
					onChange={this.handleChnage}
				/>Male

				
				<br/>

				<input 
					type="radio"
					name="gender"
					value="female"
					checked={this.state.gender === 'female'}
					onChange={this.handleChnage}
				/>Female

				<br/>
				<h2>you are {this.state.gender}</h2>

				<select value={this.state.favColor}	onChange={this.handleChnage} name="favColor">
					<option value="blue">blue</option>
					<option value="orange">orange</option>
					<option value="red">red</option>
				</select>
				<br/>
				<p>your fav color is {this.state.favColor}</p>


				<button>Submit</button>

			</div>
			</form>
		)
	}
}





export default App;