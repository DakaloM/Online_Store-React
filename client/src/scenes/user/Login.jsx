import React from 'react'
import { Box, Typography, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { shades } from "../../theme"
import { getIn } from "formik"

const Login = () => {
    const navigate = useNavigate();
  return (
    <Box
        width="50%"
        margin="80px auto"
        backgroundColor="white"
        borderRadius="10px"
    >
        <TextField
            fullWidth
            type="email"
            label="Email"
            onBlur={handleBlur}
            onChange={handleChange}
        />

    </Box>
  )
}

export default Login