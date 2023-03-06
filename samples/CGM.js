const datos = [
    [new Date("13-07-16"),"CRTS CORDOBA",8, 6, 1, 0, 0,"SPC",13001,"CTS Córdoba"],
    [new Date("13-07-16"),"CRTS CORDOBA",5,4,1,0,0,"SPC",13001,"CTS Córdoba"],
    [new Date("14-07-16"),"ADAMUZ",65,57,0,0,1,"SP",13001,"CTS Córdoba"],
    [new Date("14-07-16"),"MORILES",67,59,2,0,3,"SP",13001,"CTS Córdoba"],
    [new Date("14-07-16"),"CESPEDES",20,17,0,0,0,"SP",13001,"CTS Córdoba"],
    [new Date("15-07-16"),"CRTS CORDOBA",14,10,1,0,4,"SPC",13001,"CTS Córdoba"],
    [new Date("15-07-16"),"TORRECAMPO",37,35,0,0,2,"SP",13001,"CTS Córdoba"],
    [new Date("15-07-16"),"CRTS CORDOBA",16,12,1,0,2,"SPC",13001,"CTS Córdoba"],
    [new Date("13-07-16"),"POZOBLANCO",113,91,4,0,12,"SP",13001,"CTS Córdoba"],
    [new Date("14-07-16"),"CRTS CORDOBA",34,28,0,0,4,"SPC",13001,"CTS Córdoba"],
];

const filtrado = datos.filter((n) => n[1] === "CRTS CORDOBA").map((n) => { return n[2] });
const resultado = filtrado.reduce((a, b) => a + b, 0) / filtrado.length;

function handleMiembro1(req, res) {
    console.log(`La media es: ${resultado}`);
    res.send(`La media  es: ${resultado}`);
  }
  
module.exports = handleMiembro1;