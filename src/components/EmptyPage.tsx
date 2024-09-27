import React from "react";
import { Box, Typography } from "@mui/material";
const EmptyPage: React.FC = () => {
  return (
    <>
      <Box sx={{ textAlign: "center", padding: "40px 0" }}>
        <Typography variant="h4">Page not Found</Typography>
      </Box>
    </>
  );
};

export default EmptyPage;
