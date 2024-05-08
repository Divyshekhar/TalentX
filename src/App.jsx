import { useState } from 'react';
import Navbar from './components/Navbar'
import { Box } from '@mui/material';
function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <Box
      height={'100vh'}
      width={'100vw'}
    sx={{backgroundColor:darkTheme?'#242424':'white'}}
    >

      <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
    </Box>
  );
}

export default App;
