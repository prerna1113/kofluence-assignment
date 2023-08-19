import { Box, Typography } from '@mui/material'
import React from 'react'

function UserDetails() {

    const details = JSON.parse(localStorage.getItem('Data'));
    console.log(details)
  return (
   <Box 
   sx={{
    width:"40%",
    margin:"auto",
   marginTop:"100px",
   height:"330px",
//    border:"1px solid black",
   boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px"
  }}
   >

    <Typography 
    sx={{
       padding:"10px"
    }}
    variant ="h5"
    >
        UserDetails Page

    </Typography>
    <Box  sx={{
        marginTop:"10px",
        textAlign:"start",
        padding:"15px",
        

    }}>

    <Typography 
    variant ="h6">
       Name:-{details.name}
    </Typography>

    <Typography 
    variant ="h6">
       Email:-{details.email}
    </Typography>

    <Typography 
    variant ="h6">
       Mobile Number:-{details.number}
    </Typography>

    <Typography 
    variant ="h6">
       Age:-{details.age}
    </Typography>

    <Typography 
    variant ="h6">
       Gender:-{details.gender}
    </Typography>

    <Typography 
    variant ="h6">
       Address:-{details.address}
    </Typography>

    <Typography 
    variant ="h6">
       Occupation:-{details.occupation}
    </Typography>


    </Box>

   
    

   </Box>
  )
}

export default UserDetails