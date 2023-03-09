
function media_de_provincia(data, prov){
  var acc = 0;
  var sum = 0;
  
  data.forEach(x => { if (x.province == prov){
      acc = acc + 1;
      sum = sum + x.icmsld;
  }    
  });
  let med = sum/acc;
  return `La media de ${prov} es =  ${med} `;
}

let data_lmp = [
  { active_name: "SILO DE LAS CABEZAS DE SAN JUAN", aviable: true,
     collection: "jda_buscador_bienes_inmuebles", counseling: "CONSEJERÃA DE AGRICULTURA",
      current_usage:"AGROPECUARIO", icmsld: 9741, id: 9741, inventory_num: 2000002330,
       modified_date:"21-10-22", municipality: "CABEZAS DE SAN JUAN (LAS)",
        nature: "Urbana", province:"Sevilla", resource:9741, street: "UTRERA"},
        
    { active_name: "SILO DE SEVILLA-DEPSITO JUDICIAL", aviable: true,
     collection: "jda_buscador_bienes_inmuebles", counseling: "VICEPRESIDENCIA DE LA JA Y CONSEJERÃA DE TURISMO,",
      current_usage:"JUDICIAL", icmsld:  9742, id: 9742, inventory_num: 2000002331,
       modified_date:"21-10-22", municipality: "SEVILLA",
        nature: "Urbana", province:"Sevilla", resource:9742, street:"CORTIJO DEL CUARTO (DISEMINADO 25)"},
    
    { active_name: "edif. para sede judicial", aviable: true,
     collection: "jda_buscador_bienes_inmuebles", counseling: "CONSEJERÃA DE AGRICULTURA, GANADERÃA, PESCA Y DESA",
      current_usage:"AGROPECUARIO", icmsld: 9743, id: 9743, inventory_num: 2000002332,
       modified_date:"21-10-22", municipality: "SEVILLA",
        nature: "Urbana", province:"Sevilla", resource:9743, street: "ALCALDE JOSE CONCEGLIERI"},
    
        { active_name: "SILO DE ÉCIJA", aviable: true,
        collection: "jda_buscador_bienes_inmuebles", counseling: "GASTOS DE DIVERSAS CONSEJERÃAS",
         current_usage:"AGROPECUARIO", icmsld: 9744, id: 9744, inventory_num: 2000002335,
          modified_date:"21-10-22", municipality: "ECIJA",
           nature: "Urbana", province:"Sevilla", resource:9744, street: "DEL FISICO (C/ San Gregorio)"},

           { active_name: "CENTRO PERIFERICO DE ESPECIALIDADES AV. DE AMER", aviable: true,
        collection: "jda_buscador_bienes_inmuebles", counseling: "SERVICIO ANDALUZ DE SALUD",
         current_usage:"AGROPECUARIO", icmsld: 13862, id: 13862, inventory_num: 900001724,
          modified_date:"21-10-22", municipality: "CORDOBA",
           nature: "Urbana", province:"Córdoba", resource:13862, street: "AMERICA"},
           
           { active_name: "CENTRO DE SALUD CALAÃ±AS", aviable: true,
        collection: "jda_buscador_bienes_inmuebles", counseling: "SERVICIO ANDALUZ DE SALUD",
         current_usage:"SANITARIO", icmsld: 13863, id: 13863, inventory_num: 900001803,
          modified_date:"21-10-22", municipality: "CALAÃ‘AS",
           nature: "Urbana", province:"Huelva", resource:13863, street: "LAVADERO"},
           
           { active_name: "LABORATORIO SANIDAD VEGETAL", aviable: true,
        collection: "jda_buscador_bienes_inmuebles", counseling: "AGENCIA DE GESTIÃ“N AGRARIA Y PESQUERA DE ANDALUCÃA",
         current_usage:"AGROPECUARIO", icmsld: 13870, id: 13870, inventory_num: 900001815,
          modified_date:"21-10-22", municipality: "MENGIBAR",
           nature: "Urbana", province:"Jaén", resource:13870, street: "PARCELA 1-2-B DEL PARQUE CIENTIFICO-TECNOLOGICO DE"},
          
           { active_name: "HOSPITAL GENERAL BASICO DE LA DEFENSA SAN CARLOS", aviable: true,
        collection: "jda_buscador_bienes_inmuebles", counseling: "CONSEJERÃA DE SALUD Y FAMILIAS",
         current_usage:"SANITARIO", icmsld: 12122, id: 12122, inventory_num: 2000002335,
          modified_date:"21-10-22", municipality: "SAN FERNANDO",
           nature: "Urbana", province:"Cádiz", resource:12122, street: "POBLACION DE SAN CARLOS"},
          
           { active_name: "TERRENOS DESAFECTADOS VIA PECUARIA VEREDA DEL LLAN", aviable: true,
        collection: "jda_buscador_bienes_inmuebles", counseling: "CONSEJERÃA DE AGRICULTURA, GANADERÃA, PESCA Y DESA",
         current_usage:"MEDIOAMBIENTAL", icmsld: 12123, id: 12123, inventory_num: 2017003511,
          modified_date:"21-10-22", municipality: "CORDOBA",
           nature: "Rústica", province:"Córdoba", resource:12123, street: "VIA PECUARIA VEREDA DEL LLANO DE MESONEROS"},
          
           { active_name: "CONSULTORIO LOCAL PERIANA", aviable: true,
        collection: "jda_buscador_bienes_inmuebles", counseling: "SERVICIO ANDALUZ DE SALUD",
         current_usage:"SANITARIO", icmsld: 13841, id: 13841, inventory_num: 900001525,
          modified_date:"21-10-22", municipality: "PERIANA",
           nature: "Urbana", province:"Málaga", resource:13841, street: "PASEO BELLA VISTA"}

];

module.exports.data_lmp = data_lmp;
module.exports.media_de_provincia =  media_de_provincia;