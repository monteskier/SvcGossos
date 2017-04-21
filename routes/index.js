var express = require('express');
var router = express.Router();
var ObjectID = require('mongodb').ObjectID;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/llista', function(req, res, next){
  var db = req.db;
  var collection = db.get('cens');
  collection.find({},{}, function(err, doc){
    if(err) res.send("Error en tibar les dades de Mongo = "+err);
    res.json(doc);


  });
});
router.post('/nouPost', function(req, res, next){
  var db = req.db;
  var collection = db.get("cens");
  var gos = req.body.gos;

  collection.insert({"censGos":gos},function(err,doc){
    if(err){
      res.json({"msg":"erron en dessar"});
    }
    res.json({"msg":"Dessat Correctament"});
  });
});
router.post('/editar', function(req, res, next){
  var db = req.db;
  var collection = db.get("cens");
  var obj = req.param('obj');
  objId = new ObjectID(obj);
  console.log("Aquest es el id que busca mongo = "+objId);
  collection.findOne({_id: objId}, function(err, doc){
    console.log(doc);
    res.send(doc);

  });
});
router.post('/eliminar', function(req, res, next){
  console.log("algo");

  var db = req.db;
  var collection = db.get("cens");
  var obj = req.param('obj');
  objId = new ObjectID(obj);
  console.log("Aquest es el id que eliminara mongo = "+objId);

  collection.remove({_id: objId}, function(err, doc){
    if(err){
      res.json({"msg":"No s'ha pogut eliminar el registre"});
    }
      res.json({"msg":"Registre eliminat correctament"});

  });
});
router.post("/update", function(req, res, next){
  var db = req.db;
  var collection = db.get("cens");
  var obj = req.param("obj");
  var gos = req.body.gos;
  objId = new ObjectID(obj);
  collection.update({_id: objId},{"censGos":gos}, function(err, doc){
    if(err){
      res.json({"msg":"Error a l'hora de actulaitzar el registre"});
    }
    res.json({"msg":"S'han actualitzat les dades correctament"});
  });
});

module.exports = router;
