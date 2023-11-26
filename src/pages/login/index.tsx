import React, { useState } from "react";

import AppBarMain from "@/components/Header/app-bar-main";
import Footer from "@/components/Footer";
import LoginAdmin from "@/components/Login/login-admin";

const Login = () => {
  return (
    <>
      <AppBarMain />
      <LoginAdmin />
      <Footer />
    </>
  );
};

export default Login;
