var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/nouPost', function(req, res, next){
  var db = req.db;
  var collection = db.get("cens");
  var gos = req.body.gos;
  console.log(gos);
  collection.insert({"censGos":gos},function(err,doc){
    if(err){
      res.send("erron en dessar = " + err);
    }
     res.send("Dessat Correctament");
  });
});

module.exports = router;
