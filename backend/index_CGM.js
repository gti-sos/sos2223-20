

const blooddonationsFilePath = 'ddbb/blood-donations.json';
const BASE_API_URL = "/api/v1";
var port = process.env.PORT || 12345;
const { notStrictEqual } = require('assert');
const { Console } = require('console');
const fs = require('fs');
var Datastore = require('nedb'), blooddonations = new Datastore();




module.exports = (app) => {

app.get(BASE_API_URL+'/blood-donations/docs', (req, res) => {
    res.redirect("https://documenter.getpostman.com/view/26062213/2s93RNxZnU");
  });
  
  app.get(BASE_API_URL+"/blood-donations/loadInitialData", (req, res) => {
    blooddonations.find({}, (err, docs) => {
      if (err) {
        console.log(`Error getting /blood-donations: ${err}`);
        res.sendStatus(500);
      } else if (docs.length === 0) {
        const blooddonationsData = JSON.parse(fs.readFileSync(blooddonationsFilePath));
        const initialBlooddonations = blooddonationsData.slice(0, 15);
        blooddonations.insert(initialBlooddonations, (err, newDocs) => {
          if (err) {
            console.log(`Error inserting initial data into blood donations: ${err}`);
            res.sendStatus(500);
          } else {
            console.log(`Inserted ${newDocs.length} initial blood donations`);
            res.sendStatus(200);
          }
        });
      } else {
        console.log(`Blood donations collection already has ${docs.length} documents`);
        res.sendStatus(200);
      }
    });
  });
  
  //GET de rango de búsqueda
  app.get(BASE_API_URL+"/blood-donations", (req,res) => {
    const {date,place,dnt_people,dnt_blood,dnt_plasme,dnt_new,limit=10,offset=0} = req.query;
    const query = {};
  
    if (date) {
      const startYear = parseInt(date);
      const startYearBegin = new Date(startYear, 0, 1);
      const startYearEnd = new Date(startYear + 1, 0, 1);
      query.date = { $gte: startYearBegin, $lt: startYearEnd };
    }
    if (place) {
      query.place = { $regex: new RegExp(place, 'i') };
    }
    if (dnt_people) {
      query.dnt_people = parseInt(dnt_people);
    }
    if (dnt_blood) {
      query.dnt_blood = parseInt(dnt_blood);
    }
    if (dnt_plasme) {
      query.dnt_plasme = parseInt(dnt_plasme);
    }
    if (dnt_new) {
      query.dnt_new = parseInt(dnt_new);
    }
    const limitValue = parseInt(limit);
    const offsetValue = parseInt(offset);
    blooddonations
      .find(query)
      .limit(limitValue)
      .skip(offsetValue)
      .exec((err, blooddonations) => {
        if (err) {
          console.log(`No blood donations found: ${err}`);
          res.sendStatus(404);
        } else {
          console.log(`Blood donations returned = ${blooddonations.length}`);
          res.json(blooddonations);
        }
      });
  });
  
  //Get específico, búsqueda de dos valores
  app.get('/api/v1/blood-donations/:value/:value2?', (req, res) => {
    const { value, value2 } = req.params;
    const query = { $where: function() {
      for (let key in this) {
        if (typeof this[key] === 'string' && this[key].includes(value)) {
          if (value2) {
            console.log(">>>>>>>>>>>>>>>>>> clave = " + typeof this[key]);
            console.log(">>>>>>>>>>>>>>>>>> boolean1 = " + typeof this[key]==='string');
            console.log(">>>>>>>>>>>>>>>>>> boolean2 = " + this[key].includes(value2));
            if (typeof this[key] === 'string' && this[key].includes(value2)) {
              console.log("asquiii");
              return true;
            }
          } else {
            return true;
          }
        }
      }
      return false;
    }};
    blooddonations.find(query, (err, blooddonations) => {
      if (err) {
        console.log(`Error getting /blooddonations: ${err}`);
        res.sendStatus(500);
      } else if (blooddonations.length === 0) {
        res.status(404).json({ error: 'Blood donations not found.' });
      } else {
        console.log(`Blood donations returned = ${blooddonations.length}`)
        res.json(blooddonations);
      }
    });
    console.log("Nuevo get a Blood donations");
  });
  
  //POST fallo
  app.post(BASE_API_URL + "/blood-donations/*", (req, res) => {
    console.log("POST FALLIDO HERE I AMMM");
    res.sendStatus(405);
  });
  
  //POST ok
  app.post(BASE_API_URL+"/blood-donations",(req,res)=>{
    const nbd = req.body;
      if (!nbd.date || !nbd.place || !nbd.dnt_people || !nbd.dnt_blood) {
        return res.status(400).json({ error: 'Faltan datos en el JSON' });
      }
      blooddonations.findOne({ date:nbd.date, place:nbd.place, dnt_people:nbd.dnt_people, 
      dnt_blood:nbd.dnt_blood, dnt_plasme:nbd.dnt_plasme, dnt_datef:nbd.dnt_datef, 
      dnt_new:nbd.dnt_new, extraction:nbd.extraction, idcenter:nbd.idcenter, center:nbd.center 
      }, (err, doc) => {
        if (err) {
          console.log(`Error finding blood donation`);
          res.sendStatus(500);
        } else if (doc) {
          res.status(409).json({ error: `Blood donation with already exists.` });
        } else {
          blooddonations.insert(nbd, (err, newDoc) => {
            if (err) {
              console.log(`Error inserting blood donation`);
              res.sendStatus(500);
            } else {
              console.log(`Inserted new blood donation`);
              res.sendStatus(201);
            }
          });
        }
      });
  });
  
  //DELETE  array completo
  app.delete(BASE_API_URL+"/blood-donations", (req, res) => {
    blooddonations.remove({}, { multi: true }, (err, numRemoved) => {
      if (err) {
          console.error(err);
          return res.status(500).send({ error: 'Internal server error' });
      }
      return res.status(200).send({ message: `Deleted ${numRemoved} blood donation` });
  });
  });
  
  //DELETE  DE UN RECURSO
  app.delete(BASE_API_URL + "/blood-donations/:dnt_people", (req, res) => {
    const bd_dnt_people = Number(req.params.dnt_people);
    blooddonations.remove({ dnt_people: bd_dnt_people }, {}, (err, numRemoved) => {
        if (err) {
            console.error(err);
            return res.status(500).send({ error: 'Internal server error' });
        }
        if (numRemoved === 0) {
            return res.status(400).send({ error: 'Bad request: Blood donation parameter not found' });
        }
        return res.status(200).send({ message: 'Blood donation deleted successfully' });
    });
  });
  
  // PUT fallido
  app.put(BASE_API_URL + "/blood-donations", (req, res) => {
    res.sendStatus(405);
  });
  
    //PUT a lista de recursos
    app.put(BASE_API_URL + "/blood-donations/:dnt_people",(req,res)=>{
      const bd_dnt_people = Number(req.params.dnt_people);
      const updatedBd = req.body;
    
      // Actualizar el objeto camping en la base de datos
      blooddonations.update({ dnt_people: bd_dnt_people }, { $set: updatedBd }, {}, (err, numReplaced) => {
        if (err) {
          console.error(err);
          return res.status(500).send({ error: 'Internal server error' });
        }
        if (numReplaced === 0) {
          return res.status(400).send({ error: 'Bad request: blood donations ID not found' });
        }
        return res.status(200).send({ message: 'Blood donations updated successfully' });
      });
  });
  
}