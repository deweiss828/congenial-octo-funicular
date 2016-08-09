


var BlogItem = React.createClass({
	propTypes: {
		title: React.PropTypes.string.isRequired,

		date: React.PropTypes.instanceOf(Date).isRequired,
		content: React.PropTypes.string.isRequired,
		imgUrl: React.PropTypes.string
	},
	render: function() {
		return (
			React.createElement('div', {},
				React.createElement('h2', {}, this.props.title),
				React.createElement('h4', {},
					this.props.date.toDateString()),
				React.createElement('p', {}, this.props.title),
				React.createElement('img', {
					src: this.props.imgUrl
				})
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


var rootElement = React.createElement('div', {},
		React.createElement(BlogItem,firstBlog),
		React.createElement(BlogForm, {blog:{title: '',
			date: '',
			content: '',
			imgUrl: ''
			}
		})
	)

ReactDOM.render(rootElement, document.getElementById('react-app'))
