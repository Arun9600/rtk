import React from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import type { productsListDatas } from "../App.types";
import ProductsListSkeleton from "./ProductsListSkeleton";
import { Link } from "react-router-dom";
import {
  useGetLimitedProductsQuery,
  useGetProductDetailQuery,
} from "../features/ApiSlice";
const ProductsLimit: React.FC = () => {
  const [state, setState] = useState<number>(0);
  const { data, error, isLoading } = useGetLimitedProductsQuery();
  const { data: productDetail } = useGetProductDetailQuery(state, {
    skip: !state,
  });
  const productDetailEvent = (id: number) => {
    setState(id);
  };
  const navigate = useNavigate();
  return (
    <>
      <Box sx={{ padding: "40px 0" }}>
        <Container>
          <Grid container>
            <Grid
              item
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={12}
              style={{ textAlign: "center" }}
            >
              <Typography
                variant="h4"
                style={{
                  fontSize: "40px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Our Top Products
              </Typography>
            </Grid>
            {isLoading ? (
              <ProductsListSkeleton />
            ) : (
              data?.map((item: productsListDatas) => (
                <Grid item xl={4} lg={4} md={4} sm={6} xs={12} key={item.id}>
                  <Box sx={{ padding: "30px" }}>
                    <Box>
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{
                          width: "100%",
                          height: "300px",
                          marginBottom: "20px",
                          objectFit: "cover",
                        }}
                      />
                    </Box>
                    <Box sx={{ marginBottom: "10px" }}>
                      <Grid container>
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                          <Typography
                            variant="h6"
                            style={{ fontSize: "14px", color: "#000" }}
                          >
                            {item.category.toUpperCase()}
                          </Typography>
                        </Grid>
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                          <Typography
                            variant="h6"
                            style={{ fontSize: "14px", color: "#000" }}
                          >
                            Rs. {item.price}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                    <Box>
                      <Grid container>
                        <Grid item xl={12}>
                          <Link
                            to={`/productdetail/${item.id}/${item.title}`}
                            onClick={() => {
                              productDetailEvent(item.id);
                            }}
                          >
                            <Typography
                              variant="h2"
                              style={{
                                fontSize: "16px",
                                fontWeight: "bold",
                                color: "#000",
                                cursor: "pointer",
                              }}
                            >
                              {item.title}
                            </Typography>
                          </Link>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                </Grid>
              ))
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

            {data?.length === 0 ? (
              " "
            ) : (
              <>
                <Grid
                  item
                  xl={12}
                  md={12}
                  sm={12}
                  style={{ textAlign: "center" }}
                >
                  <Button
                    color="success"
                    variant="outlined"
                    onClick={() => {
                      navigate("/shop");
                    }}
                  >
                    View All Products
                  </Button>
                </Grid>
              </>
            )}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default ProductsLimit;
