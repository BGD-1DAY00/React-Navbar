import React from 'react'
import PropTypes from 'prop-types'
import defaultImage from './default-image.jpeg'
export const Product = ({image,name,price}) => {
    const url = image && image.url
  return (
    <div>
        <img src={url || defaultImage} alt="" />
        <h3>{name || 'default'}</h3>
        <h4>{price || 'fixed'}</h4>
    </div>
  )
}
Product.propTypes ={
    image: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
}

// Product.defaultProps ={
//     name: 'default Name',
//     price: 'Fixed',
//     image: defaultImage
// }