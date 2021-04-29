import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  let today = new Date().toISOString().slice(0, 10)
  return (
    <footer>
      <p style={{color:"green",alignSelf:"flex-end",marginTop:"150px"}}>Copyright ⓒ {year} CMI-Tech  {today}</p>
     
    </footer>
  );
}

export default Footer;
