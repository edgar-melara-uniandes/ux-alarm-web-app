// src/components/NavBar.js
import React from 'react';
import { Drawer, List, ListItem, ListItemText, CssBaseline, Box, Typography, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import texture from '../assets/texture.jpg'; // Importa la imagen de fondo

const drawerWidth = 240;

function NavBar() {
  const theme = useTheme();

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'Recordatorios', path: '/recordatorios' },
    { text: 'Pomodoro', path: '/pomodoro' },
    { text: 'Resumen', path: '/resumen' },
  ];

  const user = { name: 'Usuario' }; // Usuario mockeado

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: theme.palette.surface.main, // Cambia el color de fondo del Drawer
            backgroundImage: `url(${texture})`, // Aplica la imagen de fondo
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: theme.palette.surface.main,
              opacity: 0.8,
            },
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Box sx={{ p: 2, textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <Typography variant="h6" gutterBottom>
            Bienvenido, {user.name}
          </Typography>
        </Box>
        <List sx={{ position: 'relative', zIndex: 1 }}>
          {menuItems.map((item) => (
            <ListItem button key={item.text} component={Link} to={item.path}>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, width: `calc(100% - ${drawerWidth}px)` }}
      >
        {/* Aquí puedes agregar el contenido principal de tu aplicación */}
      </Box>
    </Box>
  );
}

export default NavBar;