import { Box, Button, Grid, Tooltip, Typography } from "@mui/material";
import PropTypes from 'prop-types';
import month3 from '../assets/3month.jpeg';
import month6 from '../assets/6month.jpeg';
import month9 from '../assets/9month.jpeg';
import month12 from '../assets/12month.jpeg';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect, useRef, useState } from "react";

function Subscriptions({ darkTheme }) {
    const topSectionRef = useRef(null);
    const [showScrollButton, setShowScrollButton] = useState(false);



    useEffect(() => {
        Aos.init({
            easing: 'ease-in-out'
        });
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

    const handleScrollToTop = () => {
        topSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }



    return (
        <Box ref={topSectionRef}
            color={darkTheme ? "white" : "black"}
            sx={{
                paddingTop: "100px",
                paddingLeft: '50px',
                paddingBottom: '10px',
                overflowX: 'hidden'
            }}>
            <Grid container spacing={2}>
                <Grid item xs={6} data-aos='fade-right' data-aos-delay='100' >
                    <Typography sx={{ fontSize: '20px' }}>
                        This is the left side of the column of two
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />Quos obcaecati harum quas tempora beatae error illum dignissimos eligendi saepe iste <br />facere, omnis neque voluptatem unde fugit,<br /> quaerat quasi repellat vitae!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa veritatis officia voluptatibus repellat voluptates, minus voluptate iste possimus, voluptatem quaerat, sequi enim temporibus impedit facere amet rem neque suscipit maxime.
                    </Typography>
                    <br />
                    <br />

                    <Button
                        variant="contained"
                        color={darkTheme ? "secondary" : "primary"}
                        sx={{
                            transition: "opacity 0.3s ease-in-out",
                            borderRadius: "25px",
                            padding: "15px 15px",
                            fontSize: "16px",
                            '&:focus': { outline: 'none' }
                        }}
                    >
                        Check it out !
                    </Button>
                </Grid>
                <Grid item xs={6} data-aos='fade-left' data-aos-delay='100'>
                    <img src={month3} alt="3monthlogo" width={'70%%'} height={'50%'} />
                </Grid>
                <Grid item xs={6} data-aos='fade-right' data-aos-delay='100' >
                    <img src={month6} alt="6monthlogo" width={'70%%'} height={'50%'} />
                </Grid>
                <Grid item xs={6} data-aos='fade-left' data-aos-delay='100'>
                    <Typography sx={{ fontSize: '20px' }}>
                        This is the left side of the column of two
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />Quos obcaecati harum quas tempora beatae error illum dignissimos eligendi saepe iste <br />facere, omnis neque voluptatem unde fugit,<br /> quaerat quasi repellat vitae!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa veritatis officia voluptatibus repellat voluptates, minus voluptate iste possimus, voluptatem quaerat, sequi enim temporibus impedit facere amet rem neque suscipit maxime.
                    </Typography>
                    <br />
                    <br />

                    <Button
                        variant="contained"
                        color={darkTheme ? "secondary" : "primary"}
                        sx={{
                            transition: "opacity 0.3s ease-in-out",
                            borderRadius: "25px",
                            padding: "15px 15px",
                            fontSize: "16px",
                            '&:focus': { outline: 'none' }
                        }}
                    >
                        Check it out !
                    </Button>
                </Grid>
                <Grid item xs={6} data-aos='fade-right' data-aos-delay='100'>
                    <Typography sx={{ fontSize: '20px' }}>
                        This is the left side of the column of two
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />Quos obcaecati harum quas tempora beatae error illum dignissimos eligendi saepe iste <br />facere, omnis neque voluptatem unde fugit,<br /> quaerat quasi repellat vitae!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa veritatis officia voluptatibus repellat voluptates, minus voluptate iste possimus, voluptatem quaerat, sequi enim temporibus impedit facere amet rem neque suscipit maxime.
                    </Typography>
                    <br />
                    <br />

                    <Button
                        variant="contained"
                        color={darkTheme ? "secondary" : "primary"}
                        sx={{
                            transition: "opacity 0.3s ease-in-out",
                            borderRadius: "25px",
                            padding: "15px 15px",
                            fontSize: "16px",
                            '&:focus': { outline: 'none' }
                        }}
                    >
                        Check it out !
                    </Button>

                </Grid>
                <Grid item xs={6} data-aos='fade-left' data-aos-delay='100'>
                    <img src={month9} alt="9monthlogo" width={'70%%'} height={'50%'} />
                </Grid>
                <Grid item xs={6} data-aos='fade-right' data-aos-delay='100'>
                    <img src={month12} alt="12monthlogo" width={'70%%'} height={'50%'} />
                </Grid>
                <Grid item xs={6} data-aos='fade-left' data-aos-delay='100'>
                    <Typography sx={{ fontSize: '20px' }}>
                        This is the left side of the column of two
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />Quos obcaecati harum quas tempora beatae error illum dignissimos eligendi saepe iste <br />facere, omnis neque voluptatem unde fugit,<br /> quaerat quasi repellat vitae!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa veritatis officia voluptatibus repellat voluptates, minus voluptate iste possimus, voluptatem quaerat, sequi enim temporibus impedit facere amet rem neque suscipit maxime.
                    </Typography>
                    <br />
                    <br />

                    <Button
                        variant="contained"
                        color={darkTheme ? "secondary" : "primary"}
                        sx={{
                            transition: "opacity 0.3s ease-in-out",
                            borderRadius: "25px",
                            padding: "15px 15px",
                            fontSize: "16px",
                            '&:focus': { outline: 'none' }
                        }}
                    >
                        Check it out !
                    </Button>
                </Grid>
            </Grid>
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
    );
}
Subscriptions.propTypes = {
    darkTheme: PropTypes.bool.isRequired
};

export default Subscriptions;