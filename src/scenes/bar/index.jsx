// App.js
import React from 'react';
import BarChart from '../../components/BarChart';
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
	
import {Select, MenuItem} from "@mui/material";

const ActivityChart = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const data = {
    labels: [
      '2023-01-01',
      '2023-01-02',
      '2023-01-03',
      '2023-01-04',
      '2023-01-05',
      '2023-01-06',
      '2023-01-07',
      '2023-01-08',
      '2023-01-09',
      '2023-01-10',
      '2023-01-11',
      '2023-01-12',
      '2023-01-13',
      '2023-01-14',
      '2023-01-15',
      '2023-01-16',
      '2023-01-17',
      '2023-01-18',
      '2023-01-19',
      '2023-01-20',
      '2023-01-21',
      '2023-01-22',
      '2023-01-23',
      '2023-01-24',
      '2023-01-25',
      '2023-01-26',
      '2023-01-27',
      '2023-01-28',
      '2023-01-29',
      '2023-01-30',   
    ],
    datasets: [
      {
        label: 'Sales',
        data: [1000,3000,4000,2000,15000,2000,5000,12000,14000,3000,13000,2000,3000,4000,2000,4000,5000,7000,8000,9000,10000,2000,3000],
        backgroundColor: colors.blueAccent[500],
       
        borderWidth: 1,
        categoryPercentage:1.7,
        barPercentage:0.5,
        borderRadius:30,
        borderSkipped: false,
        options: {
          responsive: false,}
       
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      legend: {
        display: false,
    },
      title: {
        display: false,
        
      },
    },
    

    
    scales: {
      x: {
        ticks: {
            color: colors.grey[100], // X-axis label color
            
        },
      
        type: 'time',
        time: {
          unit: 'week',
          tooltipFormat: 'd',
          displayFormats: {
          week: 'd',
          },
        },
        title: {
          display: false,
          text: 'Date',
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: false,
          text: 'Sales',
        },
        ticks: {
            color: colors.grey[100], // X-axis label color
            stepSize: 5000,
        },
      },
    },
  };

  return (
      <Box 
      display="flex" 
      flexDirection="column" 
      justifyContent="center" 
      alignItems="center" 
      width="100%"
      backgroundColor={colors.primary[400]}
      padding={3}
      borderRadius="10px"
      >


                      <Box display="flex" justifyContent="space-between" width= "100%" alignItems="center">

                          <Typography variant="h3" color={colors.grey[100]}>
                            Activity  
                          </Typography>

                          
                          <Typography variant="span" color={colors.grey[100]}>
                              <Select
                                  sx={{
            
                                    width: "100%",
                                    height: 50,
                                    color:colors.grey[100]
                                  }} value={1}
                                >
                                  <MenuItem value={1}>Weekly</MenuItem>
                                  <MenuItem value={2}>Monthly</MenuItem>
                                  <MenuItem value={3}>Yearly</MenuItem>
                                </Select>
                          </Typography>


                      </Box>

                      <Box sx={{
        width: {
          xs: '200px',  // 100% width on extra-small screens
          sm: '200px',   // 75% width on small screens
          md: '600px',   // 50% width on medium screens
          lg: '400px',   // 25% width on large screens
           // 20% width on extra-large screens
        },
      }}>
                         <BarChart data={data} options={options}/>
                      </Box>

                      
    

      </Box>

       
      
  
  );
};

export default ActivityChart;