import React from 'react'
import { Box, Stack } from "@mui/material";
import images from "../constants/images";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

const Testimonial = ({ testimonial }) => {
  return (
    <Box
      sx={{
        background: "#F6F6F6",
        borderRadius: 2,
        px: 4,
        py: 2,
        display: "flex",
        alignItems: "center",
        maxWidth: "550px",
        mt: { xs: 2, md: 1 },
      }}
    >
      <img src={images[testimonial.image]} alt={testimonial.name} />
      <Box sx={{ ml: 2 }}>
        <h5 style={{ fontSize: "26px", fontWeight: '500' }}>{testimonial.name}</h5>
        <p className="p">{testimonial.testimonial}</p>
        <Box sx={{ mt: 1 }}>
        {[...Array(testimonial.rating)].map((_, index) => (
          <FaStar key={index} />
        ))}
        {[...Array(5 - testimonial.rating)].map((_, index) => (
          <FaRegStar key={index} />
        ))}
        </Box>
      </Box>
    </Box>
  )
}

export default Testimonial