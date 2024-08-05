import React from 'react';
import ResponsiveDataGrid from '../../components/ResponsiveDataGrid';
import { Box } from '@mui/material';
import { Grid,Typography,useTheme} from "@mui/material"
import { tokens } from '../../theme'

const rows = [
  { id: 1, customer: 'John Doe', order_no: '001', amount: 150.0, status: 'Completed' },
  { id: 2, customer: 'Jane Smith', order_no: '002', amount: 200.0, status: 'Pending' },
  { id: 3, customer: 'Alice Johnson', order_no: '003', amount: 250.0, status: 'Canceled' },
];

const columns = [
  { field: 'customer', headerName: 'Customer', width: 150,flex:1 },
  { field: 'order_no', headerName: 'Order No', width: 150, flex: 0},
  { field: 'amount', headerName: 'Amount', width: 150, type: 'number',flex: 1},
  { field: 'status', headerName: 'Status', width: 150, flex:0},
];

const RecentOrders = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
  return (
    <Box

    backgroundColor={colors.primary[400]}
    sx={{
        width: {
          xs: '250px',  // 100% width on extra-small screens
          sm: '400px',   // 75% width on small screens
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