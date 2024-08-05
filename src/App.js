import { CssBaseline, Grid, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Topbar from "./scenes/global/Topbar";
import {Routes,Route} from 'react-router-dom'
import Dashboard from "./scenes/dashboard/index";
import Sidebar from "./scenes/global/Sidebar";
import ActivityChart from "./scenes/bar";



function App() {
  const [theme, colorMode] = useMode();
  

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">  



          <Grid container spacing={2} >

            <Grid item sm={1} md={1} lg={1} style={{position:"fixed",zIndex:1}}>
              <Sidebar   />
            </Grid>


            <Grid item sm={11} md={11} lg={11} ml="90px" width="80%">

                <main className="content"  >
                      
                      <Topbar/>
                      <Routes>

                        <Route path = "/" element = {<Dashboard/>}/>
                        <Route path = "/barchart" element = {<ActivityChart/>}/>
                      </Routes>
                </main>


            </Grid>

            
          </Grid>


     

      
           

       

       


         






       


-

              



          
           


           


           
        

                
              
         
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
