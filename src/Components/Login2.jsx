import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login2 = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (username && password) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/");
    } else {
      alert("Please enter valid credentials!");
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/images/bg.png"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        }}
      ></div>

      {/*  Custom Sized Login Box */}
      <div
        style={{
          position: "relative",
          backgroundColor: "#fff",
          borderRadius: "6px",
          width: "350px", //  manually fixed width
          padding: "80px 60px", //  good spacing
          boxShadow: "0 0 20px rgba(0,0,0,0.3)",
          textAlign: "left",
        }}
      >
        {/* Title */}
        <h3
          className="text-center fw-bold mb-4"
          style={{
            letterSpacing: "1px",
            color: "#000",
            textTransform: "uppercase",
          }}
        >
          Login
        </h3>

        {/* Form */}
        <Form onSubmit={handleLogin}>
          {/* Username */}
          <Form.Group className="mb-3">
            <Form.Label
              style={{
                fontWeight: "600",
                fontSize: "14px",
                letterSpacing: "0.5px",
                color: "#333",
              }}
            >
              Username:
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                borderRadius: "4px",
                border: "1px solid #ccc",
                height: "38px",
                fontSize: "14px",
              }}
            />
          </Form.Group>

          {/* Password */}
          <Form.Group className="mb-4">
            <Form.Label
              style={{
                fontWeight: "600",
                fontSize: "14px",
                letterSpacing: "0.5px",
                color: "#333",
              }}
            >
              Password:
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                borderRadius: "4px",
                border: "1px solid #ccc",
                height: "38px",
                fontSize: "14px",
              }}
            />
          </Form.Group>

          {/* Login Button */}
          <Button
            type="submit"
            variant="info"
            className="w-100 fw-bold"
            style={{
              height: "40px",
              backgroundColor: "#00BFFF",
              border: "none",
              fontSize: "14px",
              letterSpacing: "0.5px",
              borderRadius: "4px",
            }} 
          >
            LOGIN
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login2;
