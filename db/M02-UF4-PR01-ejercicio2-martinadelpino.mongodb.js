// Seleccionar la base de datos
// Insertar datos iniciales en la coleccione
use("air_control_NO_SQL_MDP");
db.aviones.insertMany(
    [
        {
            matricula: 'LP001E',
            modelo: 'F-774',
            capacidad: 120,
            estado: false,
        },
        {
            matricula: 'MD687P',
            modelo: 'V-502',
            capacidad: 184,
            estado: true,
        },
        {
            matricula: 'OZ317B',
            modelo: 'K-908',
            capacidad: 90,
            estado: true,
        },
        {
            matricula: 'DY201F',
            modelo: 'J-749',
            capacidad: 66,
            estado: false,
        },
    ]
)

// Seleccionar la base de datos
// Insertar datos iniciales en la coleccione
use("air_control_NO_SQL_MDP");
db.aeropuertos.insertMany(
    [
        {
            nombre: 'Ezeiza',
            ciudad: 'Buenos Aires',
            codigo_unico: 'X385N'
        },
        {
            nombre: 'Barajas',
            ciudad: 'Madrid',
            codigo_unico: 'L029P'
        },
        {
            nombre: 'Schiphol',
            ciudad: 'Amsterdam',
            codigo_unico: 'C441Q'
        },
        {
            nombre: 'Beijing Daxing',
            ciudad: 'Pekin',
            codigo_unico: 'T804A'
        },
    ]
)

// Comandos para importar datos .json a travez de mongoimport :

// Coleccion tripulantes: 
// mongoimport --db air_control_NO_SQL_MDP --collection tripulantes --file "UBICACION-DEL-ARCHIVO-JSON" --jsonArray

// Coleccion pasajeros: 
// mongoimport --db air_control_NO_SQL_MDP --collection pasajeros --file "UBICACION-DEL-ARCHIVO-JSON" --jsonArray

// Coleccion vuelos: 
// mongoimport --db air_control_NO_SQL_MDP --collection vuelos --file "UBICACION-DEL-ARCHIVO-JSON" --jsonArray