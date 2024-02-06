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
          src="https://png2.cleanpng.com/sh/83bc34b74b0597fda0480ed238a69cb3/L0KzQYm3V8AyN6NAR91yc4Pzfri0gBF1NahmhN42ZHXmcb20kCRqa5xqip90aYT3dbA0gB9wdF5yhAZ4LUXlQ4mBgsQ0amJqftU6Lka6SIe5WME2OWY4SKY8MkO1Q4i5WMgveJ9s/kisspng-cat-wall-decal-sticker-kitten-cool-moto-5b388b43b1efc1.6786281515304323237288.png"
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
