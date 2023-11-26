import { useRouter } from "next/router";
import React, { useEffect, useState, useContext } from "react";

import { useAtom } from "jotai";

import {
  Grid,
  Typography,
  Paper,
  Button,
  Box,
  Container,
  Stack,
  TextField,
  CssBaseline,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
} from "@mui/material";

import { ButtonMain, ButtonSecondary } from "@/style/styled";

import { updateImage, getProducts, loginAdmin } from "@/services/api-main";

const LoginAdmin: React.FC = () => {
  const [isModalEditImage, setIsModalEditImage] = useState(true);

  const [isModalOpenSuccess, setIsModalOpenSuccess] = useState(false);

  const router = useRouter();

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const username = (event.target as any).username.value;
    const password = (event.target as any).password.value;

    const logued = {
      username,
      password,
    };

    try {
      const data: any = await loginAdmin(logued);

      if (data.status === 200) {
        localStorage.setItem("Session", "David Cuartas");
        router.push("/");
      }
    } catch (error) {
      setIsModalOpenSuccess(true);

      console.error("Error al enviar datos al backend", error);
    }
  };

  const imageUrl =
    "https://feriadelbrasier.co/cdn/shop/files/Banner_Ofertas_Black-01_1728x.jpg?v=1700775435";

  return (
    <Container
      component="main"
      sx={{
        height: "100vh",
        backgroundImage: `url( ${imageUrl} )`,

        backgroundSize: "cover",
        display: "flex",
        alignItems: "center",
      }}
    >
      <CssBaseline />

      <Dialog
        open={isModalEditImage}
        onClose={() => {
          setIsModalEditImage(false);
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
          ADMIN FERIA DEL BRASIER
        </DialogTitle>
        <DialogContent>
          <Stack width="100%" direction="column" spacing={2}>
            <form onSubmit={handleFormSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="username"
                label="Usuario"
                name="username"
                autoComplete="username"
              />
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
              />

              <DialogActions>
                <Stack direction="row" spacing={2}>
                  <ButtonSecondary type="submit">
                    Iniciar sesión
                  </ButtonSecondary>
                </Stack>
              </DialogActions>
            </form>
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
          Lo sentimos
        </DialogTitle>
        <Divider sx={{ width: "100%" }} />
        <DialogContent>
          <Stack width="100%" direction="column" spacing={2} mt={2}>
            <Typography variant="h6" textAlign="justify">
              Intenta de nuevo!
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
    </Container>
  );
};

export default LoginAdmin;
