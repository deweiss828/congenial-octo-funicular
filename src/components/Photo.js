import React, { Component } from 'react'
import axios from 'axios'
import '../styles/photo.scss'

class PhotoContainer extends Component {
	constructor(){
		super()
		this.state = {
			photos: []
		}
	}
	componentDidMount(){
		axios.get('api/photos')
		  .then(resp => resp.data)
		  .then(photos => {
		  	console.log('photos:', photos)
		  	// this.setState.bind(Main) //why is this not necessary?
		  	this.setState({ photos: photos })
		  })
		  .catch(err=>{
		  	console.log(err)
		  });
	}
	render() {
	 return (
		 	<div id="photo-container">
		 	{
		 		this.state.photos.map(photo => {
		 			return (
		 				<Photo src={photo.imgSrc} caption={photo.caption}/>)
		 		})
		 	}
		 </div>
		)
	}
}
const Photo = (props) => (
	<figure>
		<img src={props.imgSrc}/>
		<figcaption>{props.caption}</figcaption>
	</figure>
)

export default PhotoContainer
