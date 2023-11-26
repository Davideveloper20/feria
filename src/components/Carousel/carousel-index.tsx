import React from "react";
import ReactDOM from "react-dom/client";

import {
  Grid,  
} from "@mui/material";
import EmblaCarousel from "./embla-carousel";

import Header from "./header";

import Footer from "./footer";

import "@/style/css/base.css";

import "@/style/css/sandbox.css";

import "@/style/css/embla.css";

const OPTIONS = {};
const SLIDE_COUNT = 10;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const categories = [
  {
    name: "Brasieres",
    image:
      "https://formfit.com.co/wp-content/uploads/2021/10/55244623-PIEL-1000X1000.jpg",
  },
  {
    name: "Panties",
    image:
      "https://leonisa.co/cdn/shop/products/012921_700_1200x1500_2021_3_680x.jpg?v=1695311839",
  },
  {
    name: "Fajas",
    image:
      "https://leonisa.co/cdn/shop/files/018678N_880_1200X1500_def_ts_1_280x.jpg?v=1697126730",
  },
  {
    name: "Vestidos",
    image:
      "https://tania.vteximg.com.br/arquivos/ids/265881-1000-1000/VESTIDOS-DE-BANO-Dos-Piezas_2060883_Negro_1.jpg?v=637843583412870000",
  },
];

interface Category {
  name: string;
  image: string;
}

const CarouselIndex = () => (
  <main className="sandbox">
    <Header />
    <section className="sandbox__carousel">
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <EmblaCarousel slides={categories} options={OPTIONS} />
        </Grid>
      </Grid>
    </section>
    <Footer />
  </main>
);

export default CarouselIndex;
