import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import UniversalSearchHeader from "./UniversalSearchHeader";

const Account = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "Digit IT",
    firstName: "Digit",
    lastName: "IT",
    email: "test@digitit.com",
    country: "Telangana",
    state: "Hyderabad",
  });

  //  Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  //  Handle Logout
  const handleLogout = () => {
    

    //  Redirect safely to login2 (since /login2 works)
    navigate("/login2");
  };

  return (
    <>
      <UniversalSearchHeader
        title="Digit IT Profile"
        bgImage={process.env.PUBLIC_URL + "/images/bg-tvshows.jpg"}
      />

      <section
        style={{
          backgroundColor: "#0b0f19",
          color: "white",
          padding: "60px 0",
          minHeight: "100vh",
        }}
      >
        <Container>
          <Row className="justify-content-center">
            {/*  LEFT COLUMN */}
            <Col lg={4} md={5} className="text-center mb-4 mb-lg-0">
              <Card
                className="border-0 mx-auto"
                style={{
                  backgroundColor: "#0f1a2b",
                  color: "white",
                  width: "100%",
                  padding: "30px",
                  borderRadius: "12px",
                }}
              >
                <div className="d-flex flex-column align-items-center">
                  <img
                    src={process.env.PUBLIC_URL + "/images/digit2.png"}
                    alt="Profile"
                    style={{
                      width: "120px",
                      height: "120px",
                      borderRadius: "50%",
                      border: "2px solid #00bcd4",
                      marginBottom: "20px",
                    }}
                  />
                  <h5 className="fw-bold text-info mb-2">{user.username}</h5>

                  <Button
                    variant="info"
                    size="sm"
                    className="fw-semibold mb-3 text-dark"
                  >
                    Change Avatar
                  </Button>

                  {/*  Sidebar Links */}
                  <div className="text-start w-100 mt-2">
                    <p className="fw-bold text-light">Account Details</p>
                    <ul className="list-unstyled">
                      <li className="text-warning">PROFILE</li>
                      <li className="text-light mt-2">CHANGE PASSWORD</li>

                      {/*  LOGOUT LINK */}
                      <li
                        className="text-light mt-2"
                        style={{
                          cursor: "pointer",
                          color: "#ff4d4d",
                          fontWeight: "bold",
                        }}
                        onClick={handleLogout}
                      >
                        LOG OUT
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </Col>

            {/*  RIGHT COLUMN */}
            <Col lg={8} md={7}>
              <Card
                className="border-0 p-4"
                style={{
                  backgroundColor: "#0f1a2b",
                  color: "white",
                  borderRadius: "12px",
                }}
              >
                <h5 className="fw-bold text-uppercase mb-4 text-info">
                  01. Profile Details
                </h5>

                <Form>
                  <Row className="mb-3">
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="text-light">Username</Form.Label>
                        <Form.Control
                          type="text"
                          name="username"
                          value={user.username}
                          onChange={handleChange}
                          className="bg-dark text-white border-secondary"
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="text-light">
                          Email Address
                        </Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={user.email}
                          onChange={handleChange}
                          className="bg-dark text-white border-secondary"
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row className="mb-3">
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="text-light">
                          First Name
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="firstName"
                          value={user.firstName}
                          onChange={handleChange}
                          className="bg-dark text-white border-secondary"
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="text-light">Last Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="lastName"
                          value={user.lastName}
                          onChange={handleChange}
                          className="bg-dark text-white border-secondary"
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row className="mb-4">
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="text-light">Country</Form.Label>
                        <Form.Control
                          type="text"
                          name="country"
                          value={user.country}
                          onChange={handleChange}
                          className="bg-dark text-white border-secondary"
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="text-light">State</Form.Label>
                        <Form.Control
                          type="text"
                          name="state"
                          value={user.state}
                          onChange={handleChange}
                          className="bg-dark text-white border-secondary"
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Button
                    variant="info"
                    className="fw-semibold text-dark rounded-pill px-4"
                  >
                    SAVE
                  </Button>
                </Form>

                <hr className="my-4 text-secondary" />

                <h5 className="fw-bold text-uppercase mb-4 text-info">
                  02. Change Password
                </h5>

                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label className="text-light">Old Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter your old password"
                      className="bg-dark text-white border-secondary"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="text-light">New Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter new password"
                      className="bg-dark text-white border-secondary"
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label className="text-light">
                      Confirm New Password
                    </Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Re-enter new password"
                      className="bg-dark text-white border-secondary"
                    />
                  </Form.Group>

                  <Button
                    variant="info"
                    className="fw-semibold text-dark rounded-pill px-4"
                  >
                    CHANGE
                  </Button>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Account;
