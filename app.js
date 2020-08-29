const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')
const {argv} = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
})


const getInfo = async ( dir ) => {

    try {

        const city = await lugar.getLugarLatLng(dir)
        const { latt, longt, direccion } = city;
        const c = await clima.getClima( latt, longt )
        return `El clima de ${ direccion } es de ${ c }`

    } catch (e) {
        return `No se pudo determinar el clima de ${dir}`
    }




}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)




