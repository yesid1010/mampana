import {Box} from "@mui/material";

import { Outlet } from "react-router-dom";
import logo from "/assets/images/logo.png";

import '../App.css'

export default function PageLayout() {
  return (
    <>
    <Box sx={{ width: "100%" }}>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <div className="menu-container">
          <Outlet />
        </div>
  
    </Box>
    </>
  );
}
