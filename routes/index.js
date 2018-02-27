var express = require('express');
var router = express.Router();

var names = []

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/addname', function(req, res, next) {
	//want the user to send a name
	//inside the body of the request

	var x = req.body.name 
	names.push(x)
	res.send(names)
})
//router.delete(...)
//router.put(...)

router.get('/getnames', function(req, res, next) {
	res.send(names)
})

module.exports = router;
