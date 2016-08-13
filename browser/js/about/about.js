app.config(function($stateProvider){
	console.log('in the state')
	$stateProvider.state('AboutMeState', {
		template: './about.html',
		url:'/about'
	});
});