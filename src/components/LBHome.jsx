import { Padding } from "@mui/icons-material";
import { Card, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import Nike from "../assets/images/nike.png";
const LBHome = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    fetch(url);
  }, []);

  return (
    <div style={{margin: "0 auto" }}>
      <div style={{ textAlign: "center" }}>
        <img src={Nike} alt="Nike" />
      </div>
      <h1 style={{ textAlign: "center" }}>
        Bem vindo
      </h1>
      <h4 style={{ textAlign: "center" }}>Apenas faça amigão</h4>
      <div></div>
    </div>
  );
};

export default LBHome;
