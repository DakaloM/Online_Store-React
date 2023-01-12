import React from 'react'
import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme"

const Footer = () => {
    const { palette: { neutral }} = useTheme();
    return (
        <Box mt="70px" p="40px 0" backgroundColor={neutral.light}>
            <Box
                width="80%"
                margin="auto"
                display="flex"
                justifyContent="space-between"
                flexWrap="wrap"
                rowGap="30px"
                columnGap="clamp(20px, 30px, 40px)"
            >
                <Box width="clamp(20%, 30%, 40%)"> 
                    <Typography
                        variant='h4'
                        fontWeight="bold"
                        mb="30px"
                        color={shades.secondary[500]}
                    >
                        ECOMMER
                    </Typography>
                    <div>
                        Donec sagittis libero in risus porttitor, sit amet tincidunt ex pharetra. 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada 
                        fames ac ante ipsum primis in faucibusDonec sagittis libero in risus porttitor, 
                        sit amet tincidunt ex pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit. Interdum et malesuada fames ac ante ipsum primis in faucibus
                    </div>

                    
                </Box>
                <Box >
                    <Typography variant='h4' fontWeight="bold" mb="30px">
                        About Us
                    </Typography>
                    <Typography mb="30px">Careers</Typography>
                    <Typography mb="30px">Our Stores</Typography>
                    <Typography mb="30px">Terms & Conditions</Typography>
                    <Typography mb="30px">Privacy Policy</Typography>
                </Box>

                <Box >
                    <Typography variant='h4' fontWeight="bold" mb="30px">
                        Customer Care
                    </Typography>
                    <Typography mb="30px">Help Center</Typography>
                    <Typography mb="30px">Track Your Order</Typography>
                    <Typography mb="30px">Coporate & Bulk Purchasing</Typography>
                    <Typography mb="30px">Return & Refunds</Typography>
                </Box>

                <Box >
                    <Typography variant='h4' fontWeight="bold" mb="30px">
                        Contact Us
                    </Typography>
                    <Typography mb="30px">79 Kgotso Street GreenVillage 2001</Typography>
                    <Typography mb="30px">Email: akalo997@gmail.com</Typography>
                    <Typography mb="30px">(+27) 72 134 4014</Typography>
                </Box>

            </Box>
        </Box>
    )
}

export default Footer