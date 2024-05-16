import { Typography, Link, Container, Grid } from "@mui/material";
import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <footer
      style={{
        // padding: "20px",
        marginTop: "auto",
        backgroundColor: "#424242",
        color: "#fff",
        width: '100vw',
        height: '30vh'
      }}
    >
      <Container maxWidth="100%">
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Typography variant="h4" align="left" paddingTop={'15px'}>
              CareerNed Pvt. Ltd.<br /> TalentX
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h4">
              Site Links
            </Typography>
            <Typography>
              <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About Us</NavLink></li>
                <li><NavLink to="/contact">Contact Us</NavLink></li>
                <li><NavLink to="/subscriptions">Subscription</NavLink></li>
              </ul>
            </Typography>
          </Grid>
          <Grid item xs={4}>

            <Typography variant="body2" align="center">
              © {new Date().getFullYear()}<br />All Rights Reserved.
              Made with ❤️ by <Link href="https://www.example.com/">Your Name</Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

export default Footer;