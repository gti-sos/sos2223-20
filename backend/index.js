
const campingsFilePath = 'ddbb/camping-andalusia.json';
const immovablesFilePath = 'ddbb/immovables.json';
const BASE_API_URL = "/api/v1";
var port = process.env.PORT || 12345;
const fs = require('fs');
var Datastore = require('nedb'), campings = new Datastore();
var Datastore = require('nedb'), immovables = new Datastore();

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
  const { from, to, limit, offset, ...query } = req.query;

  if (from && to) {
    const yearQuery = {
      start_date: {
        $gte: new Date(`${from}-01-01`),
        $lte: new Date(`${to}-12-31`),
      },
    };
    Object.assign(query, yearQuery);
  }
  const limitValue = limit ? parseInt(limit) : 10;
  const offsetValue = offset ? parseInt(offset) : 0;
  // build the $or query to find documents with at least one attribute matching the query
  const orQuery = Object.keys(query).map((key) => ({ [key]: { $eq: query[key] } }));
  const $or = orQuery.length ? { $or: orQuery } : {};

  campings
    .find($or)
    .limit(limitValue)
    .skip(offsetValue)
    .exec((err, campings) => {
      if (err) {
        console.log(`Error getting /campings: ${err}`);
        res.sendStatus(500);
      } else {
        console.log(`Campings returned = ${campings.length}`);
        res.json(campings);
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
  const { from, to } = req.query;
  if (from && to) {
    immovables.find({}, (err, immovables) => {
      if (err) {
        console.log(`Error getting /immovables: ${err}`);
        res.sendStatus(500);
      } else {
        const filteredImmovables = immovables
          .map(immovable => {
            const year = immovable.modified_date.substring(0, 4);
            if (year >= from && year <= to) {
              return immovables;
            }
          })
          .filter(immovable => immovable !== undefined);
        console.log(`Immovables returned = ${filteredImmovables.length}`)
        res.json(filteredImmovables);
      }
    });
  } else {
    immovables.find({}, (err, immovables) => {
      if (err) {
        console.log(`Error getting /immovables: ${err}`);
        res.sendStatus(500);
      } else {
        console.log(`Immovables returned = ${immovables.length}`)
        if (immovables.length === 0) {
          res.sendStatus(404);
        } else {
          res.json(immovables);
        }
      }
    });
  }
  console.log("Nuevo get a immovables");
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

var blooddonations = [];

app.get("/samples/CGM", (req, res)=>{
  res.send(useCGM.resultado(useCGM.datos));
  console.log("New request / blood-donations-stats");
});

app.get(BASE_API_URL+"/blood-donations-stats", (req, res) => {
  // dato inicial   
  res.json(blooddonations);
  console.log("New request to /blood-donations");
});

app.get(BASE_API_URL+"/blood-donations-stats/loadInitialData", (req, res) => {
  //GET dato inicial   
  blooddonations = useCGM.datos;
  res.json(blooddonations);
  console.log(useCGM.datos);
  console.log("New GET request to /blood-donations/loadInitialData");
});

//GET recurso especifico
app.get(BASE_API_URL+"/blood-donations-stats/:place",(req,res)=>{
  const place = req.params.place; // URL: parámetro de territorio
  console.log(place);
  const resource = blooddonations.find(r => r.place === place); // busca el recurso por territorio
  console.log(resource);
  if (resource) {
      res.json(resource); // Devolver recurso (respuesta HTTP 200)
  } else {
      res.status(404).json({error: "Recurso no encontrado"}); // Devolver error HTTP 404 si no encuentra recurso
  }
});

//POST ok
app.post(BASE_API_URL + "/blood-donations-stats", (request, response) => {
  const ns = request.body;
 // response.sendStatus(201); // Objeto creado ok
   // Comprueba que el JSON tiene los campos correctos
if (!ns.hasOwnProperty("date") || !ns.hasOwnProperty("place") || !ns.hasOwnProperty("dnt_people") || !ns.hasOwnProperty("dnt_blood") || !ns.hasOwnProperty("dnt_plasme")
|| !ns.hasOwnProperty("dnt_datef")|| !ns.hasOwnProperty("dnt_new") || !ns.hasOwnProperty("extraction") || !ns.hasOwnProperty("idcenter") || !ns.hasOwnProperty("center")) 
{
  console.log(ns);
  response.status(400).send({ error: "El objeto JSON no tiene los campos esperados" }); // Enviar una respuesta con el código 400 (Bad Request) si el objeto JSON no tiene los campos esperados
  return;
}
  const conflictIndex = blooddonations.findIndex(stat => stat.date === ns.date
                                               && stat.place === ns.place
                                               && stat.dnt_people === ns.dnt_people 
                                               && stat.dnt_blood === ns.dnt_blood
                                               && stat.dnt_plasme === ns.dnt_plasme 
                                               && stat.dnt_datef === ns.dnt_datef
                                               && stat.dnt_new === ns.dnt_new
                                               && stat.extraction === ns.extraction
                                               && stat.idcenter === ns.idcenter
                                               && stat.center === ns.center) ;

  if (conflictIndex !== -1) {
    response.status(409).send({ error: "Ya existe un elemento con los mismos datos" }); // ERROR, ya existe un objeto con esos datos
    console.log("Error: Ya existe un elemento con los mismos datos");
  } else {
    blooddonations.push(ns);
    response.sendStatus(201); // Objeto creado ok
    console.log("Nuevo post /blood-donations-stats");
  }
});

//POST fallo
app.post(BASE_API_URL+"/blood-donations-stats/:dnt_people",(req,res)=>{
  res.sendStatus(405, "Method not allowed"); // respuesta ERROR 405
  console.log("New post /blood-donations-stats/:dnt_people");
});

//DELETE  array completo
app.delete(BASE_API_URL+"/blood-donations-stats", (request, response) => {
  if (!request.body || Object.keys(request.body).length === 0) {
    blooddonations = [];
      response.status(200).send("Los datos se han borrado correctamente");
  }else{
      if (blooddonations.length == 0) { // si no encuentra el Objeto -> error 404 ya que el objeto no existe  
          response.status(404).send("El objeto no existe");
      }
  }
  console.log("Se ha borrado /blood-donations-stats");
});

//DELETE  DE UN RECURSO
app.delete(BASE_API_URL + "/blood-donations-stats/:place", (request, response) => {
  const place = request.params.place;
  const indice = blooddonations.findIndex(i => i.place === place); // Encontrar el índice del elemento a eliminar
  if (indice !== -1) { // Si encuentra el elemento segun el indice, lo elimina y envia una respuesta + 204 (No Content)
    blooddonations.splice(indice, 1);
    response.status(204).send("Se ha eliminado correctamente el objeto con place= "+place);
    console.log(place+" eliminado correctamente");
  } else { // respuesta + código 404 (Not Found) si no encuentra el elemento
    response.status(404).send({ error: "No se encontró el elemento con el territorio especificado" });
  }
});

// PUT actualizar recurso existente
app.put(BASE_API_URL + "/blood-donations-stats/:place", (request, response) => {
  const place = request.params.place; 
  const upd_s = request.body;
  if (!upd_s.hasOwnProperty("place")) { // Comprobar si el cuerpo de la solicitud contiene el campo "place"
      response.status(400).send({ error: "El objeto JSON no tiene los campos esperados" });
      return;
  }
  if (place !== upd_s.place) { // Comprobar si el "place" de la URL es igual al "place" de la solicitud
      response.status(400).send({ error: "El ID del recurso no coincide con el ID de la URL" });
      return;
  }
  const indice = blooddonations.findIndex(stat => stat.place === place); // Encontrar el índice del recurso a actualizar
  console.log(indice);
  if (indice !== -1) {
      blooddonations[indice] = upd_s; // Actualizar recurso
      response.sendStatus(204); // Enviar respuesta actualización exitosa
      console.log("Recurso actualizado: " + place);
  } else {
      response.status(404).send({ error: "Recurso no encontrado" }); // Si no se encuentra el recurso, devolver un código de estado 404
  }
});

  //PUT a lista de recursos
  app.put(BASE_API_URL + "/blood-donations-stats",(request,response)=>{
    response.sendStatus(405, "Method not allowed");
});
}