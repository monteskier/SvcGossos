var express = require('express');
var router = express.Router();
var ObjectID = require('mongodb').ObjectID;

/* GET home page. */
function login(req){
  if(req.session==true){
    return true;
  }else return false;
}

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login', function(req, res, next){
  var name = req.param("name");
  var password = req.param("password");
  var db = req.db;
  var collection = db.get("user");
  collection.find({name:name, password:password}, function(err, docs){
    if(err || docs.length==0){
      res.json({"msg":"Usuari o contrasenya incorrectes","login":false});
    }
    console.log(typeof(docs));
    console.log(docs);
    req.session.user = docs[0].name;
    req.session.session = true;
    res.json({"msg":"Benvingut/da "+ req.session.user, "session":true, "login":true});
  });

router.post('/logout', function(req, res, next){
  req.session.destroy();
  res.json({"msg":"S'ha tencat la sessió correctament"});
});

});
router.get('/llista', function(req, res, next){
  if(login(req.session)){
    var db = req.db;
    var collection = db.get('cens');
    collection.find({},{}, function(err, doc){
      if(err) res.send("Error en tibar les dades de Mongo = "+err);
      res.json(doc);
  });
  }else{
    res.json({"msg":"No tens provilegis per accedir"});
  }
});
router.post('/nouPost', function(req, res, next){
  if(login(req.session)){
    var db = req.db;
    var collection = db.get("cens");
    var gos = req.body.gos;

    collection.insert({"censGos":gos},function(err,doc){
      if(err){
        res.json({"msg":"erron en dessar"});
      }
      res.json({"msg":"Dessat Correctament"});
    });
  }else{
    res.json({"msg":"No tens provilegis per accedir"});
  }
});
router.post('/editar', function(req, res, next){
  if(login(req.session)){
    var db = req.db;
    var collection = db.get("cens");
    var obj = req.param('obj');
    objId = new ObjectID(obj);
    console.log("Aquest es el id que busca mongo = "+objId);
    collection.findOne({_id: objId}, function(err, doc){
      console.log(doc);
      res.send(doc);

    });
  }else{
    res.json({"msg":"No tens provilegis per accedir"});
  }
});
router.post('/eliminar', function(req, res, next){
  if(login(req.session)){
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
  }else{
    res.json({"msg":"No tens privilegis per accedir"});
  }
});
router.post("/update", function(req, res, next){
  if(login(req.session)){
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
  }else{
    res.json({"msg":"No tens privilegis per accedir"});
  }
});

module.exports = router;
