import { useState } from 'react';
import Navbar from './components/Navbar'
import { Box } from '@mui/material';

function App() {
  const [darkTheme, setDarkTheme] = useState(false);



  return (
    <Box
      sx={{ backgroundColor: darkTheme ? 'red' : 'yellow' }}
    >

      <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <h1>hi</h1>

    </Box>
  );
}

export default App;
