import React from 'react'
import './Cart.css'

const Cart = ({cartItems, handleAddProduct, handleRemoveProduct, handleCartClearance}) => {
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price, 0
  );
  return (
    <div className='cart-item'>
      <h1>Cart items</h1>

      <div className='clear'>
        {cartItems.length >= 1 && (
          <button className='clear-cart' onClick={handleCartClearance}>Clear Cart</button>
        )}
      </div>
    
      {cartItems.length === 0 && (
          <p className='empty'>No items added to cart </p>
      )}

      <div>
          {cartItems.map ((item) => (
              <div className='cart-list' key={item.id}>
                <img
                className='cart-image'
                src={item.image}
                alt={item.image} />

                <div className='cart-name'>{item.name}</div>

                <div className='cart-function'>
                  <button className='cart-add' onClick={() => handleAddProduct(item)} > + </button>

                  <button className='cart-remove' onClick={() => handleRemoveProduct(item)} > - </button>

                </div>
                <div className='cart-price'>
                  {item.quantity} * {item.price}
                </div>
              </div>

          ))}
      </div>

      <div className='total-price'>
        <div className='h1'>Total Price</div>
        <p> ${totalPrice} </p>
      </div>
    </div>
  )
}

export default Cart;
