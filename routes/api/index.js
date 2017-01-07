const router = require('express')()
const models = require('../../db/models');
const Photo = models.Photo;
const BlogPost = models.BlogPost;

router.get('/', (req, res) => {
	res.send('in here')
})
router.get('/photos', (req, res, next) => {
	Photo.findAll()
	.then(photos => {
		res.json(photos)})
	.catch(next)
})

router.post('/photos', (req, res, next) => {
	Photo.create(req.body, {
		returning: true
	})
	.then(photo => res.json(photo))
	.catch(next)
})

router.post('/many-photos', (req, res, next) => {
	Photo.bulkCreate(req.body, {
		returning: true
	})
	.then(photos => res.json(photos))
	.catch(next)
})

router.post('/many-photos', (req, res, next) => {
	Photo.bulkCreate(req.body, {
		returning: true
	})
	.then(photos => res.json(photos))
	.catch(next)
})

router.get('/blog-posts', (req, res, next) => {
	BlogPost.findAll()
	.then(posts => {
		res.json(posts)})
	.catch(next)
})

router.delete('/blog-posts/:id', (req, res, next) => {
	BlogPost.destroy({
		where: req.params
	})
	.then(affectedRows => {
		console.log(affectedRows)
		res.send(202)
	})
	.catch(next)
})

router.post('/blog-posts', (req, res, next) => {
	BlogPost.create(req.body, {
		returning: true
	})
	.then(post => res.json(post))
	.catch(next)
})

router.post('/many-blog-posts', (req, res, next) => {
	BlogPost.bulkCreate(req.body, {
		returning: true
	})
	.then(posts => res.json(posts))
	.catch(next)
})




module.exports = router;
