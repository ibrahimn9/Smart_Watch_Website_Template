import React from "react";
import { Box, Stack } from "@mui/material";
import images from "../constants/images";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { MdOutlineAddShoppingCart } from "react-icons/md";

const Product = ({ product }) => {
  return (
    <Box
      sx={{
        px: 4,
        py: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: { xs: 2, md: 1 },
      }}
    >
      <Box sx={{ background: "#F6F6F6", p: 2, cursor: "pointer" }}>
        <img src={images[product.image]} alt={product.name} />
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <h5 style={{ fontSize: "26px", fontWeight: "600" }}>{product.name}</h5>
        {[...Array(product.stars)].map((_, index) => (
          <FaStar key={index} />
        ))}
        {[...Array(5 - product.stars)].map((_, index) => (
          <FaRegStar key={index} />
        ))}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          {product.prevPrice && (
            <p
              style={{
                fontSize: "22px",
                fontWeight: "400",
                color: "#8B8E99",
                textDecoration: "line-through",
                marginRight: "10px",
              }}
            >
              ${product.prevPrice}
            </p>
          )}
          <p style={{ fontSize: "22px", fontWeight: "600" }}>
            ${product.price}
          </p>
          <MdOutlineAddShoppingCart className="buy-btn" />
        </Box>
      </Box>
    </Box>
  );
};

export default Product;
