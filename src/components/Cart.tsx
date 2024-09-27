import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Skeleton,
} from "@mui/material";
import { useAppSelector, useAppDispatch } from "../features/hooks";
import type { CartData } from "../App.types";
import DeleteIcon from "@mui/icons-material/Delete";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { deleteItem, addQty, decreaseQty } from "../features/CartSlice";
const Cart: React.FC = () => {
  const dispatch = useAppDispatch();
  const DeleteProduct = (item: CartData): void => {
    void dispatch(deleteItem(item));
  };
  const increaseQuantity = (item: CartData): void => {
    void dispatch(addQty(item));
  };
  const decreseQuantity = (item: CartData): void => {
    void dispatch(decreaseQty(item));
  };
  const data = useAppSelector((state) => state.cart.datas);
  const Total = data?.reduce(
    (acc, item: CartData) =>
      (acc as number) + (item.price as number) * (item.qty ?? 0),
    0
  );
  const subTotal = Math.round(Total as number);
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
                  marginBottom: "20px",
                }}
              >
                Cart
              </Typography>
            </Grid>
          </Grid>
        </Container>
        {data?.length === 0 ? (
          <Box>
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
                  <Typography variant="h6">No items in your cart</Typography>
                </Grid>
              </Grid>
            </Container>
          </Box>
        ) : (
          <Box>
            <Container>
              <Grid container>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <TableContainer component={Paper}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Product Image</TableCell>
                          <TableCell>Product Name</TableCell>
                          <TableCell>Quantity</TableCell>
                          <TableCell>Price</TableCell>
                          <TableCell>Remove Item</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {!data ? (
                          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                        ) : (
                          data?.map((item: CartData) => (
                            <TableRow
                              key={item.id}
                              style={{
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <TableCell>
                                <img
                                  src={item.image}
                                  alt={item.title}
                                  style={{ width: "100px", height: "100px" }}
                                />
                              </TableCell>
                              <TableCell>
                                <Typography
                                  variant="h4"
                                  style={{ fontSize: "16px" }}
                                >
                                  {item.title}
                                </Typography>
                              </TableCell>
                              <TableCell style={{ textAlign: "center" }}>
                                <Box
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <ControlPointIcon
                                    style={{ cursor: "pointer" }}
                                    onClick={() => {
                                      increaseQuantity(item);
                                    }}
                                  />{" "}
                                  {item.qty}{" "}
                                  <RemoveCircleOutlineIcon
                                    style={{ cursor: "pointer" }}
                                    onClick={() => {
                                      decreseQuantity(item);
                                    }}
                                  />
                                </Box>
                              </TableCell>
                              <TableCell style={{ textAlign: "center" }}>
                                {(item.price as number) * (item.qty ?? 0)}
                              </TableCell>
                              <TableCell style={{ textAlign: "center" }}>
                                <DeleteIcon
                                  onClick={() => {
                                    DeleteProduct(item);
                                  }}
                                  style={{ cursor: "pointer" }}
                                />
                              </TableCell>
                            </TableRow>
                          ))
                        )}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Grid>
              </Grid>
            </Container>
          </Box>
        )}
      </Box>
      {data?.length === 0 ? (
        ""
      ) : (
        <Box>
          <Container>
            <Grid container>
              <Grid item xl={6} lg={6} md={6} sm={6} xs={6}></Grid>
              <Grid
                item
                xl={6}
                lg={6}
                md={6}
                sm={6}
                xs={6}
                style={{ textAlign: "center" }}
              >
                <Typography
                  variant="h4"
                  style={{ fontSize: "18px", fontWeight: "bold" }}
                >
                  Total: {subTotal}
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>
      )}
    </>
  );
};
export default Cart;
