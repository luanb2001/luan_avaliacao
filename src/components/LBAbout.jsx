import { textAlign } from "@mui/system";
import React, { useEffect } from "react";
import Emoticon from "../assets/images/emoticon.png";
const LBAbout = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    fetch(url);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: "1",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        <div style={{ textAlign: "center" }}>
          <img src={Emoticon} alt="Emoticon" />
        </div>
        <h2 style={{ textAlign: "center" }}>Nossa crença</h2>
        <h3 style={{ textAlign: "center" }}>
          “SE VOCÊ TEM UM CORPO, VOCÊ É UM ATLETA.”
        </h3>
        <h6 style={{ textAlign: "center" }}>mentira kkkkkkk</h6>
      </div>
    </div>
  );
};

export default LBAbout;
