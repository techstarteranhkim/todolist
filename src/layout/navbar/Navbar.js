import React, { useState } from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(!isLoggedIn);
    // Hier wäre die Weiterleitung
    console.log(
      isLoggedIn
        ? "Weiterleitung zu logout.html"
        : "Weiterleitung zu login.html"
    );
  };

  return (
    <div className={styles.navbar}>
      <a
        href="#"
        className="logo-container"
        onClick={() => console.log("Weiterleitung zu index.html")}
      >
        <img
          src="https://www.freeiconspng.com/uploads/to-do-list-icon-buy-this-icon-for--0-48-1.png"
          alt="Logo"
        />
      </a>
      <div className="button-container">
        <button
          className={isLoggedIn ? styles.logout : styles.login}
          onClick={handleLoginClick}
        >
          {isLoggedIn ? "Log out" : "Log in"}
        </button>
        <button onClick={() => console.log("Weiterleitung zu signup.html")}>
          Sign up
        </button>
      </div>
    </div>
  );
}

export default Navbar;
