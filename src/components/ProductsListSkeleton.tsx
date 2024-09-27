import React from "react";
import { Box, Grid, Skeleton } from "@mui/material";
const ProductsListSkeleton: React.FC = () => {
  return (
    <>
      {Array.from({ length: 6 }).map((item, index) => (
        <Grid item xl={4} lg={4} md={4} sm={6} xs={12} key={index}>
          <Box sx={{ padding: "30px" }}>
            <Skeleton
              sx={{ height: 190 }}
              animation="wave"
              variant="rectangular"
            />
          </Box>
        </Grid>
      ))}
    </>
  );
};

export default ProductsListSkeleton;
