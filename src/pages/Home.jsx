import { Box, Button, Grid, Typography, Tooltip} from "@mui/material";
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import PropTypes from "prop-types";
import backgroundImg from '../assets/back2.jpeg'
import webLight from '../assets/web light.png'
import { useRef, useState, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'

function Home({ darkTheme }) {

  const topSectionRef = useRef(null);
  const bottomSectionRef = useRef(null);
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {

      Aos.init();
      window.addEventListener('load', Aos.refresh);


    const handleScroll = () => {
      if (window.pageYOffset > 170) { // Change 100 to the desired scroll position
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToBottom = () => {
    bottomSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleScrollToTop = () => {
    topSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <Box
        sx={{overflowX:'hidden'}} //to remove the overflow due to AOS animation
      >
        <Box ref={topSectionRef}
          sx={{
            backgroundImage: `url(${backgroundImg})`,
            backgroundRepeat: "no-repeat",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "left",
            backgroundPositionX: "70%",
            backgroundPositionY: "30%",
            
          }}
        >
          <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              variant="h2"
              sx={{
                paddingLeft: '50px',
                pt: '60px',
                color: darkTheme?'white':'black',
                lineHeight: "1.5",
                fontFamily: "Roboto Mono",
                fontWeight: "Bold",
              }}
              data-aos='fade-right'
            >
              Meet TalentX
            </Typography>
            <Typography
              variant="h5"
              sx={{color: darkTheme?'white':'black', 
                  lineHeight: "1.5", 
                  paddingLeft: '50px' 
              }} data-aos='fade-right'>
              Get the most skilled workforce at the most affordable pricing
              <br />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br /> Nam repellat, facilis deserunt aliquam vero, <br />saepe fuga nisi esse similique vel libero ipsum, labore hic <br />sint accusamus impedit provident sed illo?
            </Typography>
            <Box
              paddingTop='50px'
              paddingLeft='150px'
            >
              <Button
                onClick={handleScrollToBottom}
                variant="contained"
                color={darkTheme ? "secondary" : "primary"}
                sx={{
                  borderRadius: "25px",
                  padding: "15px 30px",
                  fontSize: "16px",
                  '&:focus': { outline: 'none' }
                }}
              >
                Scroll Down
              </Button>
            </Box>
          </Grid>
        </Grid>
        </Box>
        <Box
          paddingTop='60px'
          ref={bottomSectionRef}
          color={darkTheme ? "white" : "black"}
        >
          <Grid container spacing={2}>
            <Grid item xs={6} data-aos='fade-right' data-aos-delay='200'>
            <img
                  src={webLight}
                  alt="Your Image"
                  style={{ width: "78%", height: '86%', paddingBottom:0}}
                  />
            </Grid>
            <Grid item xs={6} data-aos='fade-left' data-aos-delay='200'>
            
              <h1>Web Development</h1>
              <Typography>
                  this is the details about the web development field of operation and its working
              </Typography>
            </Grid>
            <Grid item xs={6} data-aos='fade-right' data-aos-delay='200'>
              <h1>Description 2  / image Will be here</h1>
              <Typography>
                this is the details about the title one which will go here below the title of the thingy thing thing
              </Typography>
            </Grid>
            <Grid item xs={6} data-aos='fade-left' data-aos-delay='200'>
              <h1>Title 2  / image Will be here</h1>
              <Typography>
                this is the details about the title one which will go here below the title of the thingy thing thing
              </Typography>
            </Grid>
          </Grid>

          <br />
          {showScrollButton &&(
          <Tooltip title = 'Scroll to Top'>
              <Button
                onClick={handleScrollToTop}
                variant="contained"
                color={darkTheme ? "secondary" : "primary"}
                sx={{
                  transition: "opacity 0.3s ease-in-out",
                  borderRadius: "25px",
                  padding: "15px 0px",
                  fontSize: "16px",
                  position: "fixed",
                  bottom: "20px",
                  right: "20px",
                  opacity: 1,
                  zIndex: "999", // Ensures the button stays on top
                  '&:focus': { outline: 'none' }
                }}
              >
                  <ArrowUpwardRoundedIcon/>

              </Button>
            </Tooltip>
          )}

        </Box>
        
      </Box>
    </>
  );
}

Home.propTypes = {
  darkTheme: PropTypes.bool.isRequired,
};

export default Home;
