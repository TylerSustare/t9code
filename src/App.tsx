import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import { Paper, Box, Card, Button } from '@material-ui/core';
import { red, blue } from '@material-ui/core/colors';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const theme = createMuiTheme({
    palette: {
      type: isDarkMode ? 'dark' : 'light',
      primary: isDarkMode ? purple : blue,
      secondary: isDarkMode ? green : red,
      background: { default: isDarkMode ? '#333' : '#eee' },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor={theme.palette.background.default} minHeight="100vh">
        <Box display="flex" alignItems="center" justifyContent="center">
          <Card>
            <Paper>
              Edit <code>src/App.tsx</code> and save to reload.
            </Paper>
          </Card>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center">
          <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Button variant="contained" color="primary" onClick={() => setIsDarkMode(!isDarkMode)}>
            theme
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
