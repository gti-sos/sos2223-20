
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
    const { resource,modified_date,inventory_num,municipality, current_usage, active_name, 
        province, id, nature, counseling, limit = 10, offset = 0 } = req.query;
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
    immovables
      .find(query)
      .limit(parseInt(limit))
      .skip(parseInt(offset))
      .exec((error, results) => {
        if (error) {
          res.status(500).json({ error: error.message });
        } else if (results.length === 0) {
          res.status(404).json({ error: 'Immovables not found.' });
        } else if (results.length === 1) {
          res.json(results[0]);
        }else {
          res.status(200).json(results.map((c)=>{
            delete c._id;
            return c;
          }));
        }
      });
  });
  

  
  //GET /immovables/province/id (First Province, then id): Recurso único
  app.get(`${BASE_API_URL}/immovables/:province/:id`, (req, res) => {

    let id = req.params.id;
    let province = req.params.province;

    console.log(`New request to /immovables/${province}/${id}`);

    // Recuperamos el registro concreto que se nos pide
    immovables.find({'id': parseInt(id), 'province' : province}, {_id : 0}, (err, data) => {

        // Si existen errores:
        if(err){

            console.log(`Error getting immovables/${province}/${id}: ${err}`);
            // Estado 500: Internal Server Error
            res.sendStatus(500);
        
        // Si no existen datos 
        }else if(data.length == 0){

            console.log(`immovables/${province}/${id} not found`);
            // Estado 404: Not Found
            res.sendStatus(404);

        // Si existen datos
        }else{

            console.log(`Data immovables/${province}/${id} returned`);
            // Estado 200: Ok
            res.json(data[0]);
        }
    });
});


//GET /immovables/province: Recursos por provincia
app.get(`${BASE_API_URL}/immovables/:province`, (req, res) => {

    let province = req.params.province;

    console.log(`New request to /immovables/${province}`);

    // Buscamos los registros que tengan el dado campo provincia
    immovables.find({'province': province}, {_id: 0}, (err, data) => {
        console.log(province);
        console.log(data);
        // Si existen errores
        if(err){

            console.log(`Error getting immovables`);
            // Estado 500: Internal Server Error
            res.sendStatus(500);

        // Si no existen datos
        }else if(data.length == 0){

            console.log(`immovables/${province} not found`);
            // Estado 404: Not Found
            res.sendStatus(404);

        }else{
            let i = -1;
            if(!req.query.offset){ var offset = -1;}else{ var offset = parseInt(req.query.offset);}

            let datos = data.filter((x) => {
                i = i+1;
                if(req.query.limit==undefined){ var cond = true;}else{ var cond = (offset + parseInt(req.query.limit)) >= i;}
                return (i>offset)&&cond;
            });

            if(datos.length == 0){

                console.log(`immovables not found`);
                // Estado 404: Not Found
                res.sendStatus(404);
            
            // Si hay datos:
            }else{

                console.log(`Data of immovables returned: ${datos.length}`);
                // Devolvemos datos, estado 200: Ok
                res.json(datos);
                
            }
        }
    });
    
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