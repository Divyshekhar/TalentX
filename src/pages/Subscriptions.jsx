import { Box, Button, Grid, Typography } from "@mui/material";
import PropTypes from 'prop-types';
import month3 from '../assets/3month.jpeg';
import month6 from '../assets/6month.jpeg';
import month12 from '../assets/12month.jpeg';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";

function Subscriptions({ darkTheme }) {
    useEffect(() =>{
        Aos.init();
    })

    return (
        <Box
            color={darkTheme ? "white" : "black"}
            sx={{
                paddingTop: "100px",
                paddingLeft: '50px',
                paddingBottom: '10px',
                overflowX:'hidden'
            }}>
            <Grid container spacing={2}>
                <Grid item xs={6} data-aos='fade-right' data-aos-delay='200'>
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
                <Grid item xs={6} data-aos='fade-left' data-aos-delay='200'>
                    <img src={month3} alt="3monthlogo" width={'70%%'} height={'50%'} />
                </Grid>
                <Grid item xs={6} data-aos='fade-right' data-aos-delay='200'>
                    <img src={month6} alt="3monthlogo" width={'70%%'} height={'50%'} />
                </Grid>
                <Grid item xs={6} data-aos='fade-left' data-aos-delay='200'>
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
                <Grid item xs={6} data-aos='fade-right' data-aos-delay='200'>
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
                <Grid item xs={6} data-aos='fade-left' data-aos-delay='200'>
                    <img src={month6} alt="3monthlogo" width={'70%%'} height={'50%'} />
                </Grid>
                <Grid item xs={6} data-aos='fade-right' data-aos-delay='200'>
                    <img src={month12} alt="3monthlogo" width={'70%%'} height={'50%'} />
                </Grid>
                <Grid item xs={6} data-aos='fade-left' data-aos-delay='200'>
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
        </Box>
    );
}
Subscriptions.propTypes = {
    darkTheme: PropTypes.bool.isRequired
};

export default Subscriptions;