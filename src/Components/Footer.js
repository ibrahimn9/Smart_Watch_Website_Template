import React from "react";
import { Box, Stack } from "@mui/material";
import images from "../constants/images";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <Box
      sx={{
        minWidth: "100%",
        background: "linear-gradient(155.28deg, #383638 2.06%, #0B0B0B 33.08%)",
        py: 4,
        px: { xs: 2, sm: 4, md: 10, lg: 22 },
      }}
    >
      <Stack
        direction="row"
        sx={{ flexWrap: "wrap", justifyContent: "space-between" }}
      >
        <Box sx={{ flexBasis: "25%" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              mb: 2,
            }}
          >
            <img src={images.logo} alt="logo" height={36} />
            <h6 style={{ fontSize: "16px", color: "white", fontWeight: "600" }}>
              Dona
            </h6>
          </Box>
          <p className="footer-p" style={{ textDecoration: 'none' }}>
            Find the best, reliable, and cheap smart watches here.
          </p>
          <Stack
            direction="row"
            sx={{ color: "white", py: 2, fontSize: "32px" }}
          >
            <BsFacebook style={{ marginRight: "15px", cursor: 'pointer' }} />
            <AiFillTwitterCircle style={{ marginRight: "15px", cursor: 'pointer' }} />
            <IoLogoWhatsapp style={{ cursor: 'pointer' }} />
          </Stack>
        </Box>
        <Box
          sx={{
            flexBasis: "25%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h5 style={{ fontSize: "22px", color: "white", fontWeight: "500" }}>
            Product
          </h5>
          <p className="footer-p">Features</p>
          <p className="footer-p">Team</p>
          <p className="footer-p">Security</p>
          <p className="footer-p">Entreprise</p>
        </Box>
        <Box
          sx={{
            flexBasis: "25%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h5 style={{ fontSize: "22px", color: "white", fontWeight: "500" }}>
            Company
          </h5>
          <p className="footer-p">About</p>
          <p className="footer-p">Contact</p>
          <p className="footer-p">Social Impact</p>
          <p className="footer-p">Shop</p>
        </Box>
      </Stack>
      <p className="p">Privacy Policy | Dona</p>
    </Box>
  );
};

export default Footer;
