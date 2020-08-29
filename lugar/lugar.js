const axios = require('axios');


const getLugarLatLng = async(dir) => {

    const encodedUrl = encodeURI(dir);
    const resp = await axios.get(`https://geocode.xyz/${encodedUrl}?json=1&auth=881028272918910844942x127470`)
    
    if(Object.keys(resp.data).length === 0){
        throw new Error(`No hay resultados para ${ dir }`)
    }

    const { data }  =  resp;
    const direccion =  data.standard.city;
    const longt     =  data.longt
    const latt      =  data.latt;

    return {
        direccion,
        longt,
        latt

    }

}

module.exports = {
    getLugarLatLng
}