import React, {Component} from 'react';
//import {Card, CardImg, CardImgOverlay, CardTitle, CardText, CardBody} from 'reactstrap';
//import Menu from './components/MenuComponent';
//import DishDetail from './components/DishdetailComponent';

/*function DishdetailComponent(props){
	return(
		<div>
			<p style={{color:!props.name && "#ccc"}}>name: {props.name}</p>
	        <p style={{border:!props.image && "1px solid red"}}>image: {props.image}</p>
	        <p style={{color:!props.category && "#ccc"}}>category: {props.category}</p>
	        <p style={{color:!props.label && "#ccc"}}>label: {props.label}</p>
	        <p style={{color:!props.price && "#ccc"}}>price: {props.price}</p>
	        <p style={{color:!props.description && "#ccc"}}>description: {props.description}</p>
		</div>
	)
}*/

class DishdetailComponent extends React.Component{
	render(){
		return(
			<div>
				<p style={{color:!this.props.name && "#ccc"}}>name: {this.props.name}</p>
		        <p style={{border:!this.props.image && "1px solid red"}}>image: {this.props.image}</p>
		        <p style={{color:!this.props.category && "#ccc"}}>category: {this.props.category}</p>
		        <p style={{color:!this.props.label && "#ccc"}}>label: {this.props.label}</p>
		        <p style={{color:!this.props.price && "#ccc"}}>price: {this.props.price}</p>
		        <p style={{color:!this.props.description && "#ccc"}}>description: {this.props.description}</p>
				<img src={this.props.image} alt={this.props.name} />
			</div>
		)
	}
}

export default DishdetailComponent;