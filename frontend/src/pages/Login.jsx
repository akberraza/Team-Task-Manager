import AuthForm from '../components/AuthForm'
import {useNavigate} from 'react-router-dom';
import {login} from '../services/authService';

const Login = () => {

  const navigate = useNavigate();

  const handleLogin = async(data) => {
    try {
      await login(data);
      navigate('/');
    } catch (err) {
      console.log(err.respose.data);
    }
  }

  return <AuthForm type='login' onSubmit={handleLogin} />
}

export default Login