

import React from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import styles from './CSS/Registration.module.css'

function RegistrationForm() {
  return (
    <Box
      sx={{
        width: "35%",
        margin: "auto",
        height: "650px",
        // border:"1px solid red",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
        marginTop: "70px"

      }}>
      <Box

      >

        <form>

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
              margin: "10px"

            }}
            id="standard-basic"
            type="text"
            label="Name"
            variant="standard" />
          <br></br>

          <TextField
            className={styles.textfield}
            id="standard-basic"
            type="email"
            label="Email Address"
            variant="standard" />
          <br></br>

          <TextField
            sx={{
              width: "27ch",
              margin: "10px"
            }}
            type="Password"
            label="Password"
            variant="standard" />
          <br></br>

          <TextField
            className={styles.textfield}
            type="number"
            label="Mobile Number"
            variant="standard" />
          <br></br>

          <TextField
            sx={{
              width: "27ch",
              margin: "10px"
            }}
            type="number"
            label="Age"
            variant="standard" />
          <br></br>

          <TextField
            className={styles.textfield}
            type="text"
            label="Address"
            variant="standard" />
          <br></br>

          <TextField
            sx={{
              width: "27ch",
              margin: "10px"
            }}
            label="Gender"
            variant="standard" />
          <br></br>

          <TextField
            className={styles.textfield}
            label="Occupation"
            variant="standard" />
            <br></br>

          <Button
          sx={{
            marginTop:"30px",
            width:"240px"
          }}
            variant="contained"
          >Register</Button>


        </form>
      </Box>
    </Box>

  )
}

export default RegistrationForm