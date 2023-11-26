import {
  Container,
  Grid,
  Divider,
  IconButton,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import {
  Instagram,
  Facebook,
  Twitter,
  Email,
  LocationOn,
} from "@mui/icons-material";
import NextLink from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Divider
        sx={{
          width: "100%",
          height: "20px",
          background: "yellow",
          mb: "-10px",
          mt:'10px'
        }}
      />

      <footer
        style={{
          backgroundColor: "#000",
          color: "#fff",
          padding: "20px 0",
          marginTop: 10,
        }}
      >
        <Container>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <MuiLink
                href="https://feriadelbrasier.co/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton>
                  <Instagram style={{ color: "#fff" }} />
                </IconButton>
              </MuiLink>
            </Grid>
            <Grid item>
              <MuiLink
                href="https://feriadelbrasier.co/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton>
                  <Facebook style={{ color: "#fff" }} />
                </IconButton>
              </MuiLink>
            </Grid>
            <Grid item>
              <IconButton>
                <Twitter style={{ color: "#fff" }} />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton>
                <Email style={{ color: "#fff" }} />
              </IconButton>
            </Grid>

            <Grid item>
              <Typography color="white" fontFamily="Montserrat, sans-serif">
                Calle 4 sur N 64-67 Sector San Diego Exposiciones
                <LocationOn />
              </Typography>
            </Grid>
            <Grid item>
              <Typography color="white" fontFamily="Montserrat, sans-serif">
                Medellín, Colombia zipcode: 8987 #456 <LocationOn />
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="body2" align="center">
                &copy; {currentYear} Feria del brasier y solo kukos. Todos los
                derechos reservados.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
