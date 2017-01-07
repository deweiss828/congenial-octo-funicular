import React, { Component } from 'react'
import '../styles/blog-preview.scss'
import axios from 'axios'

export default class BlogPreview extends Component {
	constructor(){
		super()
		this.state = {
			posts: []
		}
	}
	componentDidMount(){
		axios.get('api/blog-posts')
		  .then(resp => resp.data)
		  .then(posts => {
		  	console.log('posts:', posts)
		  	// this.setState.bind(Main) //why is this not necessary?
		  	this.setState({ posts: posts })
		  })
		  .catch(err=>{
		  	console.log(err)
		  });
	}
	render(){
		const { posts } = this.state

			posts.map(post => {
				console.log(typeof post.date)
				console.log(new Date(post.date))
			})
		return (
			<div>
			{ posts.map(post => {
				return (
				<div id='blog-preview'>
					<div id='entry-row'>
						<div class='left'>{post.title}</div>
						<div class='right'>{post.date}</div>
					</div>
					<div>
        </div>
				</div>
				)})
			}
			</div>
		)
	}
}


