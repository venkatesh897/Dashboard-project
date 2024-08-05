import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ProgressCircle from '../components/ProgressCircle'

const NetProfitStats = ({ title, totalRevenue, icon, percentage,signOfPercentage }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%"  p="15px"  borderRadius="20px" display="flex" justifyContent="space-between">
      <Box display="flex"  flexDirection="column">
        <Box m="10px"> 
          <h4 fontWeight="bold" sx={{ color: colors.grey[100] }}>{title}</h4>
        
        
        </Box>

        <Typography variant="h5" sx={{ color: colors.grey[100] }} fontWeight="bold" mb="5px"> 
          {"$" + ' ' +totalRevenue}
        </Typography>


                        
            {signOfPercentage =="profit" && 

                <Box >


                        <Typography variant="h8" sx={{ color: colors.greenAccent[500] }} fontWeight="bold"> 
                        {percentage}%
                        </Typography>

                        <ArrowDropUpIcon color="success"/>



                </Box>




                }


            {signOfPercentage =="loss" && 

                <Box >


                        <Typography variant="h8" sx={{ color: colors.redAccent[500] }} fontWeight="bold"> 
                        {percentage}%
                        </Typography>

                        <ArrowDropDownIcon sx={{ color: colors.redAccent[500] }}/>



                </Box>




                }

       
      </Box>
      <Box display="flex" flexDirection ="column" justifyContent={"center"} mt="2px" alignItems="center" gap={0.4}>
       
        <ProgressCircle ProgressValue ={70} ></ProgressCircle>
        <Typography variant="span" color={colors.grey[100]} fontSize={10}>

        * The Values have been rounded off.
      </Typography>

       
      </Box>



    </Box>
  );
};

export default NetProfitStats;