import React from 'react'
import Products from './products'

const ProductList = ({ results }) => {

    let data = []

    if (results.items) {
        data = results.items;
    }
    return (
        <div className="products__container">
            {data.map((item) => (
                <Products key={item.id} data={item} ></Products>
            ))}

        </div>
    )
}

export default ProductList
