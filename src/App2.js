import React, {Component} from 'react';
import TodoItem from './components/TodoItem';
import todosData from './shared/todosData';


/*class App extends Component{
	constructor(){
		super();
		this.state = {
			name:'rambo',
			age:'30'
		}
	}
	render(){
		return(
			<div>
				<h1>{this.state.name}</h1>
				<h3>{this.state.age} years old.</h3>
			</div>
		)
	}
	
}*/

/*class App extends Component{
	constructor(){
		super()
		this.state = {
			isLoggedIn : true
		}
	}

	render(){
		let lable
		if(this.state.isLoggedIn){
			lable = 'in'
		}else{
			lable = 'out'
		}
		return(
			<div>
				<h1>You are currently logged&nbsp;{lable}</h1>
			</div>
		)
	}
}*/

//todo app continued

class App extends Component{
	constructor(){
		super()
		this.state = {
			todoList:todosData
		}
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(id){
		console.log('hanlde chnage method gets called' + id);
	}

	render(){

		const todoLists = this.state.todoList.map(item => {
			return(
				<TodoItem key={item.id} text={item.text} completed={item.completed}  
				handleChange={this.handleChange}/>
			)
		})

		return(
			<div className="todo-list">
				{todoLists}
			</div>
		)
	}
}

/*events in react

function handleClick(id){
	console.log('i was clicked');
}

function handleMouseHover(){
	console.log('i was mouse hovered');
}

class App extends Component{
	render(){
		return(
			<div>
				<img onMouseOver={handleMouseHover} style={{border:this.handleMouseHover && "10px solid red"}} src="assets/images/uthappizza.png"/>
				<br/>
				<br/>
				<button onClick={() => console.log("i m clicked")}>Click Me!</button><br/><br/>
				<button >Click Me!</button>
			</div>
		)
	}
}*/

/*const styleMood = {
	textAlign : 'center'
}



class App extends Component{
	constructor(){
		super()
		this.state ={
			count : 0
		}
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(){
		console.log('clicked');
		this.setState((prevState) => {
			return(
				count : prevState.count + 1
			)
		})
	}

	render(){
		return(
			<div style={styleMood}>
				<h1>{this.state.count}</h1>
				<button onClick={this.handleClick}>Change!</button>
			</div>
		)
	}
}*/



export default App;