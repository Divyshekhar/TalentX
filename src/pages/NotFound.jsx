import { Box } from "@mui/material";
import PropTypes from 'prop-types';
function NotFound({darkTheme}){
  return (
    <Box 
        display={"flex"}
        justifyContent={"center"}
        sx={{ p: "20px", 
            color: darkTheme ? "white":"black",
            transition: "color 0.3s ease-in-out"

        }}>
        <h2>404 Page Not Found</h2>
    </Box>
  );
}
NotFound.propTypes={
    darkTheme:PropTypes.bool.isRequired
};

export default NotFound;
