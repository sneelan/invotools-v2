import React from 'react';
import { Container, Paper, Typography,Box,Grid  } from '@mui/material';
import './scss/style.css'; // Import the SCSS file

function App() {
  return (
      <Container maxWidth="xl">
        <Box padding={2}>
            <Paper className="invoice-wrap" elevation={3} >
            <Box padding={2}>
              <Typography variant="h6" className="widget-title">
                Widget 1
              </Typography>
              </Box>
            </Paper>

            
            <div className="invoice-wrap">
            <Grid container spacing={2}>
                <Grid item xs={6}>
                <Paper className="shadow invoice-wrap" elevation={3}>
                  <Box padding={2} marginTop={2}>
                  <Typography variant="h6" className="widget-title">
                    Widget 1
                  </Typography>
                  </Box>
                </Paper>
                </Grid>
                <Grid item xs={6}>
                <Paper className="shadow invoice-wrap" elevation={3}>
                <Box padding={2} marginTop={2}>
                  <Typography variant="h6" className="widget-title">
                    Widget 2
                  </Typography>
                  </Box>
                  </Paper>
                </Grid>
              </Grid>
              </div>
            


        </Box>
      </Container>
  );
} 

export default App;