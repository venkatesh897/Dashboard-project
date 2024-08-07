import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import AssignmentTurnedInTwoToneIcon from '@mui/icons-material/AssignmentTurnedInTwoTone';
import AccountBalanceWalletTwoToneIcon from '@mui/icons-material/AccountBalanceWalletTwoTone';
import ShoppingBagTwoToneIcon from '@mui/icons-material/ShoppingBagTwoTone';


import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';

import StickyBox from "react-sticky-box";


const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [selected, setSelected] = useState("Dashboard");
  

  return (

    


      <Box  height="100vh"
                  sx={{
                    "&.pro-sidebar-layout":
                    {
                        height:"100% !important"
                    },
                    "&pro-menu-items":
                    {
                      position:"fixed !important"
                    },
                    "pro-sidebar":
                    {
                      right:"40px !important",
                      position:"fixed !important",
                      
                     
                    },
                    "& .pro-sidebar-inner": {
                      background: `${colors.primary[400]} !important`,
                      position:"relative !important",
                      height:"100% !important"
                    },
                    "& .pro-icon-wrapper": {
                      backgroundColor: "transparent !important",
                    
                    },
                    "& .pro-inner-item": {
                      padding: "5px 35px 5px 20px !important",
                    },
                    "& .pro-inner-item:hover": {
                      color: "#868dfb !important",
                    },
                    "& .pro-menu-item.active": {
                      color: "#6870fa !important",
                    },
                    "& .pro-item-menu":
                    {
                        position:"fixed !important"
                    
                    },
                    "pro-sidebar-layout":
                    {
                      position:"fixed !important"
                    },
                  
                  }}
                >
                  <ProSidebar collapsed={isCollapsed} >
                    <Menu iconShape="square"  >
                      {/* LOGO AND MENU ICON */}
                      <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                        style={{
                          margin: "10px 0 20px 0",
                          color: colors.grey[100],
                          height:"100%"
                        }}
                      >
                        {!isCollapsed && (
                          <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            ml="15px"
                            
                          >
                            <Typography variant="h3" color={colors.grey[100]}>
                              FITPEO
                            </Typography>
                            <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                              <MenuOutlinedIcon />
                            </IconButton>


                          </Box>
                        )}
                      </MenuItem>

                  

                      <Box paddingLeft={isCollapsed ? undefined : "10%"} height="300px">
                        <Item
                          title="Dashboard"
                          to="/"
                          icon={<HomeOutlinedIcon />}
                          selected={selected}
                          setSelected={setSelected}
                        />


                    
                        <Item
                          title="Bar Chart"
                          to="/barchart"
                          icon={<BarChartOutlinedIcon />}
                          selected={selected}
                          setSelected={setSelected}
                        />

                        <Item
                          title="Checklist"
                          to="/bar"
                          icon={<AssignmentTurnedInTwoToneIcon />}
                          selected={selected}
                          setSelected={setSelected}
                        />

                      <Item
                          title="wallet"
                          to="/wallet"
                          icon={<AccountBalanceWalletTwoToneIcon />}
                          selected={selected}
                          setSelected={setSelected}
                        />

                      <Item
                          title="Cart"
                          to="/wallet"
                          icon={<ShoppingBagTwoToneIcon />}
                          selected={selected}
                          setSelected={setSelected}
                        />    

                    

                      
                      </Box>

                      <Box mt="100px" >
                        <Item
                        title="Cart"
                        to="/wallet"
                        icon={<LogoutTwoToneIcon />}
                        selected={selected}
                        setSelected={setSelected}
                    
                        
                        />


                      

                        


                      </Box>

                      
                    </Menu>
                  -
                  </ProSidebar>
                </Box>




            



  );
};

export default Sidebar;