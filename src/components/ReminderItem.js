// src/components/ReminderItem.js
import React from 'react';
import { ListItem, ListItemAvatar, ListItemText, Avatar, Box, Typography } from '@mui/material';
import AlarmIcon from '@mui/icons-material/Alarm';

function ReminderItem({ title, time }) {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <AlarmIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={title} />
      <Box sx={{ marginLeft: 'auto' }}>
        <Typography variant="body2" color="textSecondary">
          {time}
        </Typography>
      </Box>
    </ListItem>
  );
}

export default ReminderItem;