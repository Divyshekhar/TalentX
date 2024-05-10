import { Box, Grid, Typography } from "@mui/material";
import PropTypes from 'prop-types';

function Subscriptions({ darkTheme }) {
    return (
        <Box
            color={darkTheme ? "white" : "black"}
            sx={{
                paddingTop:"20px"
            }}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Typography>
                        This is the left side of the column of two
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
}
Subscriptions.propTypes={
    darkTheme: PropTypes.bool.isRequired
};

export default Subscriptions;