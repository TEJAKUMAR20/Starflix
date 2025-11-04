// src/App.js
import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

// ✅ Components
import NavbarComponent from "./Components/Navbar";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Login2 from "./Components/Login2";
import NewPopular from "./Components/NewPopular";
import MoviesSection from "./Components/MovieSection";
import PopularTVShows from "./Components/PopularTVShows";
import InTheater from "./Components/InTheater";
import MovieResults from "./Components/MovieResults";
import TVShowspage from "./Components/TVShowspage";
import MovieSingle from "./Components/MovieSingle";
import AllMovieSingle from "./Components/AllMovieSingle";
import UniversalSearchHeader from "./Components/UniversalSearchHeader";
import AllTVSingle from "./Components/AllTVSingle";
import Account from "./Components/Account";
import BackToTop from "./Components/BackToTop";

const App = () => {
  const location = useLocation();

  // ✅ Login check
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  // ✅ Hide Navbar & Footer on login pages
  const hideLayout =
    location.pathname === "/login" || location.pathname === "/login2";

  return (
    <div
      style={{
        backgroundColor: "#0b1120",
        color: "#fff",
        minHeight: "100vh",
        cursor: "default",
        userSelect: "text",
      }}
    >
      {/* ✅ Navbar (only if not on login pages) */}
      {!hideLayout && <NavbarComponent />}

      <Routes>
        {/* ✅ Root redirect */}
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Navigate to="/home" replace />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        {/* ✅ Login Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/login2" element={<Login2 />} />

        {/* ✅ Home Page */}
        <Route
          path="/home"
          element={
            isLoggedIn ? (
              <>
                <Hero />
                <MoviesSection />
                <PopularTVShows />
                <InTheater />
              </>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        {/* ✅ Movies Page */}
        <Route
          path="/movies"
          element={
            isLoggedIn ? (
              <>
                <UniversalSearchHeader
                  title="MOVIES"
                  bgImage={process.env.PUBLIC_URL + "/images/bg.png"}
                />
                <MovieResults />
              </>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        {/* ✅ TV Shows Page */}
        <Route
          path="/tvshows"
          element={
            isLoggedIn ? (
              <>
                <UniversalSearchHeader
                  title="TV SHOWS"
                  bgImage={process.env.PUBLIC_URL + "/images/bg.png"}
                />
                <TVShowspage />
              </>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        {/* ✅ Single TV Show Page */}
        <Route
          path="/tvshows/:slug"
          element={isLoggedIn ? <AllTVSingle /> : <Navigate to="/login" replace />}
        />

        {/* ✅ New & Popular Page */}
        <Route
          path="/new"
          element={
            isLoggedIn ? (
              <>
                <UniversalSearchHeader
                  title="NEW & POPULAR"
                  bgImage={process.env.PUBLIC_URL + "/images/bg.png"}
                />
                <NewPopular />
              </>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        {/* ✅ Single Movie Pages */}
        <Route
          path="/movie/:title"
          element={isLoggedIn ? <MovieSingle /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/movie/:lang/:slug"
          element={isLoggedIn ? <AllMovieSingle /> : <Navigate to="/login" replace />}
        />

        {/* ✅ Account Page */}
        <Route
          path="/account"
          element={isLoggedIn ? <Account /> : <Navigate to="/login" replace />}
        />

        {/* ✅ 404 Page */}
        <Route
          path="*"
          element={
            <div
              style={{
                backgroundColor: "#000",
                color: "#fff",
                textAlign: "center",
                padding: "80px",
              }}
            >
              <h2>404 — Page Not Found 😢</h2>
              <p>The page you are looking for does not exist.</p>
            </div>
          }
        />
      </Routes>

      {/* ✅ Floating Back To Top Button */}
      {!hideLayout && <BackToTop />}

      {/* ✅ Footer only on non-login pages */}
      {!hideLayout && <Footer />}
    </div>
  );
};

export default App;
