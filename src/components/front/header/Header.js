import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { TiShoppingCart } from 'react-icons/ti'

const Header = ({cartItems}) => {
  return (
    <header className='header'>
        <div>
            <h1>
                <Link to='/' className='logo'>
                    Mobile Shop
                </Link>
            </h1>
        </div>
        <div className='link'>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
            </ul>
              <ul>
                <li>
                    <Link to='/signup'>Signup</Link>
                </li>
            </ul>  <ul>
                <li>
                    <Link to='/cart' className='cart'>
                        <TiShoppingCart /> 
                        <span className='cl'>{cartItems.length === 0 ? '' : cartItems.length}</span>
                    </Link>
                </li>
            </ul>
        </div>

    </header>
  )
}

export default Header;
