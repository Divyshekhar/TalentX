import { Box } from "@mui/material";
import PropTypes from 'prop-types';

function Register({darkTheme}){
    return(
        <>
            <Box
                color={darkTheme?'white':'black'}
                transition='color 0.3s ease-in-out'
            >
            <h1>
                Hewoo register
            </h1>
            </Box>
        </>
    );
}
Register.propTypes={
    darkTheme: PropTypes.bool.isRequired

};

export default Register;