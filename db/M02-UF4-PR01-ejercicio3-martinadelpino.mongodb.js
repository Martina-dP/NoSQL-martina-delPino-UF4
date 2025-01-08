// Seleccionar la base de datos
use("air_control_NO_SQL_MDP");

// Listar todos los aeropuertos
use("air_control_NO_SQL_MDP");
db.aeropuertos.find({});

// Actualizacion de la fecha de salida y llegada de un vuelo.
use("air_control_NO_SQL_MDP");
db.vuelos.updateOne(
    { _id: 4 }, // Filtro: Buscar vuelo por id.
    { $set: { 
        fecha_salida : ISODate("2025-01-08T15:00:00.000+00:00"), 
        fecha_llegada : ISODate("2025-01-08T21:00:00.000+00:00")
    }} // Nueva fecha de salida y llegada de un vuelo.
)

// Cambio de piloto asignado a un vuelo
use("air_control_NO_SQL_MDP");
db.vuelos.updateOne(
    { _id: 1 }, // Filtro: Buscar vuelo por id.
    { $set: { tripulanteID: 105 }} // Nuevo piloto asignado a un vuelo.
)

// Eliminacion de dos aviones de la flota por su matrícula 
use("air_control_NO_SQL_MDP");
db.aviones.deleteMany({
    matricula: { $in: ["LP001E", "DY201F"] } // Lista de matriculas a eliminar
});

// Elimina un pasajero de un vuelo específico. 
// Identifica al pasajero utilizando su DNI y asocia el vuelo correspondiente
use("air_control_NO_SQL_MDP");
const pasajero = db.tripulantes.findOne({ DNI : "87654321B" }); // Filtro al pasajero por su DNI
db.vuelos.updateOne(
    { _id: 2,},  // Filtrar por el ID del vuelo
    { $pull: { tripulacion: { _id: pasajero._id } } }  // Eliminar al pasajero con ese DNI utilizando su id 
)

// Pipeline de agregación con $lookup para unir datos de dos colecciones.
use("air_control_NO_SQL_MDP");
db.vuelos.aggregate([
    { $project : { 
        origen: 1,
        destino: 1,
        fecha_salida: 1,
        fecha_llegada: 1,
        detalles_tripulacion: {
            DNI: 1,
            nombre: 1,
            apellidos: 1,
            categoria: 1,
            telefono: 1
        }
    }},
    { $lookup : {
        from : 'tripulantes', // Colección a unir
        localField : "tripulacion._id", // Campo de referencia en vuelos
        foreignField : "_id", // Campo de referencia en tripulacion
        as : "detalles_tripulacion" // Nombre del nuevo campo con los datos unidos
    }}
])

// Contar vuelos realizados por cada avión agrupados por día de la semana.
// Utilizando $group y $dayOfWeek para realizar el agrupamiento.
use("air_control_NO_SQL_MDP");
db.vuelos.aggregate([
    {
        $group: {  
            _id: {
                diaSemana: { $dayOfWeek: "$fecha_salida" } // Agrupar por día de la semana
            },
            total_vuelos: { $sum: 1 } // Contar vuelos
        }
    }
])

// Obtener los datos del último vuelo del día utilizando una subconsulta ($sort y $limit).
use("air_control_NO_SQL_MDP");
db.vuelos.find().sort({fecha_salida : -1}).limit(1);