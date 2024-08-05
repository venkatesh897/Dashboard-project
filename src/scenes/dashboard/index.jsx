import Header from "../../components/Header"
import { Box ,Grid,Typography,useTheme} from "@mui/material"
import StatBox from "../../components/StatBox"
import { tokens } from '../../theme'
import NetProfitStats from '../../components/NetProfitStats'
import ActivityChart from "../bar";
import { useState } from "react";
import MenuCard from "../../components/MenuCard";
import RecentOrders from "../recentOrders"
import ReviewList from "../reviews"




const Dashboard = ()=>
    {
        const theme = useTheme();
        const colors = tokens(theme.palette.mode)
        const [isOpen, setIsOpen] = useState(false)
        const menuOptions = ['Golas','Popular Dishes', 'Menus']

        const toggleDropdown = () => {
            setIsOpen(!isOpen);
        };

        
        return <Box m="20px"  >
            <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title="Dashboard"  />
            
            </Box >

            <Box>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6} xl={2}>
                                <Box
                                backgroundColor = {colors.primary[400]}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                borderRadius="10px"
                                >
                                    <StatBox
                                        title="Total Orders"
                                        orderQunatity={75}
                                        icon={<img src={`../../assests/TotalOrderIcon.png`} style={{width:"30px",borderRadius:"10px"}} borderRadius="40px"/>}
                                        percentage = {3}
                                        statusOfPercentage = "profit"
                                    >
                                    </StatBox>

                                </Box>

                            </Grid>

                            <Grid item xs={12} md={6} xl={2}>
                                <Box
                                backgroundColor = {colors.primary[400]}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                 borderRadius="10px"
                                >
                                    <StatBox
                                        title="Total Delivered"
                                        orderQunatity={70}
                                        icon={<img src={`../../assests/deliveredOrders.png`} style={{width:"30px",borderRadius:"10px"}} borderRadius="40px"/>}
                                        percentage = {3}
                                        statusOfPercentage = "loss"
                                    >
                                    </StatBox>

                                </Box>

                            </Grid>

                            <Grid item xs={12} md={6} xl={2}>
                                <Box
                                backgroundColor = {colors.primary[400]}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                 borderRadius="10px"
                                >
                                    
                                     <StatBox
                                        title="Total cancelled"
                                        orderQunatity={"0" + 5}
                                        icon={<img src={`../../assests/cancelledOrdersIcon.png`} style={{width:"30px",borderRadius:"10px"}} borderRadius="40px"/>}
                                        percentage = {3}
                                        statusOfPercentage = "profit"
                                    >
                                    
                                    </StatBox>
                                </Box>

                            </Grid>

                            <Grid item xs={12} md={6} xl={2}>
                                <Box
                                backgroundColor = {colors.primary[400]}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                 borderRadius="10px"
                                >
                                    <StatBox
                                        title="Total Revenue"
                                        orderQunatity={"$" + 12 + "k"}
                                        icon={<img src={`../../assests/RevenueIcon.png`} style={{width:"30px",borderRadius:"10px"}} borderRadius="40px"/>}
                                        percentage = {3}
                                        statusOfPercentage = "loss"
                                    >
                                    
                                    </StatBox>

                                </Box>

                            </Grid>

                            <Grid item xs={12} md={12} xl={4} >
                                <Box
                                backgroundColor = {colors.primary[400]}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                 borderRadius="10px"
                                >
                                   <NetProfitStats 
                                   title="Net Profit"
                                   totalRevenue = {6795.25}
                                   percentage={2}
                                   signOfPercentage="profit"
                                   >
                                    
                                   </NetProfitStats>

                                </Box>

                            </Grid>


                    </Grid>


                  <Grid container spacing={2}>

                    <Grid item sm={12} md={12} lg={8} mt={2} width="100%">
                        <ActivityChart/>
                    </Grid>
                    <Grid item sm={12} md={12} lg={4} mt={2} width="100%" >
                        <Box borderRadius="10px" backgroundColor={colors.primary[400]}>
                            <MenuCard title="Goals" 
                            icon={<img src={`../../assests/target.png`} style={{width:"40px",borderRadius:"10px"}} borderRadius="40px"/>}/>

                            <MenuCard title="Popular Dishes" 
                            icon={<img src={`../../assests/burger.png`} style={{width:"40px",borderRadius:"10px"}} borderRadius="40px"/>}/>

                            <MenuCard title="Menu" 
                            icon={<img src={`../../assests/menu.png`} style={{width:"40px",borderRadius:"10px"}} borderRadius="40px"/>}/>
                           


                        </Box>
                       
                    </Grid>
                  </Grid>


                  {/* Row 3 */}

                  <Grid container spacing={2}>

                    <Grid item sm={12} md={12} lg={8}  mt={3}  >


                        <Box >
                            <RecentOrders />

                        </Box>
        
                    </Grid>

                    <Grid item sm={12} md={12} lg={4}>

                    <Box mt={3} backgroundColor={colors.primary[400]} p={2}>
                        <ReviewList />
                    </Box>
                    
                    </Grid>


                  </Grid>

                 
                 

                   

            </Box>
    

           
            
            
            


           
        </Box>
    }
    
    export default Dashboard