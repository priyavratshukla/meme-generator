import React from 'react';

/*function CardComponent(props){
	console.log(props);
	return(
		<div className="card-comp">
			<img style={{border:!props.image && "red solid 10px"}} src={props.image}/>
			<h3 style={{color:!props.name && "#ccc"}}>{props.name}</h3>
			<p style={{color:!props.price && "#ccc"}}>Price : {props.price}</p>
			<p style={{color:!props.description && "#ccc"}}>{props.description}</p>
		</div>
	)
}*/

class CardComponent extends React.Component{
	render(){
		return(
			<div className="card-comp">
				<img style={{border:!this.props.image && "red solid 10px"}} src={this.props.image}/>
				<h3 style={{color:!this.props.name && "#ccc"}}>{this.props.name}</h3>
				<p style={{color:!this.props.price && "#ccc"}}>Price : {this.props.price}</p>
				<p style={{color:!this.props.description && "#ccc"}}>{this.props.description}</p>
			</div>
		)
	}
}

export default CardComponent;