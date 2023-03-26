
const immovablesFilePath = 'ddbb/immovables.json';
const BASE_API_URL = "/api/v1";
var port = process.env.PORT || 12345;
const { notStrictEqual } = require('assert');
const { Console } = require('console');
const fs = require('fs');
var Datastore = require('nedb'), immovables = new Datastore();


module.exports = (app) => {

    
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
    const { resource,inventory_num,municipality, current_usage, active_name, 
        province, modified_date,id, nature, counseling, limit = 10, offset = 0 } = req.query;
    const query = {};

    if (municipality) {
        query.municipality = { $regex: new RegExp(municipality, 'i') };
      }
    if (counseling) {
        query.counseling = { $regex: new RegExp(counseling, 'i') };
      }
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
      query.id = parseInt(id);
    }
    if (resource) {
        query.resource = parseInt(resource);
      }
    if (inventory_num) {
        query.inventory_num = parseInt(inventory_num);
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
    if (!newImmovable.active_name || !newImmovable.counseling || !newImmovable.current_usage || 
      !newImmovable.inventory_num ||  !newImmovable.municipality || !newImmovable.nature ||!newImmovable.province 
      || !newImmovable.modified_date || !newImmovable.resource || !newImmovable.id) {
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
  
  
}