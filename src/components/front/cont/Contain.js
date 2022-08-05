import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Products from '../products/Products'
import Signup from '../signup/Signup'
import Cart from '../cart/Cart'


const Contain = ({productItems, cartItems, handleAddProduct, handleRemoveProduct, handleCartClearance}) => {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Products productItems={productItems} handleAddProduct={handleAddProduct} />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/cart' element={<Cart cartItems={cartItems} 
        handleAddProduct={handleAddProduct} 
        handleRemoveProduct={handleRemoveProduct}
        handleCartClearance={handleCartClearance}
        />} />

      </Routes>
    </div>
  )
}

export default Contain;
