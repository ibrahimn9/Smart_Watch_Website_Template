import React from "react";
import { Box, Stack } from "@mui/material";
import images from "../constants/images";
import { BiSearch } from "react-icons/bi";

const Main = () => {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      sx={{ mt: 4, justifyContent: "space-between", alignItems: 'center'}}
    >
      <Box sx={{ flexBasis: "42%", mt: 2 }}>
        <h1 style={{ color: "white", fontSize: "64px", margin: 0 }}>
          Discover Most Suitable Watches
        </h1>
        <p className="p">
          Find the best, reliable, and cheap smart watches here. We focus on
          product quality. Here you can find smart watches of almost all brands.
          So why you are waiting? Just order now!
        </p>
        <Box
          sx={{
            mt: 4,
            color: "#3858D6",
            display: "flex",
            justifyContent: 'space-between',
            alignItems: "center",
            background: 'white',
            p: 1,
            borderRadius: 4,
          }}
        >
          <BiSearch style={{ fontSize: '42px', cursor: 'pointer' }} />
          <input className="main-input" placeholder="Find the best brands" />
          <button className="main-btn btn">Search</button>
        </Box>
      </Box>
      <Box sx={{ mt: { xs: 8, md: 0 }}}>
        <img src={images.main_bg} alt="main_watch" height={480} />
      </Box>
    </Stack>
  );
};

export default Main;
