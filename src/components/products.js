import React from 'react';

export default function Products(props) {
    const { data } = props;
    return (
        <div>
            <h1>{data.title}</h1>
        </div>
    )
}