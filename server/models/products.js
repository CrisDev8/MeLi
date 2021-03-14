module.exports = data => {
    // Traer informacion del author, variables de entorno 
    const author = {
        name: process.env.NAME || 'Cristian',
        lastName: process.env.LASTNAME
    }
    // Formando objeto para resultados
    const items = data.results.map(
        ({

            id,
            title,
            currency_id,
            price,
            decimals,
            thumbnail,
            condition,
            shipping,
            address,
        }) => ({
            id,
            title,
            price: {
                currency: currency_id,
                amount: price,
                decimals
            },
            picture: thumbnail,
            condition,
            free_shipping: shipping.free_shipping,
            address: address.state_name
        })
    )
    // Formando objeto para categorias
    const categorias = getCategories(data);
    return {
        author,
        categorias,
        items,
    }
}


// Metodo para extraer las categorias de los productos
function getCategories(data) {
    if (data.filters.length !== 0) {
        return data.filters[0].values[0].path_from_root.map(res => {
            return res.name
        })
    }
}