import React from 'react';
import NumberFormat from 'react-number-format';
import { Link } from 'react-router-dom';
import icShipping from '../styles/img/ic_shipping.png';
import icShippingSrcset from '../styles/img/ic_shipping@2x.png.png.png';

export default function Products(props) {
    const { data } = props;
    return (
        <div>
            <Link to={`/items/${data.id}`}>
                <div className="products__list">
                    <div className="products__column1">
                        <div className="products__imgContainer">
                            <img className="products__imgContainer--img" src={data.picture} alt={data.title}></img>
                        </div>
                        <div className="products__padding">
                            <div className="products__title">
                                <span className="products__title--prefix">$</span>
                                <NumberFormat
                                    value={data.price.amount}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    renderText={formattedValue => <span>{formattedValue}</span>}
                                />
                                <img className="products__title--car" alt="carShopping" src={icShipping} srcSet={icShippingSrcset} />
                            </div>
                            <p className="products__p">
                                {data.title}
                            </p>
                        </div>
                    </div>
                    <div className="products__place">
                        {data.address}
                    </div>
                </div>
                <div className="products__divider"></div>

            </Link>
        </div>
    )
}