import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useTheme, useMediaQuery } from '@mui/material';
import { styled } from '@mui/system';


const CustomDataGrid = styled(DataGrid)(({ theme }) => ({
    '& .MuiDataGrid-columnHeaders': {
      borderBottom: 'none',
    },
    '& .MuiDataGrid-cell': {
      borderBottom: 'none',
      // Adjust padding as needed
    },
    '& .MuiDataGrid-columnHeader': {
       // Adjust padding as needed
    },
  }));

const ResponsiveDataGrid = ({ rows, columns }) => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  
    const getGridSize = () => {
      if (isSmallScreen) {
        return {
          height: 'auto',
          width: '250px',
        };
      }
      if (isMediumScreen) {
        return {
          height: 'auto',
          width: '100%',
        };
      }
      return {
        height: 'auto',
        width: '100%',
      };
    };
  
    const gridSize = getGridSize();
  
    return (
      <div style={{ height: gridSize.height, width: gridSize.width, overflow: 'auto' }}>
        <CustomDataGrid
          rows={rows}
          columns={columns}
          pageSize={isSmallScreen ? 2 : 10}
          rowsPerPageOptions={[5, 10]}
          disableSelectionOnClick
          autoHeight
          disableColumnMenu
          hideFooterPagination={isSmallScreen}
          columnSpacing={2} 
        />
      </div>
    );
  };
  
  export default ResponsiveDataGrid;