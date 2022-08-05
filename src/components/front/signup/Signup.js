import React from 'react'
import './Signup.css'

const Signup = () => {
  return (
    <div className='sign'>
        <h1>Sign up </h1>
        <div className='for'>
        <form id='contact-form' method='post'>
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <button type="submit" id='sign'> Sign Up</button>
        </form>
        </div>
    </div>
  )
}

export default Signup;
