// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6D8152', // P-40
      light: '#9EB77F', // P-90
      dark: '#354425',  // P-10
      contrastText: '#FFFFFF', // P-100 (On Primary)
    },
    secondary: {
      main: '#707B65', // S-40
      light: '#99A489', // S-90
      dark: '#3A4131',  // S-10
      contrastText: '#FFFFFF', // S-100 (On Secondary)
    },
    tertiary: {
      main: '#9A6537', // T-40
      light: '#DBB89D', // T-90
      dark: '#4E2F14',  // T-10
      contrastText: '#FFFFFF', // T-100 (On Tertiary)
    },
    error: {
      main: '#C83737', // E-40
      light: '#F8CCCC', // E-90
      dark: '#570A0A',  // E-10
      contrastText: '#FFFFFF', // E-100 (On Error)
    },
    background: {
      default: '#E8E6DB', // N-98 (Surface)
      paper: '#F1F0EB',   // N-98 (Surface Bright)
    },
    text: {
      primary: '#2D2D2D', // N-10 (On Surface)
      secondary: '#5F5F5F', // N-30 (On Surface Variant)
      disabled: '#A6A6A6',  // N-87 (Surface Dim)
    },
    surface: {
      main: '#E8E6DB', // N-98
      dark: '#D6D3C6', // N-96 (Surface Container Low)
      light: '#F5F4EF', // N-100 (Surface Container Lowest)
    },
    divider: '#8A8A8A',
    primaryContainer: {
      main: '#a5d6a7', // Cambia según tu paleta
    },
    onPrimaryContainer: {
      main: '#1b5e20', // Cambia según tu paleta
    }, // NV-50 (Outline Variant)
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8, // Ajuste de borde redondeado
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          color: '#6D8152', // Color primario
          textAlign: 'center', // Centrar texto
        },
        h2: {
          color: '#6D8152', // Color primario
          textAlign: 'center', // Centrar texto
        },
        h3: {
          color: '#6D8152', // Color primario
          textAlign: 'center', // Centrar texto
        },
        h4: {
          color: '#6D8152', // Color primario
          textAlign: 'center', // Centrar texto
        },
        h5: {
          color: '#6D8152', // Color primario
          textAlign: 'center', // Centrar texto
        },
        h6: {
          color: '#6D8152', // Color primario
          textAlign: 'center', // Centrar texto
        },
      },
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);