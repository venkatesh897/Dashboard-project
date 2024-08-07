import React from 'react';
import {useTheme, Box, Container, List, ListItem, ListItemAvatar, ListItemText, Avatar, Typography, Rating, Paper } from '@mui/material';
import {tokens} from '../../theme'
const ReviewList = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  const feedbacks = [
    {
      name: 'Jenny Wilson',
      rating: 4,
      feedback: 'The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.',
      avatarUrl: 'https://via.placeholder.com/40'
    },
    {
      name: 'Dianne Russell',
      rating: 5,
      feedback: 'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.',
      avatarUrl: 'https://via.placeholder.com/40'
    },
    {
      name: 'Devon Lane',
      rating: 4,
      feedback: 'Normally wings are wings, but theirs are lean, meaty, and tender; and the sauce is on point.',
      avatarUrl: 'https://via.placeholder.com/40'
    },
    {
        name: 'Devon Lane',
        rating: 4,
        feedback: 'Normally wings are wings, but theirs are lean, meaty, and tender; and the sauce is on point.',
        avatarUrl: 'https://via.placeholder.com/40'
      },

      {
        name: 'Devon Lane',
        rating: 4,
        feedback: 'Normally wings are wings, but theirs are lean, meaty, and tender; and the sauce is on point.',
        avatarUrl: 'https://via.placeholder.com/40'
      },
      {
        name: 'Devon Lane',
        rating: 4,
        feedback: 'Normally wings are wings, but theirs are lean, meaty, and tender; and the sauce is on point.',
        avatarUrl: 'https://via.placeholder.com/40'
      },
    // Add more feedbacks as needed
  ];

  return (
    <Container maxWidth="sm" >
      <Typography variant="h4" gutterBottom>
        Customer's Feedback
      </Typography>
      <Paper style={{ maxHeight: 200, overflow: 'auto' }} sx={{backgroundColor: colors.primary[400]}}>
        <List >
          {feedbacks.map((item, index) => (
            <ListItem key={index} alignItems="flex-start" sx={{ backgroundColor: colors.primary[400], borderRadius: 1 }}>
              <ListItemAvatar>
                <Avatar src={item.avatarUrl} />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Box display="grid" >
                    <Typography variant="h6">{item.name}</Typography>
                    <Rating value={item.rating} readOnly />
                  </Box>
                }
                secondary={
                  <Typography variant="body2">
                    {item.feedback}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default ReviewList;
