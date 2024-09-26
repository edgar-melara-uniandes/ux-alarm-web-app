import React from 'react';
import { Container, Typography, List, Box, Fab } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import ReminderItem from '../components/ReminderItem';

const todayReminders = [
  { id: 1, title: 'Reunión con el equipo de trabajo', time: '9:00 AM' },
  { id: 2, title: 'Clase de Matemáticas', time: '10:00 AM' },
  { id: 3, title: 'Estudio de Física', time: '11:00 AM' },
];

const tomorrowReminders = [
  { id: 4, title: 'Almuerzo con cliente', time: '12:00 PM' },
  { id: 5, title: 'Revisión de correos electrónicos', time: '1:00 PM' },
  { id: 6, title: 'Clase de Programación', time: '2:00 PM' },
  { id: 7, title: 'Reunión con el tutor', time: '3:00 PM' },
];

function Recordatorios() {
  const navigate = useNavigate();

  const handleAddReminder = () => {
    navigate('/crear-recordatorio');
  };

  return (
    <Container>
      <Typography variant="h3" component="h2" gutterBottom align="center">
        Recordatorios
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Typography variant="h5" component="h3" sx={{ color: 'tertiary.main', mr: 1 }}>
          Hoy
        </Typography>
        <Box sx={{ flexGrow: 1, height: 1, backgroundColor: 'tertiary.main' }} />
      </Box>
      <List>
        {todayReminders.map((reminder) => (
          <ReminderItem key={reminder.id} title={reminder.title} time={reminder.time} />
        ))}
      </List>
      <Box sx={{ display: 'flex', alignItems: 'center', mt: 4, mb: 2 }}>
        <Typography variant="h5" component="h3" sx={{ color: 'tertiary.main', mr: 1 }}>
          Mañana
        </Typography>
        <Box sx={{ flexGrow: 1, height: 1, backgroundColor: 'tertiary.main' }} />
      </Box>
      <List>
        {tomorrowReminders.map((reminder) => (
          <ReminderItem key={reminder.id} title={reminder.title} time={reminder.time} />
        ))}
      </List>
      <Fab
        color="primary"
        aria-label="add"
        sx={{ position: 'fixed', bottom: 16, right: 16, zIndex: 1000 }}
        onClick={handleAddReminder}
      >
        <AddIcon />
      </Fab>
    </Container>
  );
}

export default Recordatorios;