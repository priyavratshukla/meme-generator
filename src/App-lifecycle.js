import React, {Component} from 'react';
import TodoItem from './components/TodoItem';
import todosData from './shared/todosData';

//todo app continued

class App extends Component{
	constructor(){
		super()
		this.state = {
			loading:false,
			showResult:{}
			
		}
		
	}

	componentDidMount(){
		this.setState({
			loading:true
		})
		//component born here
		//this method called only once
		//eg. if want to display the response of requested api 
		fetch('https://swapi.co/api/people/1')
			.then(response => response.json())
			.then(data => {
				this.setState({
					loading:false,
					showResult:data
				})
			})
	}


/*	componentWillReceiveProps(nextProps){
		//will get called everytime when parent comp wnats to send props to child comps
		//checks weather next props is same or differnt than current props
		//this is deprecated as of react 16
		//eg below
		if(nextProps.whatever !== this.props.whatever){
			//do somethig accordingly
		}
	}



	componentWillUnmount(){
		//for clean up your code before ur component disappears
		//eg remove event listners
	}


	

	static getDerivedStateFromProps(props, state){
		//
	}

	getSnapshotBeforeUpdate(){
		//create backup of current way of things
	}*/

	

	render(){
		const textLoading = this.state.loading ? "Loading..." : this.state.showResult.name
		return(
			<div className="todo-list">
				{textLoading}
				
			</div>
		)
	}
}





export default App;