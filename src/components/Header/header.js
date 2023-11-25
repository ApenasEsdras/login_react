import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";


//import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  const { signout } = useAuth();
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Gerenciamento de Projetos
          </Typography>
          <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
            Sair
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;