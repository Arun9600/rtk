import { createTheme, ThemeProvider } from "@mui/material";
import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import EmptyPage from "./components/EmptyPage";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
const App: React.FC = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ["Poppins", "Open Sans", "Lora"].join(","),
      h1: {
        fontFamily: "Poppins",
      },
      h2: {
        fontFamily: "Poppins",
      },
      h3: {
        fontFamily: "Poppins",
      },
      h4: {
        fontFamily: "Lora",
      },
      h5: {
        fontFamily: "Poppins",
      },
      h6: {
        fontFamily: "Poppins",
      },
      body1: {
        fontFamily: "Open Sans",
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Nav />}>
              <Route path="/" index element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route
                path="/productdetail/:title"
                element={<ProductDetails />}
              />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<EmptyPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
