import React, {Component} from 'react';
import TodoItem from './components/TodoItem';
import todosData from './shared/todosData';

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
		console.log('hanlde chnage method gets called', id);
		this.setState(prevState => {
			const updatedtodoList = prevState.todoList.map(todo => {
				if(todo.id === id){
					todo.completed = !todo.completed
				}
				return todo
			})

			return{
				todoList:updatedtodoList
			}

			
		})
	}

	render(){

		const todoLists = this.state.todoList.map(item => {
			return(
				<TodoItem key={item.id} item={item} text={item.text} completed={item.completed}  
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





export default App;