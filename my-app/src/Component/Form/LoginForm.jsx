import React, { useState } from 'react';

function LoginForm() {
  const [loginData, setLoginData] = useState({
    identifier: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    const registrationData = JSON.parse(localStorage.getItem('registrationData'));
    console.log(registrationData);

    if (!registrationData) {
      setErrorMessage('No registration data found. Please register first.');
      return;
    }

    const user = registrationData[loginData.identifier];
   

    if ((loginData.identifier===registrationData.email || loginData.identifier===registrationData.mobileNumber ) & loginData.password ===registrationData.password) {
      alert('Login successful!');
      // Perform further actions after successful login, such as redirecting to a dashboard.
    } else {
      alert('Invalid Ceredentials')
    }
  };

  return (
    <div>
      <h1>Login</h1>
      {errorMessage && <p>{errorMessage}</p>}
      <input
        type="text"
        name="identifier"
        placeholder="Email or Mobile Number"
        value={loginData.identifier}
        onChange={handleInputChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={loginData.password}
        onChange={handleInputChange}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginForm;
