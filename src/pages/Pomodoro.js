import React, { useState, useEffect } from 'react';
import { Box, Button, TextField, Typography, Grid, Container, Stack, LinearProgress } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function Pomodoro() {
  const theme = useTheme();
  const [timeLeft, setTimeLeft] = useState(1500); // 25 minutos en segundos

  useEffect(() => {
    let timer;
    if (timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const handleStart = () => {
    // Lógica para iniciar el temporizador
  };

  const handleStop = () => {
    // Lógica para detener el temporizador
  };

  const handleReset = () => {
    setTimeLeft(1500); // Reiniciar a 25 minutos
  };

  const progress = (1500 - timeLeft) / 1500 * 100;

  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 4 }}>
      <Box sx={{ flexGrow: 1, width: '100%' }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} md={6}>
            {/* Título */}
            <Typography variant="h3" gutterBottom align="center">
              Pomodoro
            </Typography>
            {/* Formulario */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '70%', margin: '0 auto' }}>
              <TextField
                label="Inicio"
                defaultValue="8:00 AM"
                variant="outlined"
                fullWidth
              />
              <TextField
                label="Fin"
                defaultValue="10:00 PM"
                variant="outlined"
                fullWidth
              />
              {/* Botones de control */}
              <Stack spacing={2} sx={{ marginTop: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleStart}
                  sx={{ width: '100%' }}
                >
                  Comenzar
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleStop}
                  sx={{ width: '100%' }}
                >
                  Finalizar
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={handleReset}
                  sx={{ width: '100%' }}
                >
                  Reiniciar
                </Button>
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            {/* Temporizador */}
            <Typography variant="h3" sx={{ color: theme.palette.primary.main, textAlign: 'center' }}>
              {formatTime(timeLeft)}
            </Typography>
            {/* Barra de progreso */}
            <Box sx={{ width: '80%', margin: '20px auto' }}>
              <LinearProgress variant="determinate" value={progress} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Pomodoro;