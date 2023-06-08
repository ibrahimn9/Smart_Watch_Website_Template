import React from "react";
import { Box, Stack } from "@mui/material";
import images from "../constants/images";

const NewsLetter = () => {
  return (
    <Box
      sx={{
        background: "#F6F6F6",
        py: 4,
        px: {xs: 2, md: 8},
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        mt: 26,
        mb: 8,
        borderRadius: 4,
        alignItems: "center",
      }}
    >
      <Box sx={{ mb: {xs: 4, md: 0 }}}>
        <h2 style={{ fontWeight: "600", fontSize: "36px" }}>
          Subscribe To Newsletter
        </h2>
        <p className="p">Get free guide about smart watches daily.</p>
        <Box
          sx={{
            color: "#3858D6",
            display: "flex",
            mt: 4,
            justifyContent: "space-between",
            alignItems: "center",
            background: "white",
            p: 1,
            borderRadius: 4,
          }}
        >
          <input className="main-input" placeholder="Enter Email Address" />
          <button className="main-btn btn">Subscribe</button>
        </Box>
      </Box>
      <img src={images.bg7} />
    </Box>
  );
};

export default NewsLetter;
