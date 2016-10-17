import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'



var Navbar = React.createClass({
	render: function() {
		return (
			<ul className="navbar">
				<li><Link to="about">About</Link></li>
				<li><Link to="/about">Photography</Link></li>
				<li><Link to="/about">Writing</Link></li>
				<li><Link to="/about">Contact</Link></li>
			</ul>
		)
	}
})

var BlogForm = React.createClass({
	propTypes:{
		blog: React.PropTypes.object.isRequired
	},
	render: function() {
		return (
			React.createElement('form', {},
				React.createElement('input', {htmlFor: 'title', placeholder: 'Title', value: this.props.blog.title}),
				React.createElement('input', {htmlFor: 'date', placeholder: 'Date', value: this.props.blog.date}),
				React.createElement('textarea', {htmlFor:'content', placeholder: 'Content', value: this.props.blog.content}),
				React.createElement('input', {htmlFor:'imgUrl', placeholder: 'Image Url', value: this.props.blog.imgUrl}),
				React.createElement('button', {type: 'submit'})
			)
		)
	}
})

var AboutMe = React.createClass({
	render () {
		return (
			<div>
				<h1>This is the heading!!!</h1>
				<p>This is the body</p>
			</div>
		)
	}
})


var RootElement = React.createClass({
	render () {
		return (
			<div className='splash'>
			<Navbar className='navbar'/>
			</div>
		)
	}
})

class App extends Component {
	render() {
		return (
			<Router history={browserHistory}>
			<Route path="/" component={RootElement}/>
				<Route path="/about" component={AboutMe}/>
		</Router>
		)
	}
}
export default App;
