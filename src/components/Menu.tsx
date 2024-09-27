import React from "react";
import { Link } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useAppSelector } from "../features/hooks";
const Menu: React.FC = () => {
  const data = useAppSelector((state) => state.cart.datas);
  return (
    <>
      <ul className="nav-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/cart">
            <AddShoppingCartIcon />
            {data?.length}
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Menu;
