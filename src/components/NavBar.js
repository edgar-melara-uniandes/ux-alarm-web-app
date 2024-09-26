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
            borderRadius: '16px', // Agrega bordes redondeados
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: theme.palette.surface.main,
              opacity: 0.8,
              borderRadius: '16px', // Asegura que el overlay también tenga bordes redondeados
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
        <List>
          {menuItems.map((item) => (
            <ListItem button component={Link} to={item.path} key={item.text}>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
    </Box>
  );
}

export default NavBar;