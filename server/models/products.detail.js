module.exports = ({
    nameAuthor,
    lastNameAuthor,
    id,
    title,
    currency_id,
    price,
    decimals,
    pictures,
    condition,
    shipping,
    sold_quantity,
    plain_text
}) => {
    return {
        author: {
            name: nameAuthor,
            lastname: lastNameAuthor,
        },
        item: {
            id,
            title,
            price: {
                currency: currency_id,
                amount: price,
                decimals
            },
            picture: pictures[0].url,
            condition,
            free_shipping: shipping.free_shipping,
            sold_quantity,
            description: plain_text
        }
    }
}