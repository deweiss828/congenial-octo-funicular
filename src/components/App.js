import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import Resume from './Resume'
import Home from './Home'
import PhotoContainer from './PhotoContainer'
import BlogPreview from './BlogPreview'

import '../styles/main.scss'

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
				<li><Link to="/writing">Writing</Link></li>
				<li><Link to="/about">Contact</Link></li>
				<li><Link to="/resume">Resume</Link></li>
			</ul>
		)
	}
})



var AboutMe = React.createClass({
	render () {
		return (
			<div>
				<h1>This is the what!!!</h1>
				<p>This is the body</p>
			</div>
		)
	}
})

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
					<Route path="/resume" component={Resume}/>
					<Route path="/photos" component={PhotoContainer} />
					<Route path="/writing" component={BlogPreview} />
					<Route path="*" component={NotFound}/>
				</Route>
		</Router>
		)
	}
}
export default App;
