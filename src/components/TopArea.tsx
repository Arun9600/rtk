import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Menu from "./Menu";
const TopArea: React.FC = () => {
  return (
    <>
      <Box
        sx={{ backgroundColor: "#000", padding: "10px 0" }}
        className="top-area"
      >
        <Container>
          <Grid
            container
            style={{ alignItems: "center", justifyContent: "center" }}
          >
            <Grid size={{ xl: 6, lg: 6, md: 6, sm: 6, xs: 12 }}>
              <Typography
                variant="body1"
                style={{
                  color: "#fff",
                  fontFamily: "Playwrite GB J, cursive",
                  fontSize: "35px",
                }}
              >
                eShop
              </Typography>
            </Grid>
            <Grid
              size={{ xl: 6, lg: 6, md: 6, sm: 6, xs: 12 }}
              className="menu"
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
