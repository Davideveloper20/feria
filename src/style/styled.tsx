import { styled } from "@mui/system";

export const ButtonMain = styled("button")({
  background: "black",
  color: "yellow",
  width: "100%",
  borderRadius: "3px",
  height: "30px",
  border: "0.5px solid slategrey",
  cursor: "pointer",
  "&:hover": { background: "#00000094" },
  fontFamily: "Cinzel, serif",
  fontSize: "18px",
  fontWeight: 600,
  whiteSpace: "nowrap",
});

export const ButtonSecondary = styled("button")({
  background: "black",
  color: "yellow",
  width: "100%",
  borderRadius: "3px",
  height: "30px",
  border: "0.5px solid slategrey",
  cursor: "pointer",
  "&:hover": { background: "#00000094" },
  fontFamily: "Cinzel, serif",
  fontSize: "11px",
  fontWeight: 600,
  whiteSpace: "nowrap",
});

export const ButtonAdmin = styled("button")({
  background: "black",
  color: "white",
  width: "100%",
  borderRadius: "3px",
  height: "30px",
  border: "0.5px solid white",
  cursor: "pointer",
  "&:hover": { background: "#fff00038" },
  fontFamily: "Cinzel, serif",
  fontSize: "13px",
  fontWeight: 600,
});
