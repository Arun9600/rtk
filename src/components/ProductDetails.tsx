import React from "react";
import { useAppSelector, useAppDispatch } from "../features/hooks";
import { Typography, Box, Container, Grid, Button } from "@mui/material";
import type { productsDetailData } from "../App.types";
import { add } from "../features/CartSlice";
import ProductsDetailsSkeleton from "./ProductsDetailsSkeleton";
const ProductDetails: React.FC = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(
    (state) => state.productDetails.datas
  ) as productsDetailData;
  const loading = useAppSelector((state) => state.productDetails.loading);
  const error = useAppSelector((state) => state.productDetails.error);
  const addToCart = (data: productsDetailData): void => {
    void dispatch(add(data));
  };
  return (
    <>
      <Box sx={{ padding: "40px 0" }}>
        <Container>
          <Grid
            container
            style={{ alignItems: "center", justifyContent: "center" }}
          >
            {loading ? (
              <ProductsDetailsSkeleton />
            ) : (
              <>
                <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                  <img
                    src={data?.image}
                    alt={data?.title}
                    style={{
                      width: "350px",
                      height: "300px",
                      objectFit: "cover",
                    }}
                  />
                </Grid>
                <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
                  <Box sx={{ marginBottom: "15px" }}>
                    <Typography
                      variant="h4"
                      style={{ fontSize: "20px", fontWeight: "bold" }}
                    >
                      {data?.title}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="body1"
                      style={{
                        fontSize: "18px",
                        fontWeight: "bold",
                        marginBottom: "15px",
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
                      {data?.description}
                    </Typography>
                    <Typography
                      variant="h4"
                      style={{
                        marginBottom: "15px",
                        fontSize: "18px",
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
                      addToCart(data);
                    }}
                  >
                    Add to Cart
                  </Button>
                </Grid>
              </>
            )}
            {error ? (
              <Grid
                item
                xl={12}
                lg={12}
                md={12}
                sm={12}
                xs={12}
                style={{ textAlign: "center", padding: "30px " }}
              >
                {error}
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
