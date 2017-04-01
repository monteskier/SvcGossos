var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/nouPost', function(req, res, next){
  var db = req.db;
  var collection = db.gossos;
  var gos = req.body;
  console.log(gos);
  collection.insert({"censGos":gos},function(err,doc){
    if(err){
      res.json({"msg":"erron en dessar"});
    }
    res.json({"msg":"dessat correctament"});
  })
});

module.exports = router;
