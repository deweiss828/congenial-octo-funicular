var rootElement = React.createElement('div', {},
		React.createElement('h2', {}, 'Title'),
		React.createElement('h4', {},
			'Date'),
		React.createElement('p', {}, 'This is the content'),
		React.createElement('img', {src:'./nedspoint.png'})
	)

ReactDOM.render(rootElement, document.getElementById('react-app'))

