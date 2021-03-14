import React from 'react'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

const Breadcrumb = ({ categories }) => {
    const objCat = [];
    if (categories !== undefined) {
        for (let i = 0; i < categories.length; i++) {
            objCat.push(
                {
                    id: i,
                    value: categories[i]
                }
            );
        }
    }


    return (
        <div className="breadCrumbs__container">
            <Breadcrumbs separator="›" aria-label="breadcrumb">
                {
                    objCat.length > 0 ? objCat.map((item) => (
                        <p key={item.id} >{item.value}</p>
                    )) : ""

                }
            </Breadcrumbs>
        </div>
    )
}

export default Breadcrumb
