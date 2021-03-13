import React from 'react'
import Products from './products'

const ProductList = ({ results }) => {

    let data = []
    console.log("LOS RESULTADOS SON", results);

    if (results.items) {
        data = results.items;
    }
    return (
        <div>
            {data.map((item) => (
                <Products key={item.id} data={item} ></Products>
            ))}

        </div>
    )
}

export default ProductList
