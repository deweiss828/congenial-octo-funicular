import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

const NotFound = () => (
	<h1>404... This page is not found!</h1>
)

var Navbar = React.createClass({
	render: function() {
		return (
			<ul className="navbar">
				<li><Link onlyActiveOnIndex activeStyle={{color:'#53acff'}} to="/">Home</Link></li>
				<li><Link activeStyle={{color:'#53acff'}} to="about">About</Link></li>
				<li><Link activeStyle={{color:'#53acff'}} to="/photos">Photography</Link></li>
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

const Home = () => (
	<div>Home!</div>
)

var Root = (props) => (
	<div className='splash'>
		<Navbar className='navbar'/>
		{props.children}
	</div>
)

class App extends Component {
	render() {
		return (
			<Router history={browserHistory}>
				<Route path="/" component={Root}>
					<IndexRoute component={Home} />
					<Route path="/about" component={AboutMe}/>
					<Route path="/photos" component={AboutMe}/>
					<Route path="*" component={NotFound}/>
				</Route>
		</Router>
		)
	}
}
export default App;
