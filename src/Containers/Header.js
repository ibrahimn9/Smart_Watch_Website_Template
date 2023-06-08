import React from "react";
import { Box, Stack } from "@mui/material";
import { NavBar, Main } from "../Components";

const Header = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(155.28deg, #383638 2.06%, #0B0B0B 33.08%)",
        height: {lg:"100vh"},
        px: {xs: 2, sm: 4, md: 10, lg: 22},
        minWidth: '100%',
      }}
    >
      <NavBar />
      <Main />
    </Box>
  );
};

export default Header;
