import { useRouter } from "next/router";
import { useAtom } from "jotai";
import { cartAtom } from "@/store/cart-atom";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";


const CartIcon = () => {
  const router = useRouter();
  const [cart] = useAtom(cartAtom);

  const handleCartClick = () => {
    router.push("/cart");
  };

  return (
    <IconButton color="inherit" onClick={handleCartClick}>
      <Badge badgeContent={cart.length} color="secondary">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
};
export default CartIcon;
