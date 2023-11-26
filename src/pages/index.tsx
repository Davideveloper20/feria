import React, { useState } from "react";

import { Container, Stack, Divider } from "@mui/material";
import AppBarMain from "@/components/Header/app-bar-main";
import Footer from "@/components/Footer";
import CarouselIndex from "@/components/Carousel/carousel-index";

const HomePage = () => {
  return (
    <>
      <AppBarMain />
      <Container>
        <CarouselIndex />
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;
