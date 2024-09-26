import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Recordatorios from './pages/Recordatorios';
import Pomodoro from './pages/Pomodoro';
import Resumen from './pages/Resumen';
import CrearRecordatorio from './pages/CrearRecordatorio';

const drawerWidth = 240;

function App() {
  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <NavBar />
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, width: `calc(100% - ${drawerWidth}px)` }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recordatorios" element={<Recordatorios />} />
            <Route path="/pomodoro" element={<Pomodoro />} />
            <Route path="/resumen" element={<Resumen />} />
            <Route path="/crear-recordatorio" element={<CrearRecordatorio />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;