import LoginInput from '../components/LoginInput';
import { login } from '../utils/network-data';

function LoginPage({ loginSuccess }) {
  async function onLogin({ email, password }) {
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
    }
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <header>
        <h1 className="text-2xl font-medium mt-4">Aplikasi Catatan</h1>
      </header>
      <main className="w-full">
        <LoginInput login={onLogin} />
      </main>
    </div>
  );
}

export default LoginPage;
