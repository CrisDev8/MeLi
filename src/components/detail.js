import React, { useEffect, useState } from 'react'
import NumberFormat from 'react-number-format';
import { useParams } from 'react-router-dom';
import productsApi from '../api/productsApi';

const Detail = ({ item }) => {

    // Capturar parametros
    const { id } = useParams();
    const [detailItem, setDetail] = useState([]);

    // Precargar dato

    useEffect(() => {
        onDetail();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onDetail = async () => {
        const results = await productsApi.get(`/${id}`);
        const detailJson = await results.data.item;
        setDetail(detailJson);
    }
    return (
        <div className="detail__container">
            <div className="detail__row">
                <div className="detail__row--containerImg">
                    <img className="detail__row--img" alt={detailItem.title} src={detailItem.picture} />
                </div>
                <div className="detail__row--containerText">
                    <span>{detailItem.condition === "new" ? "Nuevo" : "usado"} </span>
                    -
                    <span> {detailItem.sold_quantity + " vendidos"} </span>

                    <p className="detail__row--p">
                        {detailItem.title}
                    </p>
                    <div className="detail__row--price">
                        <span className="products__title--prefix">$</span>
                        <NumberFormat
                            value={detailItem.price !== undefined ? detailItem.price.amount : ""}
                            displayType={'text'}
                            thousandSeparator={true}
                            renderText={formattedValue => <span>{formattedValue}</span>}
                        />
                    </div>

                    <button className="detail__row--btn">Comprar</button>
                </div>
            </div>
            {/* Descripcion  */}
            <div className="detail__description">
                <p className="detail__description--title">Descripción del producto</p>
                <p>
                    {detailItem.description}
                </p>
            </div>
        </div>
    )
}

export default Detail;
