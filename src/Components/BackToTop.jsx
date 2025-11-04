// src/Components/BackToTop.jsx
import React from "react";

const BackToTop = () => {
  const scrollToTop = () => {
    //  Try scrolling the main window
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    //  Also try scrolling the document (for cases where router wraps content)
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    //  And as a fallback (rare, for body scroll)
    document.body.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      onClick={scrollToTop}
      style={{
        position: "fixed",
        right: "30px",
        bottom: "40px",
        backgroundColor: "#0dcaf0",
        color: "#000",
        fontWeight: "600",
        borderRadius: "50px",
        padding: "10px 18px",
        cursor: "pointer",
        boxShadow: "0 0 10px rgba(0,0,0,0.3)",
        zIndex: 999,
      }}
    >
      ↑ Back to Top
    </div>
  );
};

export default BackToTop;
