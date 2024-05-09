import { Box } from "@mui/material";
import PropTypes from 'prop-types';
function AboutUs({darkTheme}){
  return (
    <Box 
        display={"flex"}
        justifyContent={"center"}
        sx={{ p: "20px", 
            color: darkTheme ? "white":"black"

        }}>
        <h2>About Us</h2>
        
        <p>Learn more about the company</p>
    </Box>
  );
}
AboutUs.propTypes={
    darkTheme:PropTypes.bool.isRequired
};

export default AboutUs;
