
const campingsFilePath = 'ddbb/camping-andalusia.json';
const immovablesFilePath = 'ddbb/immovables.json';
const blooddonationsFilePath = 'ddbb/blood-donations.json';
const BASE_API_URL = "/api/v1";
var port = process.env.PORT || 12345;
const { notStrictEqual } = require('assert');
const { Console } = require('console');
const fs = require('fs');
var Datastore = require('nedb'), campings = new Datastore();
var Datastore = require('nedb'), immovables = new Datastore();
var Datastore = require('nedb'), blooddonations = new Datastore();

module.exports = (app) => {
//L06 MAS______________________________________________________________________________________
//__________________________GET initial data

app.get(BASE_API_URL+'/andalusian-campings/docs', (req, res) => {
  res.redirect("https://documenter.getpostman.com/view/26063155/2s93K1oeqs");
});

app.get(BASE_API_URL+'/andalusian-campings/loadInitialData', (req, res) => {
    campings.find({}, (err, docs) => {
      if (err) {
        console.log(`Error getting /andalusian-campings: ${err}`);
        res.sendStatus(500);
      } else if (docs.length === 0) {
        const fs = require('fs');
        const campingsData = JSON.parse(fs.readFileSync(campingsFilePath));
        const initialCampings = campingsData.slice(0, 15);
        campings.insert(initialCampings, (err, newDocs) => {
          if (err) {
            console.log(`Error inserting initial data into campings: ${err}`);
            res.sendStatus(500);
          } else {
            console.log(`Inserted ${newDocs.length} initial campings`);
            res.sendStatus(200);
          }
        });
      } else {
        console.log(`Campings collection already has ${docs.length} documents`);
        res.sendStatus(200);
      }
    });
  });
//insertar los datos de loadInitial en la BBDD
console.log("insertado los contactos de load");

//______________________________GET con rango de busqueda
app.get('/api/v1/andalusian-campings', (req, res) => {
  const { id, category, camping_places, modality,registry_code, inscription_date, city, name, limit = 10, offset = 0, from, to } = req.query;
  const query = {};
  if (id) query.id = parseInt(id);
  if (registry_code) query.registry_code = registry_code;
  if (inscription_date) query.inscription_date = parseInt(inscription_date);
  if (city) query.city = city;
  if (name) query.name = name;
  if (category) query.category = parseInt(category);
  if (camping_places) query.camping_places = parseInt(camping_places);
  if (modality) query.modality = parseInt(modality);
  if (from || to) {
    query.start_date = {};
    if (from) query.start_date.$gte = `${from}-01-01`.substring(0, 4);
    if (to) query.start_date.$lte = `${to}-12-31`.substring(0, 4);
  }
  campings.find(query)
    .skip(parseInt(offset))
    .limit(parseInt(limit))
    .exec((error, results) => {
      if (error) {
        res.status(500).json({ error: error.message });
      } else if (results.length === 0) {
        res.status(404).json({ error: 'Campings not found.' });
      } else {
        res.status(200).json(results);
      }
    });
});


//______________________________GET con 2 values.
app.get('/api/v1/andalusian-campings/:value/:value2?', (req, res) => {
    const { value, value2 } = req.params;
    const query = { $where: function() {
      for (let key in this) {
        if (typeof this[key] === 'string' && this[key].includes(value)) {
          if (value2) {
            if (typeof this[key] === 'string' && this[key].includes(value2)) {
              return true;
            }
          } else {
            return true;
          }
        }
      }
      return false;
    }};
    campings.find(query, (err, campings) => {
      if (err) {
        console.log(`Error getting /campings: ${err}`);
        res.sendStatus(500);
      } else if (campings.length === 0) {
        res.status(404).json({ error: 'Campings not found.' });
      } else {
        console.log(`Campings returned = ${campings.length}`)
        res.json(campings);
      }
    });
    console.log("Nuevo get a campings");
  });
  
//______________________________POST con URL prohibidas
app.post(BASE_API_URL+'/andalusian-campings/*', (req, res) => {
  res.sendStatus(405);
});

//______________________________POST normal
app.post(BASE_API_URL+'/andalusian-campings', (req, res) => {
    const newCamping = req.body;
    if (!newCamping.name || !newCamping.city || !newCamping.start_date || !newCamping.id) {
      return res.status(400).json({ error: 'Faltan datos en el JSON' });
    }
    campings.findOne({ id: newCamping.id }, (err, doc) => {
      if (err) {
        console.log(`Error finding camping with id ${newCamping.id}: ${err}`);
        res.sendStatus(500);
      } else if (doc) {
        res.status(409).json({ error: `Camping with id ${newCamping.id} already exists.` });
      } else {
        campings.insert(newCamping, (err, newDoc) => {
          if (err) {
            console.log(`Error inserting camping with id ${newCamping.id}: ${err}`);
            res.sendStatus(500);
          } else {
            console.log(`Inserted new camping with id ${newCamping.id}`);
            res.sendStatus(201);
          }
        });
      }
    });
  });
  
//______________________________PUT con URL prohibidas
app.put(BASE_API_URL+'/andalusian-campings', (req, res) => {
  res.sendStatus(405);
});

//___________________________________PUT
app.put(BASE_API_URL+'/andalusian-campings/:id', (req, res) => {
    const campingId = Number(req.params.id); // Obtener el ID de la URL
    const updatedCamping = req.body; // Obtener camping actualizado desde cuerpo 
  
    // Actualizar el objeto camping en la base de datos
    campings.update({ id: campingId }, { $set: updatedCamping }, {}, (err, numReplaced) => {
      if (err) {
        console.error(err);
        return res.status(500).send({ error: 'Internal server error' });
      }
      if (numReplaced === 0) {
        return res.status(400).send({ error: 'Bad request: camping ID not found' });
      }
      return res.status(200).send({ message: 'Camping updated successfully' });
    });
  });
  
//_________________________DELETE all
app.delete(BASE_API_URL+'/andalusian-campings', (req, res) => {
    // Borrar todos los campings de la base de datos
    campings.remove({}, { multi: true }, (err, numRemoved) => {
        if (err) {
            console.error(err);
            return res.status(500).send({ error: 'Internal server error' });
        }
        return res.status(200).send({ message: `Deleted ${numRemoved} campings` });
    });
});



//__________________________DELETE por id
app.delete(BASE_API_URL+'/andalusian-campings/:id', (req, res) => {
    const campingId = Number(req.params.id); // Obtener el ID del camping de la URL
    // Borrar el camping de la base de datos
    campings.remove({ id: campingId }, {}, (err, numRemoved) => {
        if (err) {
            console.error(err);
            return res.status(500).send({ error: 'Internal server error' });
        }
        if (numRemoved === 0) {
            return res.status(400).send({ error: 'Bad request: camping ID not found' });
        }
        return res.status(200).send({ message: 'Camping deleted successfully' });
    });
});


//L06 LPM____________________________________________________________________________-
//__________________________GET initial data

//Redireccion a la DOC de POSTMAN

app.get(BASE_API_URL+'/immovables/docs', (req, res) => {
  res.redirect("https://documenter.getpostman.com/view/26062489/2s93K1oysD");
});

app.get(BASE_API_URL+'/immovables/loadInitialData', (req, res) => {
  immovables.find({}, (err, docs) => {
    if (err) {
      console.log(`Error getting /immovables: ${err}`);
      res.sendStatus(500);
    } else if (docs.length === 0) {
      const fs = require('fs');
      const immovablesData = JSON.parse(fs.readFileSync(immovablesFilePath));
      const initialImmovables = immovablesData.slice(0, 15);
      immovables.insert(initialImmovables, (err, newDocs) => {
        if (err) {
          console.log(`Error inserting initial data into immovables: ${err}`);
          res.sendStatus(500);
        } else {
          console.log(`Inserted ${newDocs.length} initial immovables`);
          res.sendStatus(200);
        }
      });
    } else {
      console.log(`Immovables collection already has ${docs.length} documents`);
      res.sendStatus(200);
    }
  });
});

//______________________________GET con rango de busqueda
//immovables
app.get('/api/v1/immovables', (req, res) => {
  const { current_usage, active_name, province, modified_date, id, nature, limit = 10, offset = 0 } = req.query;
  const query = {};

  if (current_usage) {
    query.current_usage = { $regex: new RegExp(current_usage, 'i') };
  }
  if (active_name) {
    query.active_name = { $regex: new RegExp(active_name, 'i') };
  }
  if (province) {
    query.province = { $regex: new RegExp(province, 'i') };
  }
  if (modified_date) {
    query.modified_date = { $regex: new RegExp(modified_date, 'i') };
  }
  if (id) {
    query.id = { $regex: new RegExp(id, 'i') };
  }
  if (nature) {
    query.nature = { $regex: new RegExp(nature, 'i') };
  }
  const limitValue = parseInt(limit);
  const offsetValue = parseInt(offset);
  immovables
    .find(query)
    .limit(limitValue)
    .skip(offsetValue)
    .exec((err, immovables) => {
      if (err) {
        console.log(`No immovables found: ${err}`);
        res.sendStatus(404);
      } else {
        console.log(`Immovables returned = ${immovables.length}`);
        res.json(immovables);
      }
    });
});



//______________________________GET con valor y rango de fechas año
//immovables/value?from=2004&to=2016
app.get(BASE_API_URL+'/immovables/:value', (req, res) => {
  if (immovables.length == 0) {
    res.status(404).send('Error: Immovables not found');
    return;
  }
  const value = req.params.value;
  const fromYear = req.query.from;
  const toYear = req.query.to;

  let filteredImmovables = immovables.filter(immovable => {
    let matchValue = false;
    for (const key in immovable) {
      if (immovable[key] == value) {
        matchValue = true;
      }
    }
    return matchValue;
  });

  if (fromYear && toYear) {
    const filteredByYear = filteredImmovables.filter(immovable => {
      const year = parseInt(immovable.modified_date.substring(0, 4));
      return year >= parseInt(fromYear) && year <= parseInt(toYear);
    });
    filteredImmovables = filteredByYear;
  }

  if (filteredImmovables.length > 0) {
    res.json(filteredImmovables);
    console.log(`New GET request for value=${value}, from=${fromYear}, to=${toYear}`);
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
});




//______________________________Get con 2 valores 
app.get(BASE_API_URL+'/immovables/:value/:value2?', (req, res) => {
  const value = req.params.value;
  const value2 = req.params.value2;
  //Filtro de error de lista vacía
  if (immovables.length == 0) {
    res.status(404).send('Error: Immovables not found');
    return;
  }
  //Filtro para ver si tengo 1 o 2 valores y filtrar por ambos.
  let filteredImmovables = immovables.filter(immovable => {
    let matchValue = false;
    let matchValue2 = false;
    for (const key in immovable) {
      if (immovable[key] == value) {
        matchValue = true;
      }
      if (value2 && immovable[key] == value2) {
        matchValue2 = true;
      }
    }
    if (value2) {
      return matchValue && matchValue2;
    } else {
      return matchValue;
    }
  });
  if (filteredImmovables.length > 0) {
    res.json(filteredImmovables);
    console.log(`New GET request for value=${value} and secondValue=${secondValue}`);
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
});

//______________________________POST con URL prohibidas
app.post(BASE_API_URL+'/immovables/*', (req, res) => {
  res.sendStatus(405);
});

//______________________________POST normal
app.post(BASE_API_URL+'/immovables', (req, res) => {
  const newImmovable = req.body;
  if (!newImmovable.active_name || !newImmovable.province || !newImmovable.modified_date || !newImmovable.id) {
    return res.status(400).json({ error: 'Faltan datos en el JSON' });
  }
  immovables.findOne({ id: newImmovable.id }, (err, doc) => {
    if (err) {
      console.log(`Error finding immovable with id ${newImmovable.id}: ${err}`);
      res.sendStatus(500);
    } else if (doc) {
      res.status(409).json({ error: `Immovable with id ${newImmovable.id} already exists.` });
    } else {
      immovables.insert(newImmovable, (err, newDoc) => {
        if (err) {
          console.log(`Error inserting immovable with id ${newImmovable.id}: ${err}`);
          res.sendStatus(500);
        } else {
          console.log(`Inserted new immovable with id ${newImmovable.id}`);
          res.sendStatus(201);
        }
      });
    }
  });
});

//______________________________PUT con URL prohibidas
app.put(BASE_API_URL+'/immovables', (req, res) => {
  res.sendStatus(405);
});

//___________________________________PUT
app.put(BASE_API_URL+'/immovables/:id', (req, res) => {
  const immovableId = Number(req.params.id); // Obtener el ID de la URL
  const updatedImmovable = req.body; // Obtener immovable actualizado desde cuerpo 

  // Actualizar el objeto immovable en la base de datos
  immovables.update({ id: immovableId }, { $set: updatedImmovable }, {}, (err, numReplaced) => {
    if (err) {
      console.error(err);
      return res.status(500).send({ error: 'Internal server error' });
    }
    if (numReplaced === 0) {
      return res.status(400).send({ error: 'Bad request: immovable ID not found' });
    }
    return res.status(200).send({ message: 'Immovable updated successfully' });
  });
});



//_________________________DELETE all
app.delete(BASE_API_URL+'/immovables', (req, res) => {
  // Borrar todos los immovables de la base de datos
  immovables.remove({}, { multi: true }, (err, numRemoved) => {
      if (err) {
          console.error(err);
          return res.status(500).send({ error: 'Internal server error' });
      }
      return res.status(200).send({ message: `Deleted ${numRemoved} immovables` });
  });
});


//__________________________DELETE por id
app.delete(BASE_API_URL+'/immovables/:id', (req, res) => {
  const immovableId = Number(req.params.id); // Obtener el ID del immovable de la URL
  // Borrar el immovable de la base de datos
  immovables.remove({ id: immovableId }, {}, (err, numRemoved) => {
      if (err) {
          console.error(err);
          return res.status(500).send({ error: 'Internal server error' });
      }
      if (numRemoved === 0) {
          return res.status(400).send({ error: 'Bad request: immovable ID not found' });
      }
      return res.status(200).send({ message: 'Immovable deleted successfully' });
  });
});


app.listen(port,() =>{
  console.log(`Servidor corriendo en el puerto: ${port}`);
});


//#########################################################################################################
//##############################################  L06 - CGM  ##############################################
// ########################################################################################################

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