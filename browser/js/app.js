var Navbar = React.createClass({
	propTypes: { },
	render: function() {
		return (
			React.createElement('ul', { className: 'navbar'},
				React.createElement('li', {}, 'ABOUT'),
				React.createElement('li', {}, 'CONTACT'),
				React.createElement('li', {}, 'WORK'),
				React.createElement('li', {}, 'OTHER')
			)
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


var firstBlog ={
	title: 'My week at camp',
	date: new Date(2016, 08, 09),
	content: 'I will take back appreciation from camp.',
	imgUrl: './images/camp2016.jpg'
}


var rootElement = React.createElement('div', { className: 'splash'},
		React.createElement(Navbar, { className: 'navbar'}),
		React.createElement('div')
	)

ReactDOM.render(rootElement, document.getElementById('react-app'))
