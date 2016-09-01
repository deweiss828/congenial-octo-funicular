var models = require('./models');
var Photograph = models.Photograph;

Photograph.create([
	{
		title: 'Les Alpes',
		image: 'http://imgur.com/OxlFieM.jpg'
	},
	{
		title: 'Manhattan Views',
		image: 'http://imgur.com/XDvNck4.jpg'
	},
	{
		title: 'Wall Street a la neige',
		image: 'http://imgur.com/4EU5FCg.jpg'
	},
	{
		title: 'Ship Street Sunset',
		image: 'http://http://imgur.com/qpLh0FO.jpg'
	},
	{
		title: 'Ship Street at Dusk',
		image: 'http://imgur.com/POJVhMe.jpg'
	},
	{
		title: 'Waning Gazebo',
		image: 'http://imgur.com/OxidjTN.jpg'
	},
	{
		title: 'Pine / Moon',
		image: 'http://imgur.com/gfKHHfc.jpg'
	}
]).then(function(){
	console.log("done!")
}).then(null, function(err){
	console.error(err);
})
