import React from "react";

import LI from "./img/LI.png";
import GH from "./img/GH.png";
import PL from "./img/pl.jpg";

const Info = () => {
  const icons = {
    width: "45px",
    height: "45",
    margin: "0px 10px",
  };

  const box = {
    margin: "0 auto",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    marginBottom: "8vh",
    padding: "5vh",
    borderRadius: "15px",
    color: "black",
    minWidth: "65%",
    maxWidth: "100%",
    minHeight:"40vh",
    height: "auto",
    fontSize: "20px",
    fontFamily: ' "Roboto", sans serif ',
    backgroundImage: `url(${PL})`,
    backgroundSize: "cover",
  };

  const smallBox = {
    maxWidth: "auto",
    width: "35vh",
    padding: "10px",
    backgroundColor: "rgba(240,240,240,0.5)",
    margin: "0 auto ",
    borderRadius: "10px",
    marginBottom: 15,
    marginTop: 15,
  };

  const spaceBox = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
  };

  const ul = {
    textDecoration: "underline",
  };

  const row = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  };

  const link = {
    textDecoration: "none",
    color:"black"
  }

  return (
    <div style={box}>
      <div style={spaceBox}>
        <div style={smallBox}>
          <a
            href="https://www.linkedin.com/in/lotte-moors-a428121a1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LI} style={icons} alt="li" />
          </a>

          <a
            href="https://github.com/LotteMoors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GH} style={icons} alt="gh" />
          </a>
        </div>
        <div style={row}>
          <div style={smallBox}>
            <h3 style={ul}>Phone:</h3>
            <h3> +32474121598</h3>
          </div>
          <div style={smallBox}>
            <h3 style={ul}>E-mail:</h3>
            <a style={link}href="mailto:lotte-moors@hotmail.com">
              <h3> lotte-moors@hotmail.com</h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
