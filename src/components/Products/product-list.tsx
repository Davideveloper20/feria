import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import { useAtom } from "jotai";

import { adminSessionAtom } from "@/store/admin-session-atom";
import { cartAtom } from "@/store/cart-atom";

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
  Stack,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  TextField,
} from "@mui/material";

import { useProductList } from "@/hooks/use-product-list";

import { updateImage, getProducts, createProduct } from "@/services/api-main";

import { ButtonMain, ButtonSecondary } from "@/style/styled";

import { ProductListProps, Product } from "@/interfaces/main.interface";

const ProductList = (props: ProductListProps) => {
  const {
    cart,
    storedValue,
    titleCategory,
    selectedAddProduct,
    isModalOpenSuccess,
    isModalEditImage,
    isModalAddProduct,
    selectedProduct,
    selectedImage,
    addToCart,
    editProductDetail,
    addProductDetail,
    handleImageChange,
    handleNewImageChange,
    saveEditedImage,
    deleteProduct,
    saveNewImage,
    setIsModalEditImage,
    setIsModalAddProduct,
    setSelectedAddProduct,
    setSelectedProduct,
    setIsModalOpenSuccess,
  } = useProductList(props);

  return (
    <div>
      <Typography
        variant="h3"
        style={{
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          fontFamily: "Cinzel, serif",
          textAlign: "center",
          marginTop: 20,
          marginBottom: 25,
        }}
      >
        {props.title}
      </Typography>

      <Grid container spacing={10}>
        {storedValue !== "" && (
          <Grid container spacing={1} mt={2} ml={9}>
            <Grid item xs={12} sm={6} md={4}>
              <ButtonSecondary
                onClick={addProductDetail}
                sx={{
                  padding: "5px 0 0 10px",
                  width: "150px",
                  display: { xs: "none", md: "flex" },
                }}
              >
                Agregar Producto
              </ButtonSecondary>
            </Grid>
          </Grid>
        )}
        {props.products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product._id}>
            <Card>
              <CardMedia
                component="img"
                sx={{ height: "300px", width: "100%", objectFit: "cover" }}
                image={`/img/${product.image}`}
                alt={product.title}
              />
              <CardContent>
                <Stack direction="column" spacing={1}>
                  <Typography variant="h6" fontWeight={900}>
                    {product.title}
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    <Typography
                      fontSize="10px"
                      variant="caption"
                      fontWeight={900}
                      gutterBottom
                    >
                      Referencia:
                    </Typography>
                    <Typography fontSize="10px" variant="caption" gutterBottom>
                      {product.reference}
                    </Typography>

                    <Typography
                      fontSize="10px"
                      variant="caption"
                      fontWeight={900}
                      gutterBottom
                    >
                      Talla:
                    </Typography>
                    <Typography fontSize="10px" variant="caption" gutterBottom>
                      {product.size}
                    </Typography>

                    <Typography
                      fontSize="10px"
                      variant="caption"
                      fontWeight={900}
                      gutterBottom
                    >
                      Color:
                    </Typography>
                    <Typography fontSize="10px" variant="caption" gutterBottom>
                      {product.color}
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={2}>
                    <Typography variant="body1" fontWeight={900} gutterBottom>
                      Precio:
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      $ {product.price}
                    </Typography>
                  </Stack>

                  <Stack direction="row" spacing={2}>
                    <ButtonSecondary onClick={() => addToCart(product)}>
                      Agregar al carrito
                    </ButtonSecondary>

                    {storedValue !== "" && (
                      <ButtonSecondary
                        onClick={() => editProductDetail(product)}
                      >
                        Editar Producto
                      </ButtonSecondary>
                    )}
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog
        open={isModalEditImage}
        onClose={() => {
          setIsModalEditImage(false);
          setSelectedProduct(null);
        }}
      >
        <Divider sx={{ width: "100%", height: "10px", background: "yellow" }} />

        <DialogTitle
          sx={{
            background: "#000",
            color: "#fff",
            fontSize: "16px",
            textAlign: "center",
          }}
        >
          EDITA TU IMAGEN
        </DialogTitle>
        <DialogContent>
          {selectedProduct && (
            <Stack width="100%" direction="column" spacing={2} mt={2}>
              <Typography variant="h6" textAlign="justify">
                Edita la imagen para {selectedProduct.title}:
              </Typography>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
              {selectedProduct.image && (
                <CardMedia
                  component="img"
                  sx={{ height: "300px", width: "100%", objectFit: "cover" }}
                  image={`/img/${selectedProduct.image}`}
                  alt={selectedProduct.title}
                />
              )}

              <TextField
                label="Nombre del producto"
                fullWidth
                value={selectedProduct.title}
                onChange={(e) =>
                  setSelectedProduct({
                    ...selectedProduct,
                    title: e.target.value,
                  })
                }
              />
              <TextField
                label="Referencia"
                fullWidth
                value={selectedProduct.reference}
                onChange={(e) =>
                  setSelectedProduct({
                    ...selectedProduct,
                    reference: e.target.value,
                  })
                }
              />
              <TextField
                label="Talla"
                fullWidth
                value={selectedProduct.size}
                onChange={(e) =>
                  setSelectedProduct({
                    ...selectedProduct,
                    size: e.target.value,
                  })
                }
              />

              <TextField
                label="Precio"
                fullWidth
                value={selectedProduct.price}
                onChange={(e) =>
                  setSelectedProduct({
                    ...selectedProduct,
                    price: e.target.value,
                  })
                }
              />

              <TextField
                label="Color"
                fullWidth
                value={selectedProduct.color}
                onChange={(e) =>
                  setSelectedProduct({
                    ...selectedProduct,
                    color: e.target.value,
                  })
                }
              />

              <DialogActions>
                <Stack direction="row" spacing={2}>
                  <ButtonMain
                    sx={{ fontSize: "12px" }}
                    onClick={() => setIsModalEditImage(false)}
                  >
                    Cancelar
                  </ButtonMain>

                  <ButtonMain sx={{ fontSize: "12px" }} onClick={deleteProduct}>
                    Eliminar Producto
                  </ButtonMain>

                  <ButtonMain
                    sx={{ fontSize: "12px" }}
                    onClick={saveEditedImage}
                  >
                    Guardar Cambios
                  </ButtonMain>
                </Stack>
              </DialogActions>
            </Stack>
          )}
        </DialogContent>
      </Dialog>

      <Dialog
        open={isModalAddProduct}
        onClose={() => {
          setIsModalAddProduct(false);
        }}
      >
        <Divider sx={{ width: "100%", height: "10px", background: "yellow" }} />

        <DialogTitle
          sx={{
            background: "#000",
            color: "#fff",
            fontSize: "16px",
            textAlign: "center",
            marginBottom: "15px",
          }}
        >
          AGREGA TU PRODUCTO
        </DialogTitle>
        <DialogContent>
          <Stack width="100%" direction="column" spacing={2} mt={2}>
            <TextField
              label="Nombre del producto"
              fullWidth
              value={selectedAddProduct.name}
              onChange={(e) =>
                setSelectedAddProduct({
                  ...selectedAddProduct,
                  name: e.target.value,
                })
              }
            />
            <TextField
              label="Referencia"
              fullWidth
              value={selectedAddProduct.reference}
              onChange={(e) =>
                setSelectedAddProduct({
                  ...selectedAddProduct,
                  reference: e.target.value,
                })
              }
            />
            <TextField
              label="Talla"
              fullWidth
              value={selectedAddProduct.size}
              onChange={(e) =>
                setSelectedAddProduct({
                  ...selectedAddProduct,
                  size: e.target.value,
                })
              }
            />

            <TextField
              label="Precio"
              fullWidth
              value={selectedAddProduct.price}
              onChange={(e) =>
                setSelectedAddProduct({
                  ...selectedAddProduct,
                  price: e.target.value,
                })
              }
            />

            <TextField
              label="Color"
              fullWidth
              value={selectedAddProduct.color}
              onChange={(e) =>
                setSelectedAddProduct({
                  ...selectedAddProduct,
                  color: e.target.value,
                })
              }
            />

            <input
              type="file"
              accept="image/*"
              onChange={handleNewImageChange}
            />

            <DialogActions>
              <Stack direction="row" spacing={2}>
                <ButtonMain
                  sx={{ fontSize: "12px" }}
                  onClick={() => setIsModalAddProduct(false)}
                >
                  Cancelar
                </ButtonMain>
                <ButtonMain sx={{ fontSize: "12px" }} onClick={saveNewImage}>
                  Guardar Cambios
                </ButtonMain>
              </Stack>
            </DialogActions>
          </Stack>
        </DialogContent>
      </Dialog>

      <Dialog
        open={isModalOpenSuccess}
        onClose={() => setIsModalOpenSuccess(false)}
      >
        <Divider sx={{ width: "100%", height: "10px", background: "yellow" }} />

        <DialogTitle
          sx={{ background: "#000", color: "#fff", textAlign: "center" }}
        >
          PRODUCTO AGREGADO
        </DialogTitle>
        <Divider sx={{ width: "100%" }} />
        <DialogContent>
          <Stack width="100%" direction="column" spacing={2} mt={2}>
            <Typography variant="h6" textAlign="justify">
              Hemos agregado tu producto al carrito de compras!
            </Typography>

            <DialogActions>
              <Stack direction="row" spacing={2}>
                <Button
                  onClick={() => setIsModalOpenSuccess(false)}
                  sx={{
                    background: "#fff",
                    border: "1px solid #fff",
                    fontWeight: "900",
                    color: "#000",
                    "&:hover": { background: "hsl(0deg 0% 0% / 16%)" },
                  }}
                >
                  Entendido
                </Button>
              </Stack>
            </DialogActions>
          </Stack>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductList;
