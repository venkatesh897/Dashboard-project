import React from 'react';
import { Box, Typography, useTheme } from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { tokens } from '../theme';
import LunchDiningIcon from '@mui/icons-material/LunchDining';

const MenuCard = ({title,icon}) => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
   

  
    return (
        
        <Box display="flex" justifyContent="space-between" alignItems="center"
       sx = {{
            padding: {
              xs: 2,    // Padding of 1 on extra-small screens
              sm: 2,    // Padding of 2 on small screens
              md: 2,    // Padding of 3 on medium screens
              lg: 2.65,    // Padding of 4 on large screens
                // Padding of 5 on extra-large screens
            },
          }}>

            <Box display="flex" justifyContent="space-around" gap="10px" alignItems="center">

                {icon}   
                
                <Typography variant='span' fontWeight="bold" color={colors.grey[100]}>

                    {title}

                </Typography>

                    
            </Box>

            <Box>
             
             <NavigateNextIcon/>

            </Box>


        </Box>
    );
}

export default MenuCard;
