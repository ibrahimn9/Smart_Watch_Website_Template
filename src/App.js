import React, { useState, useEffect } from "react";
import { Box, Stack } from "@mui/material";
import axios from "axios";

import { Header } from "./Containers";
import { BrandInfos, Product, Testimonial, NewsLetter, Footer } from "./Components";

import { products, brandInfos, testimonials } from "./constants/data";

const App = () => {

  return (
    <Box>
      <Header />
      <Box sx={{ px: { xs: 2, sm: 4, md: 10, lg: 22 } }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "space-between" },
            flexWrap: "wrap",
            my: 8,
          }}
        >
          {brandInfos.map((brInfo) => (
            <BrandInfos brandInfos={brInfo} key={brInfo.brand} />
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            py: 4,
            my: 4,
            textAlign: "center",
          }}
        >
          <h6 style={{ color: "#3858D6", fontWeight: "600", fontSize: "16px" }}>
            Find your favorite smart watch.
          </h6>
          <h3 style={{ fontWeight: "600", fontSize: "36px" }}>
            Our Latest Products
          </h3>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: { xs: "center", md: "space-between" },
          }}
        >
          {products.map((product) => (
            <Product product={product} key={product.name} />
          ))}
        </Box>
        <button
          className="main-btn btn"
          style={{
            transform: "translateX(-50%)",
            left: "50%",
            position: "absolute",
            margin: "10px 0",
          }}
        >
          View More
        </button>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            py: 4,
            mt: 16,
            textAlign: "center",
          }}
        >
          <h6 style={{ color: "#3858D6", fontWeight: "600", fontSize: "16px" }}>
            Here are our some of the best clients.
          </h6>
          <h3 style={{ fontWeight: "600", fontSize: "36px" }}>
            What People Say About Us
          </h3>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: { xs: "center", md: "space-between" },
          }}
        >
          {testimonials.map((testimonial) => (
            <Testimonial testimonial={testimonial} key={testimonial.name} />
          ))}
        </Box>
        <NewsLetter />
      </Box>
      <Footer />
    </Box>
  );
};

export default App;
