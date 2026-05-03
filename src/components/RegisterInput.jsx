import useInput from '../hooks/useInput';
import { Link } from 'react-router-dom';

function RegisterInput({ register }) {
  // Pastikan useInput mengembalikan [value, handler]
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  function onSubmitEventHandler(event) {
    event.preventDefault();
    // Memanggil fungsi register yang dilewatkan melalui props
    register({ name, email, password });
  }

  return (
    <form
      className="flex flex-col gap-2 border p-10 m-2 shadow-lg rounded-lg w-11/12"
      onSubmit={onSubmitEventHandler}
    >
      <label htmlFor="name">Nama:</label>
      <input
        id="name"
        type="text"
        required
        placeholder="Masukkan email anda disini.."
        value={name}
        onChange={onNameChange}
        className="border rounded-lg p-3"
      />

      <label htmlFor="email">Email:</label>
      <input
        id="email"
        type="email"
        required
        placeholder="Masukkan email anda disini.."
        value={email}
        onChange={onEmailChange}
        className="border rounded-lg p-3"
      />

      <label htmlFor="password">Password:</label>
      <input
        id="password"
        type="password"
        required
        placeholder="Masukkan password anda disini.."
        value={password}
        onChange={onPasswordChange}
        className="border rounded-lg p-3"
      />

      <p className="mt-2">
        Sudah ada akun?{' '}
        <Link to="/" className="text-blue-600 underline">
          Masuk disini
        </Link>
      </p>

      <button
        type="submit"
        className="border rounded-md p-3 mt-4 hover:-translate-y-0.5 transition active:translate-y-0"
      >
        Daftar
      </button>
    </form>
  );
}

export default RegisterInput;