

const blooddonationsFilePath = 'ddbb/blood-donations.json';
const BASE_API_URL = "/api/v1";
var port = process.env.PORT || 12345;
import { notStrictEqual } from 'assert';
import { Console } from 'console';
import fs from 'fs';
import Datastore from 'nedb';
var blooddonations = new Datastore();


function loadBackend_CGM(app){

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
    const {date,place,dnt_people,dnt_blood,dnt_plasme,dnt_new,limit=100,offset=0} = req.query;
    const query = {};
  
    if (date) {
      query.date = { $regex: new RegExp(date, 'i') };
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
          res.json(blooddonations.map((j) => {
            delete j._id;
            return j;
        }));
        }
      });
  });
  
  //Get específico, búsqueda de dos valores
  app.get('/api/v1/blood-donations/:value/:value2?', (req, res) => {
    const { value, value2 } = req.params;
    const query = { $where: function() {
      const keys = Object.keys(this);
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (typeof this[key] === 'number' && this[key] === parseFloat(value)) {
          return true;

        } else if (typeof this[key] === 'string' && this[key].toLowerCase().includes(value.toLowerCase()) && key !== "date") {
          if (value2) {
            const nextKey = keys[i + 1];
            if (nextKey && typeof this[nextKey] === 'number' && parseInt(value2) === this[nextKey]) {
              return true;
            }
          } else {
            return true;
          }
        
        } else if (typeof this[value] === 'string' && typeof parseInt(value2) === 'number' && Number.isInteger(parseInt(value2))) {
          if (this[value] === value && parseInt(this[value2]) === parseInt(value2)) {
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
        res.sendStatus(404);
      } else {
        console.log(`blooddonations returned = ${blooddonations.length}`)
        
        if (typeof value === 'string' && typeof parseInt(value2) === 'number' && Number.isInteger(parseInt(value2))) {
          if (blooddonations.length === 1) {
            delete blooddonations[0]._id;
            res.json(blooddonations[0]);
          } else { 
            res.json(blooddonations.map((j) => {
              delete j._id;
              return j;
            }));
          }
        } else if (!value2 && blooddonations.length === 1) {
          delete blooddonations[0]._id;
          res.json(blooddonations[0]);
        } else { 
          res.json(blooddonations.map((j) => {
            delete j._id;
            return j;
          }));
        }
      }
    });
  });
  
  //POST fallo
  app.post(BASE_API_URL + "/blood-donations/*", (req, res) => {
    res.sendStatus(405);
  });
  
  //POST ok
  app.post(BASE_API_URL+"/blood-donations",(req,res)=>{
    const newReq = req.body;
      if (!newReq.hasOwnProperty('date') || !newReq.hasOwnProperty('place') || 
      !newReq.hasOwnProperty('dnt_people') || !newReq.hasOwnProperty('dnt_blood') || 
      !newReq.hasOwnProperty('dnt_plasme') || !newReq.hasOwnProperty('dnt_datef') ||
      !newReq.hasOwnProperty('dnt_new') || !newReq.hasOwnProperty('extraction') ||
      !newReq.hasOwnProperty('idcenter') || !newReq.hasOwnProperty('center')) {
        return res.sendStatus(400);
      }

      
      blooddonations.findOne({ date:newReq.date, place:newReq.place, dnt_people:newReq.dnt_people, 
      dnt_blood:newReq.dnt_blood, dnt_plasme:newReq.dnt_plasme, dnt_datef:newReq.dnt_datef, 
      dnt_new:newReq.dnt_new, extraction:newReq.extraction, idcenter:newReq.idcenter, center:newReq.center 
      }, (err, doc) => {
        if (err) {
          console.log(`Error finding blood donation`);
          res.sendStatus(500);
        } else if (doc) {
          res.sendStatus(409);
        } else {
          blooddonations.insert(newReq, (err, newDocs) => {
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
          return res.sendStatus(500);
      }
      return res.sendStatus(200);
  });
  });
  
  //DELETE  DE UN RECURSO
  app.delete(BASE_API_URL + "/blood-donations/:dnt_people", (req, res) => {
    const bd_dnt_people = Number(req.params.dnt_people);
    blooddonations.remove({ dnt_people: bd_dnt_people }, {}, (err, numRemoved) => {
        if (err) {
            console.error(err);
            return res.sendStatus(500);
        }
        if (numRemoved === 0) {
          return res.sendStatus(400);
        }
        return res.sendStatus(200);
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
      blooddonations.update({ dnt_people: bd_dnt_people }, { $set: updatedBd }, {}, (err, existe) => {
        if (err) {
          console.error(err);
          return res.sendStatus(500);
        }
        if (!existe) {
          return res.sendStatus(400);
        }
        return res.sendStatus(200);
      });
  });
  
}

export{loadBackend_CGM};