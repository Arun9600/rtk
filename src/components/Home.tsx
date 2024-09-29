import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import ProductsLimit from "./ProductsLimit";
import ProductsCategoriesSkeleton from "./ProductsCategoriesSkeleton";
import { useGetProductCategoryQuery } from "../features/ApiSlice";
const Home: React.FC = () => {
  const { data, error, isLoading } = useGetProductCategoryQuery();
  return (
    <>
      <Box sx={{ padding: "40px 0", backgroundColor: "#f1f1f1" }}>
        <Container>
          <Grid container>
            <Grid
              item
              xl={12}
              md={12}
              xs={12}
              style={{
                textAlign: "center",
                marginBottom: "30px",
              }}
            >
              <Typography variant="h4" className="home-title">
                Our Products Categories
              </Typography>
            </Grid>
            {isLoading ? (
              <ProductsCategoriesSkeleton />
            ) : (
              data?.map((item: string) => (
                <Grid
                  item
                  xl={3}
                  lg={3}
                  md={6}
                  sm={6}
                  xs={12}
                  key={item}
                  style={{
                    textAlign: "center",
                    padding: "0 15px",
                    marginBottom: "20px",
                  }}
                >
                  <Typography
                    variant="h4"
                    style={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      boxShadow: "0px 4px 8px rgba(142, 142, 142, 0.16)",
                      padding: "30px 0",
                      backgroundColor: "#fff",
                    }}
                  >
                    {item.toUpperCase()}
                  </Typography>
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
                'Something went wrong';
              </Grid>
            ) : (
              ""
            )}
          </Grid>
        </Container>
      </Box>
      <ProductsLimit />
    </>
  );
};

export default Home;
