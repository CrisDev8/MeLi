/*
* Construcción de funciones para obtener información 
* Transformación de modelos
* Retorno de información
*/
require('dotenv').config();
const fetch = require('node-fetch');

// Modelos a responder
const products = require("../models/products");
const productDetail = require("../models/products.detail");


// Obtener productos por query
async function getProductsByQuery(req, res) {

    const url = `https://api.mercadolibre.com/sites/MLA/search?q=${req.query.item}&limit=4`;

    const data = await fetch(url).then(res => res.json()).then(json => {
        return json
    });

    const modelConvert = products(data);

    return res.status(200).send(modelConvert);
}

// Obtener detalle de productos por id
async function getProductsById(req, res) {
    const urlDetail = `https://api.mercadolibre.com/items/${req.params.id}`;
    const urlDescription = urlDetail + "/description";

    const dataDetail = await fetch(urlDetail).then(res => res.json()).then(json => {
        return json
    });
    const dataDescription = await fetch(urlDescription).then(res => res.json()).then(json => {
        return json
    });
    // Traer informacion del author, variables de entorno 
    const author = {
        nameAuthor: process.env.NAME || 'Cristian',
        lastNameAuthor: process.env.LASTNAME
    }

    // Construcción del objeto para el modelo
    const object = {
        ...dataDetail,
        ...author,
        ...dataDescription
    }

    const modelConvert = productDetail(object);
    return res.status(200).send(modelConvert);
}

module.exports = { getProductsByQuery, getProductsById };