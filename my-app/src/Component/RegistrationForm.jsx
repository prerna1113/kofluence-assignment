

import React from 'react'
import { Box, Button, Input, TextField, Typography } from '@mui/material'
import styles from './CSS/Registration.module.css'
import { useState, useEffect } from 'react';
import { ClassNames } from '@emotion/react';

function RegistrationForm() {
  const initialvalues = {
    name: "",
    email: "",
    password: "",
    mobileNumber: "",
    age: "",
    occupation: "",
    address: ""
  };
  const [inputs, setInputs] = useState(initialvalues);

  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)


  const handleChange = (e) => {
    const { name, value } = e.target
    setInputs({ ...inputs, [name]: value });
    console.log(inputs);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(inputs));
    setIsSubmit(true);

  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).lenght === 0 && isSubmit) {
      console.log(inputs)
    }

  }, [formErrors]);

  const validate = (name) => {
    const errors = {}
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i;
    if (!name.name) {
      errors.name = "Resturant name is required";
    }
     if(!name.email ){
     errors.email= "Email is required";
    }
    else  if (!name.email.includes('@') || !name.email.includes('.com')) {
      errors.email ="Invalid email address"
     
    }
    if(!name.password){
      errors.password= "Password is required";
     }
     if(!name.mobileNumber){
      errors.mobileNumber= "MobileNumber is required";
     }
     if(!name.gender){
      errors.gender= "Gender is required";
     }
     if(!name.age){
      errors.age= "Age is required";
     }
     if(!name.occupation){
      errors.occupation= "Occupation is required";
     }
     if(!name.address){
      errors.address= "Address is required";
     }

    

    return errors;
  }


  return (
    <Box
      sx={{
        width: "33%",
        margin: "auto",
        height: "auto",
        // border:"1px solid red",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px"

      }}>
      <Box

      >

          <Typography
            sx={{
              padding: "10px"
            }}
            variant="h4"
          >Registration Form
          </Typography>

          <TextField
            sx={{
              textAlign: "start",
              width: "27ch",
              marginTop:"10px"

            }}

            type="text"
            label="Name"
            name="name"
            value={inputs.name}
            onChange={handleChange}

            variant="standard" />
          <p style={{
             textAlign: "center",
             margin:"0px",
              color: "red" }}>{formErrors.name}</p>

          <br></br>

          <TextField
            sx={{
              textAlign: "start",
              width: "27ch",
              margin:"0px"
            }}
            id="standard-basic"
            type="email"
            name="email"
            value={inputs.email}
            onChange={handleChange}
            label="Email Address"
            variant="standard" />
          <p style={{ textAlign: "center",   
          margin:"0px",

          color: "red" }}>{formErrors.email}</p>
          <br></br>

          <TextField
            sx={{
              width: "27ch",
  
            }}
            type="Password"
            label="Password"
            name="password"
            value={inputs.password}
            onChange={handleChange}
            variant="standard" />
            <p style={{
             textAlign: "center",
             margin:"0px",
              color: "red" }}>{formErrors.password}</p>
          <br></br>

          <TextField
            className={styles.textfield}
            type="number"
            label="Mobile Number"
            name="mobileNumber"
            value={inputs.mobileNumber}
            onChange={handleChange}
            variant="standard" />
            <p style={{
             textAlign: "center",
             margin:"0px",
              color: "red" }}>{formErrors.mobileNumber}</p>
          <br></br>

          <TextField
            sx={{
              width: "27ch",
             
            }}
            type="number"
            name="age"
            value={inputs.age}
            onChange={handleChange}
            label="Age"
            variant="standard" />
            <p style={{
             textAlign: "center",
             margin:"0px",
              color: "red" }}>{formErrors.age}</p>
          <br></br>

          <TextField
            className={styles.textfield}
            type="text"
            label="Address"
            name="address"
            value={inputs.address}
            onChange={handleChange}
            variant="standard" />
            <p style={{
             textAlign: "center",
             margin:"0px",
              color: "red" }}>{formErrors.address}</p>
          <br></br>

          <TextField
            sx={{
              width: "27ch",
              margin: "10px"
            }}
            label="Gender"
            name="gender"
            value={inputs.gender}
            onChange={handleChange}
            variant="standard" />
            <p style={{
             textAlign: "center",
             margin:"0px",
              color: "red" }}>{formErrors.gender}</p>
          <br></br>

          <TextField
            className={styles.textfield}
            label="Occupation"
            name="occupation"
            value={inputs.occupation}
            onChange={handleChange}
            variant="standard" />
            <p style={{
             textAlign: "center",
             margin:"0px",
              color: "red" }}>{formErrors.occupation}</p>
          <br></br>

          <Button
            sx={{
              marginBottom:"25px",
              width: "250px"
            }}

            variant="contained"
            onClick={handleSubmit}
          >Register</Button>


       
      </Box>
    </Box>

  )
}

export default RegistrationForm