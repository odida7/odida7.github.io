import React from 'react'
import './Products.css'

const Products = ({productItems, handleAddProduct}) => {
  return (
    <div className='products'>
        <h1 className='hh'>Latest Mobile phones on the market</h1>
        <div className='it'>
        {productItems.map((productItem) => (
            <div className='card'>
                <div>
                    <img  
                    className='product-image'
                    src={productItem.image}
                    alt={productItem.image}
                    />
                </div>
                <div>
                    <h3 className='product-name'> {productItem.name} </h3>
                    <p className='product-price'>${productItem.price}</p>
                </div>
                <div>
                    <button className='add' onClick={() => handleAddProduct(productItem)}>
                         Add to Cart
                    </button>
                </div>
            </div>
        ))}
        </div>
    </div>
  );
}; 

export default Products
