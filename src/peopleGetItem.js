"use strict";

const { swapiPeople} = require('./Services/swapi')

module.exports.init = async (event, context, callback) => {

    const id = Number(event.pathParameters.id);
    try {

        const swapApi = await swapiPeople(`/${id}`);
        if (swapApi === 'error') {
            return {
                statusCode: 500,
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({error: `Error  en el api`}, null, 2),
            };
        }


        callback(null, {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(swapApi),
        });

    } catch (err) {
        console.error(err)
        return {
            statusCode: 500,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    error: err

                },
                null,
                2
            ),
        };

    }


    // Use this code if you don't use the http event with the LAMBDA-PROXY integration
    // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
