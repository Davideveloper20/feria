import React from "react";
import { useAtom } from "jotai";

import { Card, CardContent, Typography, Grid } from "@mui/material";
import { cartAtom } from "@/store/cart-atom";


const ShoppingCarts = () => {
  const [cart] = useAtom(cartAtom);

  return (
    <div>
      <h1>Carrito de compras</h1>
      <Grid container spacing={2}>
        {cart.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="div">
                  {product.title}
                </Typography>
                

                <Typography variant="body2" color="text.secondary">
                  Referencia: {product.reference}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  Talla: {product.size}
                </Typography>
                <Typography variant="body2" fontWeight={900} color="text.secondary">
                  Precio: $ {product.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ShoppingCarts;
