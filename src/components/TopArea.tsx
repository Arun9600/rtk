import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Menu from "./Menu";
const TopArea: React.FC = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#000", padding: "10px 0" }}>
        <Container>
          <Grid
            container
            style={{ alignItems: "center", justifyContent: "center" }}
          >
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
              <Typography variant="body1" style={{ color: "#fff" }}>
                React with TypeScript
              </Typography>
            </Grid>
            <Grid
              item
              xl={6}
              lg={6}
              md={6}
              sm={12}
              xs={12}
              style={{ textAlign: "center" }}
            >
              <Menu />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default TopArea;
