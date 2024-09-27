import React from "react";
import { Box, Grid, Skeleton } from "@mui/material";
const ProductsDetailsSkeleton: React.FC = () => {
  return (
    <>
      <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
        <Box sx={{ padding: "30px" }}>
          <Skeleton
            sx={{ height: 250 }}
            animation="wave"
            variant="rectangular"
          />
        </Box>
      </Grid>
      <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
        <Skeleton variant="rectangular" width={500} height={125} />
      </Grid>
    </>
  );
};

export default ProductsDetailsSkeleton;
