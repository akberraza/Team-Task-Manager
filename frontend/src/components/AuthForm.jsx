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
      
     </form>
  )
}

export default AuthForm