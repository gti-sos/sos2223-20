
const campingsFilePath = 'ddbb/camping-andalusia.json';
const BASE_API_URL = "/api/v2";
import { notStrictEqual } from 'assert';
import { Console } from 'console';
import fs from 'fs';
import request from 'request';
import Datastore from 'nedb';
var campings = new Datastore();

function loadBackend_MASv2(app) {

  //__________________________GET initial data
  //Redireccion a la DOC de POSTMAN

  app.get(BASE_API_URL + '/campings/docs', (req, res) => {
    res.redirect("https://documenter.getpostman.com/view/26062489/2s93K1oysD");
  });// comentario

  app.get('/api/v2/campings/docs', (req, res) => {
    res.redirect("https://documenter.getpostman.com/view/26063155/2s93XyU3Xd");
  });

  app.get(BASE_API_URL + '/campings/loadInitialData', (req, res) => {
    campings.find({}, (err, docs) => {
      if (err) {
        console.log(`Error getting /campings: ${err}`);
        res.sendStatus(500);
      } else if (docs.length === 0) {
        const campingsData = JSON.parse(fs.readFileSync(campingsFilePath));
        const initialCampings = campingsData.slice(0, 30);
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

  //______________________________GET con rango de busqueda
  app.get(BASE_API_URL + '/campings', (req, res) => {
    console.log(`New request to /campings`);

    // Recuperamos todos los registros de la base de datos para filtrarlos despues
    campings.find({}, { _id: 0 }, (err, data) => {

      // Comprobamos los errores que han podido surgir
      if (err) {

        console.log(`Error getting campings`);

        // El estado es 500: Internal Server Error
        res.sendStatus(500);

        // Comprobamos si existen datos:
      } else if (data.length == 0) {

        console.log(`campings not found`);

        // Si no existen datos el estado es 404: Not Found
        res.sendStatus(404);

      } else {
        // Inicializamos los valores necesarios para el filtrado: un contador para el limit y el valor por defecto offset
        let i = -1;
        if (!req.query.offset) { var offset = -1; } else { var offset = parseInt(req.query.offset); }

        // Filtramos los datos, para cada campo posible se devuelve true si no se pasa en la query, 
        // y si es un parametro se comprueba la condicion
        let datos = data.filter((x) => {
          return (((req.query.start_date == undefined) || (parseInt(req.query.start_date) === x.start_date)) &&
            ((req.query.from == undefined) || (parseInt(req.query.from) <= x.start_date)) &&
            ((req.query.to == undefined) || (parseInt(req.query.to) >= x.start_date)) &&
            ((req.query.state == undefined) || (req.query.state === x.state)) &&
            ((req.query.name == undefined) || (req.query.name === x.name)) &&
            ((req.query.responsible == undefined) || (req.query.responsible === x.responsible)) &&
            ((req.query.registry_code == undefined) || (req.query.registry_code === x.registry_code)) &&
            ((req.query.id == undefined) || (req.query.id === x.id)) &&
            ((req.query.city == undefined) || (req.query.city === x.city)) &&
            ((req.query.camping_places == undefined) || (req.query.camping_places === x.camping_places)) &&
            ((req.query.category == undefined) || (req.query.category === x.category)) &&
            ((req.query.group_id == undefined) || (req.query.group_id === x.group_id))
          );
        }).filter((x) => {
          // Por ultimo implementamos la paginacion
          i = i + 1;
          if (req.query.limit == undefined) { var cond = true; } else { var cond = (offset + parseInt(req.query.limit)) >= i; }
          return (i > offset) && cond;
        });

        // Comprobamos si tras el filtrado sigue habiendo datos, si no hay:
        if (datos.length == 0) {

          console.log(`campings not found`);
          // Estado 404: Not Found
          
          res.sendStatus(404);

          // Si por el contrario encontramos datos
        } else {

          console.log(`Data of campings returned: ${datos.length}`);
          // Devolvemos dichos datos, estado 200: OK
          res.json(datos);

        }
      }
    })
  });

  //GET /campings/state/id (First Province, then id): Recurso único
  app.get(`${BASE_API_URL}/campings/:state/:id`, (req, res) => {

    let id = req.params.id;
    let state = req.params.state;

    console.log(`New request to /campings/${state}/${id}`);

    // Recuperamos el registro concreto que se nos pide
    campings.find({ 'id': parseInt(id), 'state': state }, { _id: 0 }, (err, data) => {

      // Si existen errores:
      if (err) {

        console.log(`Error getting campings/${state}/${id}: ${err}`);
        // Estado 500: Internal Server Error
        res.sendStatus(500);

        // Si no existen datos 
      } else if (data.length == 0) {

        console.log(`campings/${state}/${id} not found`);
        // Estado 404: Not Found
        res.sendStatus(404);

        // Si existen datos
      } else {

        console.log(`Data campings/${state}/${id} returned`);
        // Estado 200: Ok
        res.json(data[0]);
      }
    });
  });

  //GET /campings/state: Recursos por provincia
  app.get(`${BASE_API_URL}/campings/:state`, (req, res) => {

    let state = req.params.state;

    console.log(`New request to /campings/${state}`);

    // Buscamos los registros que tengan el dado campo provincia
    campings.find({ 'state': state }, { _id: 0 }, (err, data) => {
      console.log(state);
      console.log(data);
      // Si existen errores
      if (err) {

        console.log(`Error getting campings`);
        // Estado 500: Internal Server Error
        res.sendStatus(500);

        // Si no existen datos
      } else if (data.length == 0) {

        console.log(`campings/${state} not found`);
        // Estado 404: Not Found
        res.sendStatus(404);

      } else {
        let i = -1;
        if (!req.query.offset) { var offset = -1; } else { var offset = parseInt(req.query.offset); }

        let datos = data.filter((x) => {
          i = i + 1;
          if (req.query.limit == undefined) { var cond = true; } else { var cond = (offset + parseInt(req.query.limit)) >= i; }
          return (i > offset) && cond;
        });

        if (datos.length == 0) {

          console.log(`campings not found`);
          // Estado 404: Not Found
          res.sendStatus(404);

          // Si hay datos:
        } else {

          console.log(`Data of campings returned: ${datos.length}`);
          // Devolvemos datos, estado 200: Ok
          res.json(datos);

        }
      }
    });

  });

  //______________________________POST con URL prohibidas
  app.post(BASE_API_URL + '/campings/*', (req, res) => {
    res.sendStatus(405);
  });

  //______________________________POST normal
  app.post(BASE_API_URL + '/campings', (req, res) => {
    const newCamping = req.body;
    if (!newCamping.name || !newCamping.responsible || !newCamping.registry_code ||
      !newCamping.camping_places || !newCamping.city || !newCamping.group_id || !newCamping.state
      || !newCamping.start_date || !newCamping.category || !newCamping.id) {
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
  app.put(BASE_API_URL + '/campings', (req, res) => {
    res.sendStatus(405);
  });

  //___________________________________PUT
  app.put(BASE_API_URL + '/campings/:id', (req, res) => {
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
  app.delete(BASE_API_URL + '/campings', (req, res) => {
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
  app.delete(BASE_API_URL + '/campings/:id', (req, res) => {
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

  app.use('/api/proxy-mas', function (req, res) {
    var url = req.url.replace('/?url=', '');
    console.log('piped: ' + req.url);
    req.pipe(request(url)).pipe(res);
});

};


export { loadBackend_MASv2 }