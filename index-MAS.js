let array = [
    {
        id: 8,
        registry_code: 'CM/AL/00003',
        name: 'LA HABANA',
        inscription_date: 19670715,
        start_date: 19670715,
        state: 'ADRA',
        mail: 'CAMPINGLAHABANA@HOTMAIL.COM',
        number_camping_places: 208,
        url: null,
        coord_x: 503184.4737,
        srid: 25830,
        presnetation_data_date: null,
        state_presentation: null,
        num_doc_verified: '08910717B',
        responsible: 'xxx: SANDRA CURION CIREROL',
        group_id: 10,
        category: 3,
        modality: 4,
        list_specified: null
    },
    {
        id: 9,
        registry_code: 'CM/AL/00006',
        name: 'LAS VEGAS',
        inscription_date: 19720707,
        start_date: 19720707,
        state: 'ADRA',
        mail: null,
        number_camping_places: 102,
        url: null,
        coord_x: 503020.6497,
        srid: 25830,
        presnetation_data_date: null,
        state_presentation: null,
        num_doc_verified: '27239961A',
        responsible: 'MANRIQUE ANTEQUERA, REGINA',
        group_id: 10,
        category: 3,
        modality: 2,
        list_specified: null
    },
    {
        id: 10,
        registry_code: 'CM/AL/00022',
        name: 'LAS MENAS',
        inscription_date: 19930329,
        start_date: 19930329,
        state: 'SERON',
        mail: null,
        number_camping_places: 111,
        url: null,
        coord_x: 543229.1842,
        srid: 25830,
        presnetation_data_date: '22/06/2021 19:19',
        state_presentation: 'OK',
        num_doc_verified: '45284300Z',
        responsible: 'xxx: JOSE ANTONIO RUEDA DELGADO',
        group_id: 10,
        category: 3,
        modality: 4,
        list_specified: null
    },
    {
        id: 11,
        registry_code: 'CM/AL/00023',
        name: 'EL PINAR DEL REY',
        inscription_date: 19930705,
        start_date: 19930705,
        state: 'VELEZ-BLANCO',
        mail: 'amaroliva@gmail.com',
        number_camping_places: 120,
        url: 'www.pinardelrey.com',
        coord_x: 579381.7243,
        srid: 25830,
        presnetation_data_date: '17/09/2020 13:15',
        state_presentation: 'OK',
        num_doc_verified: 'B47790183',
        responsible: 'MUNDO INDALUM10, S.L.',
        group_id: 10,
        category: 2,
        modality: 4,
        list_specified: null
    },
    {
    id: 12,
    registry_code: 'CM/AL/00024',
    name: 'NAUTICO LA CALETA',
    inscription_date: 19970506,
    start_date: 19970506,
    state: 'NEGRAS (LAS)',
    mail: null,
    number_camping_places: 823,
    url: null,
    coord_x: 587608.5157,
    srid: 25830,
    presnetation_data_date: null,
    state_presentation: null,
    num_doc_verified: 'B42875328',
    responsible: 'WECAMP LA CALETA S.L.',
    group_id: 10,
    category: 4,
    modality: 2,
    list_specified: null,},
  {
    id: 13,
    registry_code: 'CM/AL/00029',
    name: 'LOS ESCULLOS COMPLEJO TURISTICO CABO DE GATA',
    inscription_date: 19950221,
    start_date: 19950221,
    state: 'SAN JOSE',
    mail: null,
    number_camping_places: 761,
    url: null,
    coord_x: 582176.553,
    srid: 25830,
    presnetation_data_date: null,
    state_presentation: null,
    num_doc_verified: 'B04129557',
    responsible: 'CAMPESTUR, S.L.',
    group_id: 10,
    category: 5,
    modality: 2,
    list_specified: ["Camping Ecológico"]
  }];

    //inicio de variables
let sum=0;
let aux = 0;
    //bucle iterador

let filtrado = array.filter(function(element){
    return element.state==="ADRA";
});

for (let row of filtrado) {
      sum += row.number_camping_places;
      aux++;
  }

    //imprimir el average por consola:
  let average = sum / aux;
  console.log(`La media de number_camping_places para el estado 'Adra' es: ${average}`);