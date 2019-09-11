import React from 'react';
import MyHeader from './components/MyHeader';
import MainContainer from './components/MainContainer';
import MyFooter from './components/MyFooter';
import TodoItem from './components/TodoItem';
import CardComponent from './components/CardComponent';
import DISHES from './shared/dishes';
import todosData from './shared/todosData';
import DishdetailComponent from './components/DishdetailComponent'

function App(){

	const nums = [1,2,3,4,6,7,8,9]
	const doubled = nums.map(function(num){
		return num*2
	})

	/*DISHES.map(function(){

	})*/

	const todoLists = todosData.map(item => {
		return(
			<TodoItem key={item.id} text={item.text} completed={item.completed} />
		)
	})

	const dishComp = DISHES.map(dish => {
		return(
			<DishdetailComponent key={dish.id}
				name={dish.name}
				image={dish.image}
				category={dish.category}
				label={dish.label}
				price={dish.price}
				description={dish.description}
			/>
		)
	})

	const cardComponent = DISHES.map( dish => {

		return(
			<CardComponent key={dish.id}
				imgSrc={dish.image}
				name={dish.name}
				price={dish.price}
				description={dish.description}
			/>
		)
		
	})

	console.log(doubled)

	const styles = {
		backgroundColor:'#eee', 
		color:'green',
		fontSize: '20px'
	}

	const styleMood = {
		fontSize: '40px'
	}

	const fname = 'priyavrat'
	const lname = 'shukla'

	const date = new Date()
	const hours = date.getHours()
	let timeOfDay

	if(hours < 12){
		timeOfDay = "morning"
		styleMood.color = "green"
	}else if(hours >= 12 && hours <= 17){
		timeOfDay = "afternoon"
		styleMood.color = "red"
	}else{
		timeOfDay = "night"
		styleMood.color = "blue"
	}

	return(
		<div>
			<MyHeader/>

			<h1 style ={styles}> Hello {`${fname} ${lname}`} </h1>

			<h1>It is currently about {date.getHours() % 12} o'clock. </h1>

			<h1 style ={styleMood}>Good {timeOfDay}!</h1>

			<div className="todo-list">
				{todoLists}
			</div>
			<div>
			<CardComponent 
				cardObj = {{name:'Uthappizza', imgSrc:'assets/images/uthappizza.png', price:'4.99', description:'A unique combination of Indian Uthappam (pancake) and Italian pizza'}} 
			/>
			
			{cardComponent}

			</div>
			<MainContainer/>

			<DishdetailComponent
				name="virgino moito"
				category="drink"
				price="4.99"
				description="bla bla bla"

			/>
			===================================================

			{dishComp}

			==================================================================
	
			<MyFooter/>

			
		</div>
	)
}

export default App;