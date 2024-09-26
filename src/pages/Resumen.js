import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { LineChart } from '@mui/x-charts';

function Resumen() {
  // Datos mockeados para el resumen
  const totalRecordatorios = 42;
  const totalHorasPomodoro = 15;

  return (
    <Container>
      <Typography variant="h3" component="h2" gutterBottom align="center">
        Resumen
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexGrow: 1 }}>
          <LineChart
            xAxis={[
              {
                scaleType: 'time',
                data: [
                  new Date(2024, 0, 1),
                  new Date(2024, 0, 2),
                  new Date(2024, 0, 3),
                  new Date(2024, 0, 4),
                  new Date(2024, 0, 5),
                  new Date(2024, 0, 6),
                  new Date(2024, 0, 7),
                ],
                valueFormatter: (value) => value.toLocaleDateString(),
              },
            ]}
            series={[
              {
                data: [5, 8, 6, 10, 7, 12, 9],
              },
            ]}
            width={800}
            height={400}
          />
        </Box>
        <Box sx={{ width: '80%', textAlign: 'left', mt: 4 }}>
          <Typography variant="h6" component="p">
            Recordatorios Creados: {totalRecordatorios}
          </Typography>
          <Typography variant="h6" component="p">
            Horas Pomodoro: {totalHorasPomodoro}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default Resumen;