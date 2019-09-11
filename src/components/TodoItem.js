import React, {Component} from 'react';


/*function TodoItem(props){
	console.log(props)
	return(
		<div className = "todo-item">
			<input type="checkbox" 
			checked={props.item.completed}
			onChange={() => props.handleChange(props.item.id)} />
			<p>{props.text}</p>
		</div>
	)
}*/

class TodoItem extends Component{

	constructor(props){
		super(props)
	}

	

	render(){
		const completedItem = {
			textDecoration: 'line-through',
			color:'#333',
			fontStyle:'italic'
		}
		console.log(this.props)
		return(
			<div className = "todo-item completedItem">
				<input type="checkbox" 
				checked={this.props.completed} 
				onChange={(event) => this.props.handleChange(this.props.item.id)} />
				<p style={this.props.completed ? completedItem : null}>{this.props.text}</p>
			</div>
		)
	}
}


export default TodoItem;