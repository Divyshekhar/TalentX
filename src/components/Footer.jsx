import { Typography, Link, Container } from "@mui/material";
function Footer(){
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
        <Typography variant="h4" align="center">
          CareerNed Pvt. Ltd.<br /> TalentX <br />
          </Typography>
          <Typography align="center">
          © {new Date().getFullYear()}<br/>All Rights Reserved.
        </Typography>
        <Typography variant="body2" align="center">
          Made with ❤️ by <Link href="https://www.example.com/">Your Name</Link>
        </Typography>
      </Container>
    </footer>
  );
}

export default Footer;