import React, { useEffect } from 'react';
import Reverb from './githubProjects/Reverb';
import Scheduler from './githubProjects/Scheduler';
import LightBNB from './githubProjects/LightBNB';
import Memorizo from './githubProjects/Memorizo';
import Tinyapp from './githubProjects/Tinyapp';
import SnekMultiplayer from './githubProjects/SnekMultiplayer';
import AdventOfCode2022 from './githubProjects/AdventOfCode2022';
// MUI components
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';


function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const theme = createTheme();



// Reverb
// LightBNB
// Memorizo
// Tinyapp
// SnekMultiplayer
// AdventOfCode2022


function Projects(props) {
  const items = [
      {
          name: 'Aya Bouchiha',
          description: 'Full Stack Web Developer',
      },
      {
          name: 'John Doe',
          description: 'Author',
      },
      {
          name: 'Pitsu Coma',
          description: 'Math Student',
      },
  ];

  return (
      <Carousel>
          {items.map((item, i) => (
              <Item key={i} {...item} />
          ))}
      </Carousel>
  );
}

const Item = ({name, description}) => {
  return (
      <Paper>
          <h2>{name}</h2>
          <p>{description}</p>
          <Button>more info...</Button>
      </Paper>
  );
};


export default function ProjectsOld() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Album layout
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Something short and leading about the collection below—its contents,
              the creator, etc. Make it short and sweet, but not too short so folks
              don&apos;t simply skip over it entirely.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Reverb
                    </Typography>
                    <Typography>
                      Description of Reverb project.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small"><a href="https://Robert812218:reverb-project.git">Github</a></Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}



