import React, { useState } from 'react';
import { Container, Typography, TextField, Switch, FormControlLabel, Button, Box } from '@mui/material';

function CrearRecordatorio() {
  const [nombre, setNombre] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [notas, setNotas] = useState('');
  const [modoSilencio, setModoSilencio] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes manejar el envío del formulario
    console.log({ nombre, fecha, hora, notas, modoSilencio });
  };

  return (
    <Container>
      <Typography variant="h3" component="h2" gutterBottom align="center">
        Crear Recordatorio
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3, width: '50%', mx: 'auto' }}>
        <TextField
          fullWidth
          label="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          margin="normal"
          required
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
          <TextField
            label="Fecha"
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            required
            sx={{ flex: 1 }}
          />
          <TextField
            label="Hora"
            type="time"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            required
            sx={{ flex: 1 }}
          />
        </Box>
        <TextField
          fullWidth
          label="Notas"
          value={notas}
          onChange={(e) => setNotas(e.target.value)}
          margin="normal"
          multiline
          rows={4}
        />
        <FormControlLabel
          control={
            <Switch
              checked={modoSilencio}
              onChange={(e) => setModoSilencio(e.target.checked)}
              color="primary"
            />
          }
          label="Modo Silencio"
          sx={{ mt: 2 }}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 3 }}>
          Crear Recordatorio
        </Button>
      </Box>
    </Container>
  );
}

export default CrearRecordatorio;