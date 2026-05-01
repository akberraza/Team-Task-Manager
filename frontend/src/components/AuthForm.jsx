import React, { useState } from 'react'

const AuthForm = ({type, onSubmit}) => {
  
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
     setForm({...form, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  }
  
  return (
     <form onSubmit={handleSubmit} className='max-w-md mx-auto mt-10 space-y-4'>
      {type ===  'register' && (
        <input type="text" name='name' placeholder='Name' onChange={handleChange} className='w-full p-2 border rounded' />
      )}

      <input type="email" name='email' placeholder='Email' onChange={handleChange} className='w-full p-2 border rounded '  />
      <input type="password" name='password' placeholder='Password' onChange={handleChange}   className='w-full p-2 border rounded' />

      <button className='w-full bg-black text-white p-2 rounded'>
        {type === "login" ? "Login" : "Register"}
      </button>

     </form>
  )
}

export default AuthForm