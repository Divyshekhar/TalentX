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
        height: '50vh'
      }}
    >
      <Container maxWidth="100%">
        <Typography variant="body1" align="left">
          © {new Date().getFullYear()} TalentX <br />
          All Rights Reserved.
        </Typography>
        <Typography variant="body2" align="left">
          Made with ❤️ by <Link href="https://www.example.com/">Your Name</Link>
        </Typography>
      </Container>
    </footer>
  );
}

export default Footer;