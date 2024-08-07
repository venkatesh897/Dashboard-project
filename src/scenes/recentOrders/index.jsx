import React from 'react';
import ResponsiveDataGrid from '../../components/ResponsiveDataGrid';
import { Box } from '@mui/material';
import { Grid,Typography,useTheme} from "@mui/material"
import { tokens } from '../../theme'




const RecentOrders = () => {

  const theme = useTheme();
const colors = tokens(theme.palette.mode)

const rows = [
  { id: 1, customer: 'John Doe' , order_no: '001', amount: 150.0, status: 'Delivered' ,avatarUrl: 'https://via.placeholder.com/40'},
  { id: 2, customer: 'Jane Smith'  , order_no: '002', amount: 200.0, status: 'Pending' ,avatarUrl: 'https://via.placeholder.com/40'},
  { id: 3, customer:'Alice Johnson', order_no: '003', amount: 250.0, status: 'Canceled',avatarUrl: 'https://via.placeholder.com/40' },
];

const columns = [
  
  {
    field: 'customer',
    headerName: 'Customer',
    width: 300,
    flex:1,
    renderCell: (params) => (
      <Box display="flex" gap="10px" alignItems="center">
       
 
        <img src={params.row.avatarUrl} style={{borderRadius:"20px"}}/>
         
        <span>{params.row.customer}</span>
       
      </Box>
    ),
  },
  { field: 'order_no', headerName: 'Order No', width: 150, flex: 0},
  { field: 'amount', headerName: 'Amount', width: 150, type: 'number',flex: 1},
  {
    field: "status",
    headerName: "Status",
    flex: 1,
    renderCell: ({ row: { status } }) => {
      return (
        <Box
          width="90px"
          mt="10px"
          p="5px"
          display="flex"
          justifyContent="center"
          backgroundColor={
            status === "Delivered"
              ? colors.greenAccent[600]
              : colors.redAccent[600]
             
          }
          borderRadius="30px"
        >
          <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
            {status}
          </Typography>
        </Box>
      );
    },
  },

];
    
  return (
    <Box

    backgroundColor={colors.primary[400]}
    sx={{
        width: {
          xs: '100%',  // 100% width on extra-small screens
          sm: '100%',   // 75% width on small screens
          md:'100%',
          lg:'100%'
        },
      }}

    
    
    >
      <ResponsiveDataGrid rows={rows} columns={columns} />
    </Box>
  );
};

export default RecentOrders;