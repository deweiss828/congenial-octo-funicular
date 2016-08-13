var models = require('./models');
var Project = models.Project;

Project.create([
	{
		title: 'Personal Website',
		collaborators: ['someone','someone else'],
		image: 'puppy.jpeg' //find a pic

	},
	{
		title: 'Kat Mello',
		collaborators: ['someone','someone else'],
		image: 'puppy.jpeg' //finda pic

	}

]).then(function(){
	console.log("done!")
}).then(null, function(err){
	console.error(err);
})