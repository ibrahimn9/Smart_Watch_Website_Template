import React from "react";
import { Box, Stack } from "@mui/material";
import images from "../constants/images";

const BrandInfos = ({ brandInfos }) => {
  return (
    <Box
      sx={{
        background: "#F6F6F6",
        borderRadius: 2,
        px: 4,
        py: 2,
        display: "flex",
        alignItems: "center",
        width: "350px",
        mt: { xs: 2, md: 1 },
      }}
    >
      <img src={images[brandInfos.logo]} alt={brandInfos.logo} />
      <Box sx={{ ml: 2 }}>
        <h5 style={{ fontSize: "26px" }}>{brandInfos.brand}</h5>
        <p className="p">{brandInfos.info}</p>
      </Box>
    </Box>
  );
};

export default BrandInfos;
