const router = require('express')()
const models = require('../../db/models');
const Photo = models.Photo;

router.get('/', (req, res) => {
	res.send('in here')
})
router.get('/photos', (req, res, next) => {
	Photo.findAll()
	.then(photos => {
		console.log(photos)
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


module.exports = router;
