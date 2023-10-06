import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import CardHotel from "./components/cartHotel";
import OverheardCard from "./components/overheardCard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CardHotel />
    <OverheardCard />
  </React.StrictMode>
);
