import RegisterInput from '../components/RegisterInput';
import { register } from '../utils/network-data';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
  const navigate = useNavigate();
  async function onRegisterHandler(user){
    const { error } = await register(user);
    if (!error){
      navigate('/');
    }
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <h1 className="text-2xl font-medium mt-4">Registrasi</h1>
      <RegisterInput register={onRegisterHandler}/>
    </div>
  );
}

export default RegisterPage;
