"use strict";
const {validpeople} = require('./Utils/valid')
const AWS = require('aws-sdk');
const PEOPLE_TABLE = process.env.PEOPLE_TABLE;
const dynamoDb = new AWS.DynamoDB.DocumentClient();



module.exports.init = async (event, context, callback) => {


    const body = JSON.parse(event.body);
    try {


        //filtrar  datos requeridos
        const msg = validpeople(body);
        if (msg !== '') {
            console.error('validpeople',msg);
            return {
                statusCode: 404,
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({error: msg,}),
            };
        }


        const {
            id, nombre,
            alto,
            masa,
            color_pelo,
            color_piel,
            color_ojo,
            ano_nacimiento,
            genero,
            mundo_origen,
            peliculas,
            especies,
            vehiculos,
            inicio_enbarcacion,
            link
        } = body;

        const params = {
            TableName: PEOPLE_TABLE,
            Item: {
                id,
                nombre,
                alto,
                masa,
                color_pelo,
                color_piel,
                color_ojo,
                ano_nacimiento,
                genero,
                mundo_origen,
                peliculas,
                especies,
                vehiculos,
                inicio_enbarcacion,
                link
            }
        };


        return dynamoDb.put(params).promise()
            .then(function (newItem) {
                return {
                    statusCode: 201,
                    body: JSON.stringify(
                        {
                            message: 'Ok',
                            data: params.Item
                        }
                    ),
                };
            })
            .catch(function (err) {
                console.log(err);
                return {
                    statusCode: 500,
                    body: JSON.stringify(
                        {
                            error: 'Ocurrio un Error al insertar en DB'
                        }
                    ),
                };
            });


    } catch (error) {
        console.log(error);
        return {
            statusCode: 500,
            body: JSON.stringify(
                {
                    error: 'Ocurrio un Error'
                }
            ),
        };
    }

};

