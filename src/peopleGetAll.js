"use strict";

const {swapiPeopleAll} = require('./Services/swapi')


module.exports.init = async (event, context, callback) => {

    try {

        const swapApi = await swapiPeopleAll('/');
        if (swapApi === 'error') {
            console.error(`Error  en el api`)
            return {
                statusCode: 500,
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({error: `Error  en el api`}, null, 2),
            };
        }


        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(swapApi),
        };

    } catch (error) {
        console.error(error)
        return {
            statusCode: 500,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    error: error,
                    message: "Erroro!"
                    // input: event,
                },
                null,
                2
            ),
        };

    }


};

