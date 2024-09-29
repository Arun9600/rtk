import React from "react";
import { Box, Skeleton } from "@mui/material";
import Grid from "@mui/material/Grid2";
const ProductsListSkeleton: React.FC = () => {
  return (
    <>
      {Array.from({ length: 6 }).map((item, index) => (
        <Grid size={{ xl: 4, lg: 4, md: 4, sm: 12, xs: 12 }} key={index}>
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
