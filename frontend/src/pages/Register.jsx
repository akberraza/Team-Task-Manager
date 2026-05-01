import React from 'react'
import AuthForm from '../components/AuthForm'
import {data, useNavigate} from 'react-router-dom';
import { register } from '../services/authService';

const Register = () => {

const navigate = useNavigate();

const handleRegister = async(data) => {
  try {
    await register(data);
    navigate('/')
  } catch (err) {
    console.log(err.response.data);
  }
}

  return <AuthForm type='register' onSubmit={handleRegister} />
}

export default Register