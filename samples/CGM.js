const datos = [
  {
    date:"13-07-16",
    place:"CRTS CORDOBA",
    dnt_people:8,
    dnt_blood:6,
    dnt_plasme:1,
    dnt_datef:0,
    dnt_new:0,
    extraction:"SPC",
    idcenter:13001,
    center:"CTS Córdoba"
  },
  {
    date:"13-07-16",
    place:"CRTS CORDOBA",
    dnt_people:5,
    dnt_blood:4,
    dnt_plasme:1,
    dnt_datef:0,
    dnt_new:0,
    extraction:"SPC",
    idcenter:13001,
    center:"CTS Córdoba"
  },
  {
    date:"14-07-16",
    place:"ADAMUZ",
    dnt_people:65,
    dnt_blood:57,
    dnt_plasme:0,
    dnt_datef:0,
    dnt_new:1,
    extraction:"SP",
    idcenter:13001,
    center:"CTS Córdoba"
  },
  {
    date:"14-07-16",
    place:"MORILES",
    dnt_people:67,
    dnt_blood:59,
    dnt_plasme:2,
    dnt_datef:0,
    dnt_new:3,
    extraction:"SP",
    idcenter:13001,
    center:"CTS Córdoba"
  },
  {
    date:"14-07-16",
    place:"CESPEDES",
    dnt_people:20,
    dnt_blood:17,
    dnt_plasme:0,
    dnt_datef:0,
    dnt_new:0,
    extraction:"SP",
    idcenter:13001,
    center:"CTS Córdoba"
  },
  {
    date:"15-07-16",
    place:"CRTS CORDOBA",
    dnt_people:14,
    dnt_blood:10,
    dnt_plasme:1,
    dnt_datef:0,
    dnt_new:4,
    extraction:"SPC",
    idcenter:13001,
    center:"CTS Córdoba"
  },
  {
    date:"15-07-16",
    place:"TORRECAMPO",
    dnt_people:37,
    dnt_blood:35,
    dnt_plasme:0,
    dnt_datef:0,
    dnt_new:2,
    extraction:"SP",
    idcenter:13001,
    center:"CTS Córdoba"
  },
  {
    date:"15-07-16",
    place:"CRTS CORDOBA",
    dnt_people:16,
    dnt_blood:12,
    dnt_plasme:1,
    dnt_datef:0,
    dnt_new:2,
    extraction:"SPC",
    idcenter:13001,
    center:"CTS Córdoba"
  },
  {
    date:"13-07-16",
    place:"POZOBLANCO",
    dnt_people:113,
    dnt_blood:91,
    dnt_plasme:4,
    dnt_datef:0,
    dnt_new:12,
    extraction:"SP",
    idcenter:13001,
    center:"CTS Córdoba"
  },
  {
    date:"14-07-16",
    place:"CRTS CORDOBA",
    dnt_people:34,
    dnt_blood:28,
    dnt_plasme:0,
    dnt_datef:0,
    dnt_new:4,
    extraction:"SPC",
    idcenter:13001,
    center:"CTS Córdoba"
  }
];

function resultado(datos){
  var valores = datos.filter(p => p.place == "CRTS CORDOBA");
  
  var valores_db = [];
  valores.forEach(valor => {valores_db.push(valor.dnt_blood)});
  suma_total = 0;
  valores_db.forEach(num => {suma_total+= num});
  var res ="La media es: "+ suma_total/valores_db.length;
  return res;
}

// function handleMiembro1(req, res) {
//   res.send(`La media  es: ${resultado(datos)}`);
// }

module.exports.datos = datos;
module.exports.resultado = resultado;