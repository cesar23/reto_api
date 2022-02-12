"use strict";

const AWS = require('aws-sdk');
const PEOPLE_TABLE = process.env.PEOPLE_TABLE;
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.init = async (event, context, callback) => {


    try {

        var params = {
            TableName: PEOPLE_TABLE
        };


       const body = await dynamoDb
            .scan(params)
            .promise();

        if (!body) {
            console.log(err);
            return {
                statusCode: 500,
                body: JSON.stringify(
                    {
                        error: 'Ocurrio un Error al o obtener item'
                    }
                ),
            };
        } else {
            return {
                statusCode: 201,
                body: JSON.stringify(
                    {
                        message: 'Ok',
                        data: body
                    }
                ),
            };
        }



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


    // Use this code if you don't use the http event with the LAMBDA-PROXY integration
    // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
