import React, { useState, useEffect, useRef } from "react";
import { Box, Stack } from "@mui/material";
import images from "../constants/images";
import { BiSearch } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { FlashOffOutlined } from "@mui/icons-material";

const NavBar = () => {
  const NavItem = ["Home", "Brands", "Products", "Contact", "About"];
  const [toggle, setToggle] = useState("-80%");

  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setToggle("-80%");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <>
      <Stack
        direction="row"
        sx={{ py: 2, alignItems: "center", justifyContent: "space-between" }}
      >
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            color: "white",
            fontSize: "28px",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={() => setToggle("0")}
        >
          <HiMenuAlt2 />
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <img src={images.logo} alt="logo" height={36} />
          <h6 style={{ fontSize: "16px", color: "white", fontWeight: "600" }}>
            Dona
          </h6>
        </Box>
        <Box
          sx={{
            flexGrow: "1",
            ml: { md: 7, lg: 18 },
            display: { xs: "none", md: "block" },
          }}
        >
          {NavItem.map((item) => (
            <a key={item} className="navbar-item">
              {item}
            </a>
          ))}
        </Box>
        <Box
          sx={{
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "space-between", lg: "space-around" },
            flexBasis: { xs: "30%", md: "16%", lg: "14%" },
            fontSize: "22px",
          }}
        >
          <BiSearch style={{ cursor: "pointer" }} />
          <FaUserAlt style={{ cursor: "pointer" }} />
          <HiShoppingCart style={{ cursor: "pointer" }} />
        </Box>
      </Stack>
      <Box
        sx={{
          position: "fixed",
          left: toggle,
          top: 0,
          height: "100vh",
          width: "80%",
          background: "#F0F0F0",
          transition: "0.2s ease-in-out",
        }}
        ref={menuRef}
      >
        <Box
          sx={{
            right: "15px",
            top: "10px",
            position: "absolute",
            fontSize: "32px",
          }}
        >
          <IoMdClose
            style={{ cursor: "pointer" }}
            onClick={() => setToggle("-80%")}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            py: 8,
          }}
        >
          {NavItem.map((item) => (
            <a key={item} className="menu-item">
              {item}
            </a>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default NavBar;
