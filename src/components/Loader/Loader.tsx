import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Loader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        justifyContent: "center",
        zIndex: 1,
      }}
    >
      <CircularProgress color="secondary" aria-label="Loading" />
    </Box>
  );
};

export default Loader;
