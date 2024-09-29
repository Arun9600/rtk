import React from "react";
import { useAppDispatch } from "../features/hooks";
import { Typography, Box, Container, Grid, Button } from "@mui/material";
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
      <Box sx={{ padding: "40px 0" }}>
        <Container>
          <Grid
            container
            style={{ alignItems: "center", justifyContent: "center" }}
          >
            {isLoading ? (
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
                item
                xl={12}
                lg={12}
                md={12}
                sm={12}
                xs={12}
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
