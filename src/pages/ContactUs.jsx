import { Box } from "@mui/material";
import PropTypes from 'prop-types';

const ContactUs = ({darkTheme}) => {
  return (
    <Box
      color={darkTheme?"white":"black"}
      sx={{ p: "20px" }}>
      <h2>About Us</h2>
      <p>Learn more about our company.</p>
    </Box>
  );
};

ContactUs.propTypes={
  darkTheme:PropTypes.bool.isRequired
};

export default ContactUs;
