import { Box, Button, Input, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/details")
  }

  const handleLogin = () => {
    const registrationData = JSON.parse(localStorage.getItem('registrationData'));

    console.log(registrationData.email)

    if (!registrationData.email || !registrationData.password) {
      setErrorMessage('Please enter all the data.');
      return;

    }

    if (!registrationData.email.includes("@") || !registrationData.email.includes(".com")) {
      setErrorMessage('Invalid email address.');
      return;
    }

    else if (loginData.identifier === registrationData.email || loginData.identifier === registrationData.number && loginData.password === registrationData.password) {


      alert('Login successful!');
      localStorage.setItem('Data', JSON.stringify(registrationData));

      if (alert) {
        navigateToLogin();

      }


    } else {
      alert('Invalid Ceredentials')
    }




  };

  return (
    <Box
      sx={{
        width: "30%",
        margin: "auto",
        marginTop: "30px",
        height: "350px",
        //  border:"1px solid black",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px"
      }}
    >

      <Typography
        sx={{
          marginTop: "20px"
        }}
        variant="h4"
      >
        Login
      </Typography>
      {errorMessage && <p>{errorMessage}</p>}

      <Input
        sx={{
          width: "30ch",
          margin: "16px"
        }}
        type="text"
        name="identifier"
        placeholder="Email or Mobile Number"
        value={loginData.identifier}
        onChange={handleInputChange}
      />
      <br></br>
      <br></br>
      <Input
        sx={{
          width: "30ch"
        }}
        type="password"
        name="password"
        placeholder="Password"
        value={loginData.password}
        onChange={handleInputChange}
      />
      <br></br>

      <Button
        sx={{
          width: "240px",
          marginTop: "55px",
          borderRadius: "10px"
        }}
        variant="contained"

        onClick={handleLogin}>Login</Button>
      <br></br>

      <Button
        sx={{
          width: "240px",
          marginTop: "20px",
          borderRadius: "10px"
        }}
        variant="contained"

        onClick={() => {
          navigate("/")
        }}>Logout</Button>
    </Box>
  );
}

export default LoginForm;
