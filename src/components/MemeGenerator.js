import React, {Component} from 'react';

class MemeGenerator extends Component {
	constructor(){
		super()
		this.state = {
			topText:'',
			bottomText:'',
			randomImage:'https://i.imgflip.com/30b1gx.jpg',
			allMemeImgs:[]
		}
		this.handleChnage = this.handleChnage.bind(this)
		this.createRandomImg = this.createRandomImg.bind(this)
	}

	componentDidMount(){
		fetch('https://api.imgflip.com/get_memes')
		.then(response => response.json())
		.then(response => {
			this.setState({
				allMemeImgs:response.data.memes
			})
			console.log(response.data)
			console.log(response.data.memes)
		})
	}

	handleChnage(event){
		const {name, value} = event.target
		this.setState({
			[name]:value
		})
		console.log('working')

	}

	createRandomImg(event){
		event.preventDefault()
		const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
		const randImg = this.state.allMemeImgs[randNum].url
		this.setState({
			randomImage:randImg
		})
	}

	render(){

		const imgStyle={
			position: 'absolute',
    		top:'20px',
    		left:'0'
		}

		return(
			<div>
				<br/>
				<form className="meme-form" onSubmit={this.createRandomImg}> 
					<input 
						type="text" 
						value={this.state.topText}
						name="topText"
						placeholder="Enter the top text"
						onChange={this.handleChnage}
					/> 
					&nbsp;
					<input 
						type="text" 
						value={this.state.bottomText}
						name="bottomText"
						placeholder="Enter the top text"
						onChange={this.handleChnage}
					/>
					&nbsp;
					<button>Gen</button>
				</form>
				<div className="meme">
					<h1>{this.state.topText}</h1>
					<h2>{this.state.bottomText}</h2>
					<img style={imgStyle} height="400px" width="600px" src={this.state.randomImage} />
				</div>
			</div>
		)
	}
}

export default MemeGenerator;
