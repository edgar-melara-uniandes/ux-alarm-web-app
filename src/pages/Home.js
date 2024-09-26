import React from 'react';
import { Container, Typography, List } from '@mui/material';
import ReminderItem from '../components/ReminderItem';

const reminders = [
  { id: 1, title: 'Reunión con el equipo de trabajo', time: '9:00 AM' },
  { id: 2, title: 'Clase de Matemáticas', time: '10:00 AM' },
  { id: 3, title: 'Estudio de Física', time: '11:00 AM' },
  { id: 4, title: 'Almuerzo', time: '12:00 PM' },
  { id: 5, title: 'Revisión de correos electrónicos', time: '1:00 PM' },
  { id: 6, title: 'Clase de Programación', time: '2:00 PM' },
  { id: 7, title: 'Reunión con el tutor', time: '3:00 PM' },
  { id: 8, title: 'Estudio de Química', time: '4:00 PM' },
  { id: 9, title: 'Trabajo en proyecto de grupo', time: '5:00 PM' },
  { id: 10, title: 'Cena', time: '6:00 PM' },
  { id: 11, title: 'Lectura de libros', time: '7:00 PM' },
  { id: 12, title: 'Preparación para el examen', time: '8:00 PM' },
];

function Home() {
  return (
    <Container>
      <Typography variant="h3" component="h2" gutterBottom align="center">
        Próximos Recordatorios
      </Typography>
      <List>
        {reminders.map((reminder) => (
          <ReminderItem key={reminder.id} title={reminder.title} time={reminder.time} />
        ))}
      </List>
    </Container>
  );
}

export default Home;