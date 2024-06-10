// Styles
import "./App.css";

// React
import React, { useState } from "react";

// Components
import QrReader from "./QrReader";
import { AppBar, Box, Button, Container, Grid, Paper, Toolbar, Typography } from "@mui/material";

function App() {
  const [openQr, setOpenQr] = useState<boolean>(true);
  const [nissValue, setNissValue] = useState<string>(true);
  const defaultTeam = "Tempo's";

  return (
    <div>

        <AppBar position="absolute" open={false}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              LWT Scanner
            </Typography>
          </Toolbar>
      </AppBar>

      <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
      >
        
        <Toolbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                {openQr && <>
        <input type="text" inputMode="numeric" pattern="\d*" placeholder="niss" 
          onChange={e => setNissValue(e.target.value)} />

        <button onClick={() => setOpenQr(!openQr)}>-&gt;</button>
        <QrReader />
      </>}
      {!openQr && <>
        <button onClick={() => setOpenQr(!openQr)}>&lt;-</button>
        <h2>{nissValue}</h2>
        <h2>{ defaultTeam}</h2>
        <div className="wrapper">
          <button className="teamA">A</button>
          <button className="tempos default">Tempo's</button>
          <button className="sportivos">Sportivo's</button>
          <button className="cyclos">Cyclo's</button>
          <button className="toeristen">Toeristen</button>
          <button className="dploug">D-Ploeg</button>
          <button className="trappers">Trappers</button>
          <button className="moderatos">Moderato's</button>
        </div>
                  <Button variant="contained" sx={ {marginTop:"10px"}} onClick={() => setOpenQr(!openQr)}>Valideren</Button>
      
      </>}
            </Paper>
              </Grid>
            </Grid>
          </Container>
</Box>
      

    </div>
  );
}

export default App;
