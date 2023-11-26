import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Container from "@mui/material/Container";
import { useAtom } from "jotai";
import AppBarMain from "@/components/Header/app-bar-main";
import ProductList from "@/components/Products/product-list";
import Footer from "@/components/Footer";
import { productAtom } from "@/store/product-atom";
import { ProductListProps, Product } from "@/interfaces/main.interface";


import { getProducts } from "@/services/api-main";

const Categorie = () => {
  const router = useRouter();
  const { product } = router.query;
  const [selectedProduct, setSelectedProduct] = useAtom(productAtom);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: Product[] = await getProducts(product);
        setSelectedProduct(response);
      } catch (error) {
        console.error("Error al realizar la petición:", error);
      }
    };

    fetchData();
  }, [product, setSelectedProduct]);

  return (
    <>
      <AppBarMain />
      <Container>
        <ProductList
          title={product}
          products={selectedProduct !== null ? selectedProduct : []}
        />
      </Container>
      <Footer />
    </>
  );
};

export default Categorie;
