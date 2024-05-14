import { useState } from 'react';
import Navbar from './components/Navbar'
import { Box } from '@mui/material';

import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import NotFound from './pages/NotFound';
import Subscriptions from './pages/Subscriptions';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Register from './pages/Register';

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <Router>

      <Box
        sx={{
          backgroundColor: darkTheme ? '#242424' : 'white',
          transition:'background-color 0.2s ease-in-out'

        }}
      >
        <Box>
          <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        </Box>
        <Box sx={{ mt: 8, minHeight: "100vh" }}>
          <Routes>
            <Route path='/'  element={<Home darkTheme={darkTheme} />}/>
            <Route path="/contact" element={<ContactUs darkTheme={darkTheme}/>} />
            <Route path="/about" element={<AboutUs darkTheme={darkTheme}/>} />
            <Route path="/subscriptions" element={<Subscriptions darkTheme={darkTheme}/>} />
            <Route path="*" element={<NotFound darkTheme={darkTheme} />} />
            <Route path="/signin" element={<SignIn darkTheme={darkTheme}/>} />
            <Route path="/register" element={<Register darkTheme={darkTheme} />} />
          </Routes>
          </Box>
        <Footer />
      </Box>
    </Router>

  );
}

export default App;
