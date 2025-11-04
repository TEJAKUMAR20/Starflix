// src/Components/Footer.jsx
import React, { useEffect, useState } from "react";

const Footer = () => {
  const [showTopText, setShowTopText] = useState(false);

  //  Show "Back to Top" text only after scrolling down 300px
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) setShowTopText(true);
      else setShowTopText(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //  Scroll smoothly to top
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      style={{
        backgroundColor: "#000",
        color: "#fff",
        textAlign: "left",
        padding: "40px 0 20px",
        borderTop: "1px solid rgba(255,255,255,0.1)",
        position: "relative",
        zIndex: 10,
      }}
    >
     

      {/*  Footer Text */}
      <p style={{ fontSize: "0.9rem", color: "#aaa", margin: 0 }}>
        &copy; 2025 StarFlix. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
