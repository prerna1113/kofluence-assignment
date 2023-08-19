import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import { Box, Button, TextField, Typography } from '@mui/material';

function RegistrationForm() {


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        number: '',
        age: '',
        gender:'',
        occupation: '',
        address: '',
    });
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();
    const navigateToLogin = () => {
        navigate("/login")
    }


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleRegister = () => {
        if (
            !formData.name ||
            !formData.email ||
            !formData.password ||
            !formData.number ||
            !formData.age ||
            !formData.occupation ||
            !formData.address ||
            !formData.gender
        ) {
            setErrorMessage('Please enter all the data.');
            return;
        }

        if (!formData.email.includes('@') || !formData.email.includes('.com')) {
            setErrorMessage('Invalid email address.');
            return;
        }

        // Save data to local storage
        localStorage.setItem('registrationData', JSON.stringify(formData));
        alert('Registration successful!');
        navigateToLogin();
    };

    return (
       
        
        <Box
            sx={{
                width: "33%",
                margin: "auto",
                height: "630px",
                marginTop:"50px",
                // padding:"20px",
                // border:"1px solid red",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px"

            }}>
                
            <Typography
                sx={{
                    padding: "10px"
                }}
                variant="h4"
            >Registration Form
            </Typography>
            {errorMessage && <p>{errorMessage}</p>}
            <TextField
                sx={{
                    textAlign: "start",
                    width: "27ch",
                   

                }}

                type="text"
                label="Name"
                name="name"

                value={formData.name}
                onChange={handleInputChange}

                variant="standard" />
            <br></br>
            
            <TextField
                sx={{
                    textAlign: "start",
                    width: "27ch",
                    marginTop: "10px"
                }}
                type="email"
                label="Email Address"
                name="email"
                variant="standard"

                value={formData.email}
                onChange={handleInputChange}
            />
            <br></br>
            <TextField
                sx={{
                    textAlign: "start",
                    width: "27ch",
                    marginTop: "10px"
                }}
                type="password"
                label="Password"
                name="password"
                variant="standard"

                value={formData.password}
                onChange={handleInputChange}
            />
            <br></br>
            <TextField
                sx={{
                    textAlign: "start",
                    width: "27ch",
                    marginTop: "10px"
                }}
                type="number"
                label="Mobile Number"
                name="number"
                variant="standard"

                value={formData.number}
                onChange={handleInputChange}
            />
            <br></br>
            <TextField
                sx={{
                    textAlign: "start",
                    width: "27ch",
                    marginTop: "10px"
                }}
                type="number"
                label="Age"
                name="age"
                variant="standard"

                value={formData.age}
                onChange={handleInputChange}
            />
            <br></br>

            <TextField
                sx={{
                    textAlign: "start",
                    width: "27ch",
                    marginTop: "10px"
                }}
                type="text"
                label="Gender"
                name="gender"
                variant="standard"

                value={formData.gender}
                onChange={handleInputChange}
            />
            <br></br>
            <TextField
                sx={{
                    textAlign: "start",
                    width: "27ch",
                    marginTop: "10px"
                }}
                type="text"
                label="occupation"
                name="occupation"
                variant="standard"

                value={formData.occupation}
                onChange={handleInputChange}
            />
            <br></br>
            <TextField
                sx={{
                    textAlign: "start",
                    width: "27ch",
                    marginTop: "10px"
                }}
                type="text"
                label="Address"
                name="address"
                variant="standard"

                value={formData.address}
                onChange={handleInputChange}
            />
            <br></br>
            <Button 
            sx={{
                marginTop:"18px",
                width: "250px"
              }}
              variant="contained"
            onClick={handleRegister}>Register</Button>
        </Box>
       
    );
}

export default  RegistrationForm;
