import { Fragment } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

const NavBar = (props) => {
  return(
    <Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar sx={{ backgroundColor: `#113264`, }} position="static">
          <Toolbar sx={{ display: `flex`, pt: 1, pb: 1, pl: `8px !important` }}>
            {props.children}
          </Toolbar>
        </AppBar>
      </Box>
    </Fragment>
  );
}

export default NavBar;