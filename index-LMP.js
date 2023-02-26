
let array = [
    { active_name: "SILO DE LAS CABEZAS DE SAN JUAN", aviable: true,
     collection: "jda_buscador_bienes_inmuebles", counseling: "CONSEJERÃA DE AGRICULTURA",
      current_usage:"AGROPECUARIO", icmsld: 1, id: 9741, inventory_num: 2000002330,
       modified_date:"21-10-22", municipality: "CABEZAS DE SAN JUAN (LAS)",
        nature: "Urbana", province:"Sevilla", resource:9741, street: "UTRERA"},
        
    { active_name: "SILO DE SEVILLA-DEPSITO JUDICIAL", aviable: true,
     collection: "jda_buscador_bienes_inmuebles", counseling: "VICEPRESIDENCIA DE LA JA Y CONSEJERÃA DE TURISMO,",
      current_usage:"JUDICIAL", icmsld: 2, id: 9742, inventory_num: 2000002331,
       modified_date:"21-10-22", municipality: "SEVILLA",
        nature: "Urbana", province:"Sevilla", resource:9742, street:"CORTIJO DEL CUARTO (DISEMINADO 25)"},
    
    { active_name: "edif. para sede judicial", aviable: true,
     collection: "jda_buscador_bienes_inmuebles", counseling: "CONSEJERÃA DE AGRICULTURA, GANADERÃA, PESCA Y DESA",
      current_usage:"AGROPECUARIO", icmsld: 3, id: 9743, inventory_num: 2000002332,
       modified_date:"21-10-22", municipality: "HUELVA",
        nature: "Urbana", province:"Huelva", resource:9743, street: "ALCALDE JOSE CONCEGLIERI"}
  ];


const filtered = array.filter(function(element){
    return element.province === "Sevilla";
  });

  let sum = filtered.reduce((previous, current) => current.icmsld += previous.icmsld);
let avg = sum / filtered.length;

log(avg);