import { useNavigate } from 'react-router-dom';

export default function Form({
  username,
  password,
  setUsername,
  setPassword,
  handleSubmit,
  buttonText,
}) {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    // Redirect to the registration page
    navigate('/register');
  };
  const signUpButton = (
    <button
      type='button'
      onClick={handleRegisterClick}
      className='mt-2 text-blue-500 hover:underline focus:outline-none'
    >
      Dont have an account? Sign up
    </button>
  );

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <form onSubmit={handleSubmit} className='bg-white p-8 rounded-lg shadow-lg w-96'>
        <h2 className='text-2xl font-bold mb-6 text-center'>{buttonText}</h2>
        <div className='mb-4'>
          <label className='block text-gray-700 font-semibold mb-2'>Username:</label>
          <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>
        <div className='mb-6'>
          <label className='block text-gray-700 font-semibold mb-2'>Password:</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>
        <button
          type='submit'
          className='w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition duration-200'
        >
          {buttonText}
        </button>
        {buttonText === 'Login' && signUpButton}
      </form>
    </div>
  );
}
