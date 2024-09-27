import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { YearFunc } from "../utils";
const Footer: React.FC = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#000", padding: "10px 0" }}>
        <Container>
          <Grid container>
            <Grid
              item
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={12}
              sx={{ textAlign: "center" }}
            >
              <Typography
                variant="body1"
                style={{ color: "#fff", fontSize: "14px" }}
              >
                Copyrights &copy; {YearFunc()} Designed and Developed by Arun
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
