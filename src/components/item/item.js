import React from 'react'
import PropTypes from 'prop-types' // ES6

function Item(props) {
    return (
        <>
            <img data-testid="photo" href={props.img.src} alt={props.img.alt} />
            <div data-testid="name">{props.name}</div>
            <div data-testid="rating">{props.rating}</div>
            <div data-testid="address">{props.address}</div>
            <div data-testid="type">{props.type}</div>
            <div data-testid="number-of-reviews">{props.numberOfReviews}</div>
        </>
    )
}

Item.propTypes = {
    name: PropTypes.string,
    rating: PropTypes.number,
    address: PropTypes.string,
    type: PropTypes.string,
    numberOfReviews: PropTypes.number,
    img: PropTypes.shape({ alt: PropTypes.string, src: PropTypes.string }),
}
Item.defaultProps = {
    img: { src: '/', alt: '/' },
}
export default Item
