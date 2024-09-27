import React from "react";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../features/hooks";
import { getProductsDataInList } from "../features/ProductsListSlice";
import type { productsListDatas, CartData } from "../App.types";
import { productDetailsFunc } from "../features/ProductsDetailsSlice";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ProductsListSkeleton from "./ProductsListSkeleton";
import { add } from "../features/CartSlice";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Shop: React.FC = () => {
  const dispatch = useAppDispatch();
  const datas = useAppSelector((state) => state.productsList.datas);
  const loading = useAppSelector((state) => state.productsList.loading);
  const error = useAppSelector((state) => state.productsList.error);
  useEffect(() => {
    void dispatch(getProductsDataInList());
  }, [dispatch]);
  const productDetailEvent = (productId: number): void => {
    void dispatch(productDetailsFunc(productId));
  };
  const addToCart = (data: CartData): void => {
    void dispatch(add(data));
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
              style={{ textAlign: "center", marginBottom: "20px" }}
            >
              <Typography
                variant="h4"
                style={{ fontSize: "40px", fontWeight: "bold" }}
              >
                Shop
              </Typography>
            </Grid>
            {loading ? (
              <ProductsListSkeleton />
            ) : (
              datas?.map((item: productsListDatas) => (
                <Grid item xl={4} lg={4} md={6} sm={6} xs={12} key={item.id}>
                  <Box style={{ padding: "30px" }}>
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
                        <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                          <Typography
                            variant="h6"
                            style={{ fontSize: "14px", color: "#000" }}
                          >
                            {item.category.toUpperCase()}
                          </Typography>
                        </Grid>
                        <Grid
                          item
                          xl={6}
                          lg={6}
                          md={6}
                          sm={6}
                          xs={6}
                          style={{ textAlign: "right" }}
                        >
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
                          <Link to={`/productdetail/${item.title}`}>
                            <Typography
                              variant="h2"
                              style={{
                                fontSize: "16px",
                                fontWeight: "bold",
                                marginBottom: "20px",
                                color: "#000",
                                textDecoration: "none",
                              }}
                              onClick={() => {
                                productDetailEvent(item.id);
                              }}
                            >
                              {item.title}
                            </Typography>
                          </Link>
                        </Grid>
                      </Grid>
                    </Box>
                    <Grid container>
                      <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                        <Button
                          variant="outlined"
                          color="success"
                          onClick={() => {
                            productDetailEvent(item.id);
                            navigate(`/productdetail/${item.title}`);
                          }}
                        >
                          View Product
                        </Button>
                      </Grid>
                      <Grid
                        item
                        xl={6}
                        lg={6}
                        md={6}
                        sm={6}
                        xs={6}
                        style={{ textAlign: "right" }}
                      >
                        <AddShoppingCartIcon
                          sx={{ color: "#2e7d32", cursor: "pointer" }}
                          onClick={() => {
                            addToCart(item);
                          }}
                        />
                      </Grid>
                    </Grid>
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

export default Shop;
