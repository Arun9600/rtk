import React from "react";
import { useState } from "react";
import { useAppDispatch } from "../features/hooks";
import type { productsDetailData, CartData } from "../App.types";
import { Box, Container, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ProductsListSkeleton from "./ProductsListSkeleton";
import { add } from "../features/CartSlice";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useGetAllProductsQuery } from "../features/ApiSlice";
import { useGetProductDetailQuery } from "../features/ApiSlice";
const Shop: React.FC = () => {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);
  const limit = 6;
  const [state, setState] = useState<number>(0);
  const navigate = useNavigate();
  const { data: datas, isLoading, error } = useGetAllProductsQuery();
  const { data } = useGetProductDetailQuery(state, { skip: !state });
  const productDetailEvent = (id: number): void => {
    setState(id);
  };

  const totalPages = Math.ceil((datas?.length ?? 0) / limit);

  const paginatedProducts = datas?.slice((page - 1) * limit, page * limit);

  const addToCart = (data: CartData): void => {
    void dispatch(add(data));
  };

  return (
    <>
      <Box sx={{ padding: "40px 0" }} className="section">
        <Container>
          <Grid container>
            <Grid
              size={{ xl: 12, lg: 12, md: 12, sm: 12, xs: 12 }}
              style={{ textAlign: "center", marginBottom: "20px" }}
            >
              <Typography variant="h4" className="home-title">
                Shop
              </Typography>
            </Grid>
            {isLoading ? (
              <ProductsListSkeleton />
            ) : (
              paginatedProducts?.map((item: productsDetailData) => (
                <Grid
                  size={{ xl: 4, lg: 4, md: 6, sm: 6, xs: 12 }}
                  key={item.id}
                  sx={{
                    padding: "0 15px",
                    marginBottom: "50px",
                  }}
                >
                  <Box className="box">
                    <Box>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="image"
                      />
                    </Box>
                    <Box sx={{ marginBottom: "10px" }}>
                      <Grid container>
                        <Grid>
                          <Typography
                            variant="h6"
                            style={{ fontSize: "14px", color: "#000" }}
                          >
                            {item.category.toUpperCase()}
                          </Typography>
                        </Grid>
                        <Grid
                          size={{ xl: 6, lg: 6, md: 6, sm: 6, xs: 6 }}
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
                        <Grid size={{ xl: 12, lg: 12, md: 12, sm: 12, xs: 12 }}>
                          <Link to={`/productdetail/${item.id}/${item.title}`}>
                            <Typography
                              variant="h2"
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "#000",
                                cursor: "pointer",
                                textDecoration: "none",
                                marginBottom: "15px",
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
                    <Grid
                      container
                      sx={{ alignItems: "center", marginTop: "20px" }}
                    >
                      <Grid size={{ xl: 6, lg: 6, md: 6, sm: 6, xs: 8 }}>
                        <Button
                          variant="outlined"
                          color="success"
                          onClick={() => {
                            productDetailEvent(item.id);
                            navigate(`/productdetail/${item.id}/${item.title}`);
                          }}
                        >
                          View Product
                        </Button>
                      </Grid>
                      <Grid
                        size={{ xl: 6, lg: 6, md: 6, sm: 6, xs: 4 }}
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

            <Box sx={{ textAlign: "center", width: "100%" }}>
              {/* Pagination Controls */}
              <Button
                disabled={page === 1}
                onClick={() => setPage((prev) => prev - 1)}
                variant="contained"
              >
                Previous
              </Button>
              <span style={{ margin: "0 15px" }}>
                Page {page} of {totalPages}
              </span>
              <Button
                disabled={page === totalPages}
                onClick={() => setPage((prev) => prev + 1)}
                variant="contained"
              >
                Next
              </Button>
            </Box>

            {error ? (
              <Grid
                size={{ xl: 12, lg: 12, md: 12, sm: 12, xs: 12 }}
                style={{ textAlign: "center", padding: "30px " }}
              >
                "Something Went Wrong"
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
