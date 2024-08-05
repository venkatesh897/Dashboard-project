import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

const ProgressCircle = ({ progress = "0.75", size = "110" ,progressTitle,ProgressValue}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const angle = progress * 360;
  return (
    <Box
      sx={{
        background: `radial-gradient(${colors.primary[400]} 55%, transparent 56%),
            conic-gradient(transparent 0deg ${angle}deg, ${colors.blueAccent[500]} ${angle}deg 360deg),
            ${colors.greenAccent[500]}`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
        display:"flex",
        justifyContent:"center",
        
      }}
    >

      <Box display="flex" flexDirection="column" justifyContent="center" alignContent="center" alignItems="center" p={0} m={0}>
        <Typography variant="ph8"  fontWeight="bolder">

        {ProgressValue + "%"}

        </Typography>

        <Typography variant="p"  p={0} m={0}>

        Goals

        </Typography>

        <Typography variant="p"  p={0} m={0}>

        Completed.

        </Typography>



      </Box>


      
      


    </Box>
  );
};

export default ProgressCircle;