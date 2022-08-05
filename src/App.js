import React, {useState} from 'react'
import data from './components/back/data/Data'
import Header from './components/front/header/Header'
import { BrowserRouter as Router} from 'react-router-dom'
import Contain from './components/front/cont/Contain'
import Footer from './components/front/foot/Footer'


const App = () => {

  const {productItems} = data;
  const [cartItems, setCartItems] = useState([]);

  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist){
      setCartItems(cartItems.map((item) => item.id === product.id ?
      { ...ProductExist, quantity: ProductExist.quantity + 1} : item));
     }
      else {
      setCartItems([...cartItems, {...product, quantity: 1}]);
    }
  }; 

  const handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems (
        cartItems.map((item) => item.id ===product.id ?
      {...ProductExist, quantity: ProductExist.quantity - 1}: item)
      );
      
    }

  }

  const handleCartClearance = () => {
     setCartItems([]);
  }

  return (
    <div>
      <Router>
        <Header cartItems={cartItems} />
        <Contain productItems={productItems} 
        cartItems={cartItems} 
        handleAddProduct={handleAddProduct} 
        handleRemoveProduct={handleRemoveProduct} 
        handleCartClearance={handleCartClearance}
        />
        <Footer />
      </Router>
    </div>
  )
}

export default App;

