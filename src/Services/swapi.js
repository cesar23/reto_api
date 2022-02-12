const fetch = require('node-fetch');
const config= require('../Config/config')
const axios = require("axios")
const swapiPeopleAll = async (recurso) => {

    const conf = {
        method: 'get',
        url: `${config.api}${recurso}`,
        headers: {
            "Content-Type": "application/json"
        }
    };



    try {
        const resp = await axios(conf);

        return resp.data.results.map((p) => {

                return {

                    "nombre": p.name,
                    "alto": p.height,
                    "masa": p.mass,
                    "color_pelo": p.hair_color,
                    "color_piel": p.skin_color,
                    "color_ojo": p.eye_color,
                    "ano_nacimiento": p.birth_year,
                    "genero": p.gender,
                    "mundo_origen": p.homeworld,
                    "peliculas": p.films,
                    "especies": p.species,
                    "vehiculos": p.vehicles,
                    "inicio_enbarcacion": p.starships,
                    "creado": p.created,
                    "editado": p.edited,
                    "link": p.url
                };

            })



    } catch (e) {
        console.log(e);
        return "error";
    }




};
const swapiPeople = async (recurso) => {

    try {
        const resp = await fetch(`${config.api}${recurso}`);

        if (!resp.ok) {
            console.log(`HTTP error! status: ${resp.status}`);
            return "error";

        } else {
            const p = await resp.json();
            return {

                "nombre": p.name,
                "alto": p.height,
                "masa": p.mass,
                "color_pelo": p.hair_color,
                "color_piel": p.skin_color,
                "color_ojo": p.eye_color,
                "ano_nacimiento": p.birth_year,
                "genero": p.gender,
                "mundo_origen": p.homeworld,
                "peliculas": p.films,
                "especies": p.species,
                "vehiculos": p.vehicles,
                "inicio_enbarcacion": p.starships,
                "creado": p.created,
                "editado": p.edited,
                "link": p.url
            };
        }
    } catch (e) {
        console.log(e);
        return "error";
    }






};

module.exports = {
    swapiPeopleAll,
    swapiPeople
}
