


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

var blogElement = React.createElement(BlogItem, {
	title: 'My week at camp',
	date: new Date(2016, 08, 09),
	content: 'I will take back appreciation from camp.',
	imgUrl: './camp2016.jpg'
})


ReactDOM.render(blogElement, document.getElementById('react-app'))
