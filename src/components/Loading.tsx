import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import "../styles/Loading.css";

export default function CircularIndeterminate() {
  return (
    <Box className="loader" sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  );
}
