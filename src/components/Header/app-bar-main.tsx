import React, { useEffect, useState, useContext } from "react";

import Router from "next/router";
import { useAtom } from "jotai";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Stack, Divider } from "@mui/material";

import { adminSessionAtom } from "@/store/admin-session-atom";

import { ButtonMain, ButtonAdmin } from "@/style/styled";

import CartIcon from "./cart-icon";

const pages = [
  "Productos",
  "Ofertas",
  "Regalos",
  "Quiénes somos",
  "Contactanos",
];
const settings = ["Mi Perfil", "Cuenta", "Beneficios", "Cerrar Sesión"];

function AppBarMain() {
  const [storedValue, setStoredValue] = useAtom(adminSessionAtom);

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleRouteNavMenu = (page: string) => {
    if (page === "Productos") {
      Router.push({
        pathname: "/categorie",
        query: { product: "Vestidos" },
      });
    }
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogin = () => {
    Router.push("/login");
  };

  useEffect(() => {
    const storedData = localStorage.getItem("Session");
    if (storedData) {
      setStoredValue(storedData);
    }
  }, []);

  return (
    <AppBar position="static" sx={{ backgroundColor: "black" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton
            sx={{
              p: 0,
              width: "190px",
              heigth: "220px",
              marginRight: "10px",
            }}
            onClick={() => {
              Router.push("/");
            }}
          >
            <img
              src="https://feriadelbrasier.co/cdn/shop/files/Recurso_34logo_280x@2x.png?v=1681607446%201x,%20//feriadelbrasier.co/cdn/shop/files/Recurso_34logo.png?v=1681607446%201.1x"
              alt="Feria del brasier"
              style={{ maxWidth: "100%" }}
            />
          </IconButton>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <>
                {pages.map((page) => (
                  <MenuItem key={page} onClick={() => handleRouteNavMenu(page)}>
                    <Typography textAlign="center" fontSize="40px">
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
              </>
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleRouteNavMenu(page)}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontFamily: "Cinzel, serif",
                  fontSize: "16px",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings"></Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <>
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </>
            </Menu>

            <Stack direction="row" spacing={2}>
              <CartIcon />
              {storedValue !== "" ? (
                <ButtonAdmin
                  sx={{
                    flexGrow: 0,
                    height: 30,
                    display: { xs: "none", md: "flex" },
                  }}
                  onClick={handleLogin}
                >
                  <Typography
                    sx={{
                      fontFamily: "Cinzel, serif",
                      fontSize: "13px",
                      fontWeight: 600,
                    }}
                    pt={1/2}
                  >
                    Soy {storedValue}
                  </Typography>
                </ButtonAdmin>
              ) : (
                <ButtonAdmin
                  sx={{
                    flexGrow: 0,
                    height: 30,
                    display: { xs: "none", md: "flex" },
                  }}
                  onClick={handleLogin}
                >
                  <Typography
                    sx={{
                      fontFamily: "Cinzel, serif",
                      fontSize: "13px",
                      fontWeight: 600,
                    }}
                    pt={1/2}
                  >
                    Soy Admin
                  </Typography>
                </ButtonAdmin>
              )}
            </Stack>
          </Box>
        </Toolbar>
        <Divider
          sx={{
            width: "100%",
            height: "10px",
            background: "yellow",
            borderRadius: "50px 50px 0 0",
          }}
        />
      </Container>
    </AppBar>
  );
}
export default AppBarMain;
