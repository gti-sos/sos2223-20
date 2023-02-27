//cada elemento del array debe ser una fila

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

//suma = suma + dato_actual
const suma_dnt_people = datos.reduce(
    (suma, dato_actual) => suma = suma + dato_actual[2],
    0
);

console.log(suma_dnt_people/datos.length);