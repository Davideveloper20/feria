
import React from "react";
import useRouter from "next/router";
import { useAtom } from 'jotai';

import AppBarMain from "@/components/Header/app-bar-main";
import ShoppingCarts from "@/components/ShoppingCart/shopping-carts";
import Footer from "@/components/Footer";

import { cartAtom } from '@/store/cart-atom';

const Cart = () => {
 const [cart] = useAtom(cartAtom);

  const router = useRouter;
  const { product } = router.query;

  const productObject = product ? JSON.parse(product as string) : null;

  return (
    <>
      <AppBarMain />
      <ShoppingCarts />
      <Footer />
    </>
  );
};

export default Cart;