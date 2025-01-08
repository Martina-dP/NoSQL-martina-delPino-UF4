// Seleccionar la base de datos o crearla si no existe
use("air_control_NO_SQL_MDP");

// Creación de la colección aeropuertos
db.createCollection("aeropuertos", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["nombre", "ciudad", "codigo_unico"],
            properties: {
                nombre: {
                    bsonType: "string",
                    description: "El nombre del aeropuerto es requerido y debe ser una cadena de texto"
                },
                ciudad: {
                    bsonType: "string",
                    description: "La ciudad del aeropuerto es requerida y debe ser una cadena de texto"
                },
                codigo_unico: {
                    bsonType: "string",
                    description: "El código único del aeropuerto es requerido y debe ser una cadena de texto"
                }
            }
        }   
    }
});

// Creación de la colección vuelos
db.createCollection("vuelos", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["_id", "origen", "destino", "fecha_salida", "fecha_llegada", "tripulacion"],
            properties: {
                _id: {
                    bsonType: "int",
                    description: "El ID del vuelo es requerido y debe ser un numero"
                },
                origen: {
                    bsonType: "string",
                    description: "El origen del vuelo es requerido y debe ser una cadena"
                },
                destino: {
                    bsonType: "string",
                    description: "El destino del vuelo es requerido y debe ser una cadena"
                },
                fecha_salida: {
                    bsonType: "date",
                    description: "La fecha de llegada es requerida y debe ser un objeto de tipo fecha (Date)"
                },
                fecha_llegada: {
                    bsonType: "date",
                    description: "La fecha de llegada es requerida y debe ser un objeto de tipo fecha (Date)"
                },
                tripulacion: {
                    bsonType: "array",
                    description: "La tripulación es un arreglo de objetos con IDs y nombres de tripulantes",
                    items: {
                        bsonType: "object",
                        required: ["_id", "nombre"],
                        properties: {
                            _id: {
                                bsonType: "int",
                                description: "El ID del tripulante es requerido y debe ser un número"
                            },
                            nombre: {
                                bsonType: "string",
                                description: "El nombre del tripulante es requerido y debe ser una cadena"
                            }
                        }
                    }
                }
            }
        }
    }
});

// Creación de la colección aviones
db.createCollection("aviones", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["matricula", "modelo", "capacidad", "estado"],
            properties: {
                matricula: {
                    bsonType: "string",
                    description: "La matrícula del avión es requerida y debe ser una cadena"
                },
                modelo: {
                    bsonType: "string",
                    description: "El modelo del avión es requerido y debe ser una cadena"
                },
                capacidad: {
                    bsonType: "int",
                    description: "La capacidad del avión es requerida y debe ser un número entero"
                },
                estado: {
                    bsonType: "bool",
                    description: "El estado del avión es requerido y debe ser un valor booleano (true o false)"
                },
            }
        }
    }
});

// Creación de la colección tripulantes
db.createCollection("tripulantes", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["_id", "DNI", "nombre", "apellidos", "categoria", "telefono"],
            properties: {
                _id: {
                    bsonType: "int",
                    description: "El ID del tripulante es requerido y debe ser un numero"
                },
                DNI: {
                    bsonType: "string",
                    description: "El DNI del tripulante es requerido y debe ser una cadena"
                },
                nombre: {
                    bsonType: "string",
                    description: "El nombre del tripulante es requerido y debe ser una cadena"
                },
                apellidos: {
                    bsonType: "string",
                    description: "Los apellidos del tripulante son requeridos y deben ser una cadena"
                },
                categoria: {
                    bsonType: "string",
                    description: "La categoría del tripulante es requerida y debe ser una cadena"
                },
                telefono: {
                    bsonType: "string",
                    description: "El teléfono del tripulante es requerido y debe ser una cadena"
                }
            }
        }
    }
});

// Creación de la colección pasajeros
db.createCollection("pasajeros", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["DNI", "nombre", "apellidos", "telefono", "email", "vuelo_asociado"],
            properties: {
                DNI: {
                    bsonType: "string",
                    description: "El DNI del pasajero es requerido y debe ser una cadena"
                },
                nombre: {
                    bsonType: "string",
                    description: "El nombre del pasajero es requerido y debe ser una cadena"
                },
                apellidos: {
                    bsonType: "string",
                    description: "Los apellidos del pasajero son requeridos y deben ser una cadena"
                },
                telefono: {
                    bsonType: "string",
                    description: "El teléfono del pasajero es requerido y debe ser una cadena"
                },
                email: {
                    bsonType: "string",
                    description: "El email del pasajero es requerido y debe ser una cadena"
                },
                vuelo_asociado: {
                    bsonType: "int",
                    description: "El vuelo asociado al pasajero es requerido y debe ser un ID"
                }
            }
        }
    }
});
