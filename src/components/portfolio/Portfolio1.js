import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
  media: {
    height: '512px'
  },
}));

export default function Portfolio(props) {
  const classes = useStyles();
  
  const content = {
    'header': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    'description': 'But in a much more real sense, I had no idea what to do. No, no, no. I don\'t wanna hear moaning. This is a good day.',
    'image1': 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
    'image2': 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
    'image3': 'https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    ...props.content
  };

  return (
    <section>
      <Box pt={8} pb={10} textAlign="center">
        <Grid container spacing={4}>
          <Grid item xs={2} md={3}>
            <Card>
              <CardActionArea href="#">
                <CardMedia className={classes.media} image={content['image1']} />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={8} md={6}>
            <Card>
              <CardActionArea href="#">
                <CardMedia className={classes.media} image={content['image2']} />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={2} md={3}>
            <Card>
              <CardActionArea href="#">
                <CardMedia className={classes.media} image={content['image3']} />
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
        <Container maxWidth="sm">
          <Box mt={4}>
            <Typography variant="h6" component="h3" gutterBottom={true}>{content['header']}</Typography>
            <Typography variant="subtitle1" color="textSecondary">{content['description']}</Typography>
          </Box>
        </Container>
    </Box>
    </section>
  );
}