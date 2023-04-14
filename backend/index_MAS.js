
const campingsFilePath = 'ddbb/camping-andalusia.json';
const BASE_API_URL = "/api/v1";
var port = process.env.PORT || 12345;
import fs from 'fs';

import Datastore from 'nedb';
var campings = new Datastore();

function loadBackend_MAS(app){

app.get(BASE_API_URL+'/andalusian-campings/docs', (req, res) => {
  res.redirect("https://documenter.getpostman.com/view/26063155/2s93K1oeqs");
});

app.get(BASE_API_URL+'/andalusian-campings/loadInitialData', (req, res) => {
    campings.find({}, (err, docs) => {
      if (err) {
        console.log(`Error getting /andalusian-campings: ${err}`);
        res.sendStatus(500);
      } else if (docs.length === 0) {
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
  const { id, category, camping_places, modality, registry_code, inscription_date, city, name, limit = 10, offset = 0, from, to } = req.query;
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

  if (id) {
    campings.findOne(query, {_id: 0}, (error, result) => {
      if (error) {
        res.status(500).json({ error: error.message });
      } else if (!result) {
        res.status(404).json({ error: 'Camping not found.' });
      } else {
        res.status(200).json(result);
      }
    });
  } else {
    campings.find(query, {_id: 0})
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
  }
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

}

export {loadBackend_MAS}