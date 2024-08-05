import { Box, IconButton, useTheme } from "@mui/material"
import { useContext } from "react"
import { ColorModeContext,tokens } from "../../theme"
import InputBase from "@mui/material/InputBase"
import SearchIcon from "@mui/icons-material/Search"
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';

const Topbar = ()=>
    {
        const theme = useTheme();
        const colors = tokens(theme.palette.mode)
        const colormode = useContext(ColorModeContext)
        return (
        <Box display="flex" justifyContent="space-between" p={2}>
            
            <Box 
            display="flex" 
            backgroundColor = {colors.primary[400]} 
            sx={{ borderRight: "50%" }}>

                <IconButton type="button" sx ={{p:1}}>
                    <SearchIcon/>
                </IconButton>

                <InputBase sx ={{flex:1}} placeholder ="Search"/>
               
              

            </Box>

            <Box display="flex">
                <IconButton>
                <MessageRoundedIcon/>
                </IconButton>

                <IconButton>
                    <SettingsOutlinedIcon/>    
                </IconButton>

                <IconButton>
                     <NotificationsOutlinedIcon/>     
                </IconButton>

                <IconButton>
                     
                    <img
                    alt="profile-user"
                    width="50px"
                    height="50px"
                    sx={{ borderRight: "50%" }}
                    src={`../../assests/user.png`}
                    />   
                </IconButton>

               
                
             
            </Box>

        </Box>
        )
    }
    
export default Topbar