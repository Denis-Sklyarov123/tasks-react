import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import CardHotel from "./components/cartHotel";
import { Avatar } from "@mui/material";
import OverheardCard from "./components/overheardCard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CardHotel />
    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
    <OverheardCard />
  </React.StrictMode>
);
