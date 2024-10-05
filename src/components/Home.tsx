import React from "react";
import { Box } from "@mui/material";
import ProductsLimit from "./ProductsLimit";
const Home: React.FC = () => {
  return (
    <>
      <Box
        sx={{
          padding: "40px 0",
        }}
        className="section"
      >
        <ProductsLimit />
      </Box>
    </>
  );
};

export default Home;
