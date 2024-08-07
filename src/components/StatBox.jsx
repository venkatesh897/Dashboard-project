import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const StatBox = ({ title, orderQunatity, icon, percentage,statusOfPercentage }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%"  p="20px" >
      <Box display="flex"  >
        <Box>
          <Box mb="10px" mr="30px" width="30px">

          {icon}
          </Box>

          <h4 fontWeight="bold" sx={{ color: colors.grey[100] }}>{title}</h4>
        
        
        </Box>
       
      </Box>
      <Box display="flex" justifyContent="space-between"  alignItems="center">
        <Typography variant="h2" sx={{ color: colors.grey[100] }} fontWeight="bold"> 
          {orderQunatity}
        </Typography>


        {statusOfPercentage =="profit" && 

        <Box display="flex" justifyContent={"center"} alignItems="center">


                <Typography variant="h8" sx={{ color: colors.greenAccent[500] }} fontWeight="bold"> 
                {percentage}%
                </Typography>

                <ArrowDropUpIcon color="success"/>



        </Box>

       
        
        
        }


        {statusOfPercentage =="loss" && 

        <Box display="flex" justifyContent={"center"} alignItems="center">


                <Typography variant="h8" sx={{ color: colors.redAccent[500] }} fontWeight="bold"> 
                {percentage}%
                </Typography>

                <ArrowDropDownIcon sx={{ color: colors.redAccent[500] }}/>



        </Box>




        }


       

       

     
       
      </Box>
    </Box>
  );
};

export default StatBox;