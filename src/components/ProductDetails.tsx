import React from "react";
import { useAppDispatch } from "../features/hooks";
import { Typography, Box, Container, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import type { productsDetailData } from "../App.types";
import { add } from "../features/CartSlice";
import ProductsDetailsSkeleton from "./ProductsDetailsSkeleton";
import { useGetProductDetailQuery } from "../features/ApiSlice";
import { useParams } from "react-router-dom";
const ProductDetails: React.FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { data, isLoading, error } = useGetProductDetailQuery(
    parseInt(id ?? "0", 10)
  );
  const addToCart = (data: productsDetailData): void => {
    void dispatch(add(data));
  };
  return (
    <>
      <Box sx={{ padding: "40px 0" }} className="section">
        <Container>
          <Grid
            container
            style={{ alignItems: "center", justifyContent: "center" }}
          >
            {isLoading ? (
              <ProductsDetailsSkeleton />
            ) : (
              <>
                <Grid size={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 12 }}>
                  <Box sx={{ marginBottom: "30px" }}>
                    <Typography
                      variant="h4"
                      style={{ fontSize: "24px", fontWeight: "bold" }}
                    >
                      {data?.title}
                    </Typography>
                  </Box>
                </Grid>
                <Grid size={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 12 }}></Grid>
                <Grid size={{ xl: 3, lg: 3, md: 4, sm: 12, xs: 12 }}>
                  <img
                    src={data?.image}
                    alt={data?.title}
                    style={{
                      width: "250px",
                      objectFit: "contain",
                      marginBottom: "30px",
                      display: "block",
                    }}
                  />
                </Grid>
                <Grid size={{ xl: 9, lg: 9, md: 8, sm: 12, xs: 12 }}>
                  <Box>
                    <Typography
                      variant="body1"
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        marginBottom: "10px",
                      }}
                    >
                      Category: {data?.category?.toUpperCase()}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="body1"
                      style={{ marginBottom: "15px" }}
                    >
                      <strong>Description:</strong> <br /> {data?.description}
                    </Typography>
                    <Typography
                      variant="h4"
                      style={{
                        marginBottom: "20px",
                        fontSize: "20px",
                        fontWeight: "bold",
                      }}
                    >
                      Pirce: Rs.{data?.price}
                    </Typography>
                  </Box>
                  <Button
                    variant="outlined"
                    color="success"
                    onClick={() => {
                      if (data) {
                        addToCart(data);
                      }
                    }}
                  >
                    Add to Cart
                  </Button>
                </Grid>
              </>
            )}
            {error ? (
              <Grid
                size={{ xl: 12, lg: 12, md: 12, sm: 12, xs: 12 }}
                style={{ textAlign: "center", padding: "30px " }}
              >
                'Something Went Wrong'
              </Grid>
            ) : (
              ""
            )}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default ProductDetails;
