import React from "react";

import { Typography } from "@mui/material";

const Header = () => (
  <header>
    <Typography
      variant="h3"
      sx={{
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        fontFamily: "Cinzel, serif",
        textAlign: "center",
        marginTop: 4,
        marginBottom: 2,
      }}
    >
      Categorías Principales
    </Typography>
  </header>
);

export default Header;
