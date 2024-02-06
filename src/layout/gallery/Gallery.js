import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Gallery.module.css";
import Profile from "../profile";

function UserPost({ profile, imageUrl, altText }) {
  const [isImageOpen, setImageOpen] = useState(false);
  const [status, setStatus] = useState(null); // Zustand für den Status

  const handleImageClick = () => {
    setImageOpen(true);
  };

  const handleClose = () => {
    setImageOpen(false);
  };

  const handleLike = () => {
    setStatus(status === "like" ? null : "like"); // Setzt den Status auf 'like' oder null
  };

  const handleDislike = () => {
    setStatus(status === "dislike" ? null : "dislike"); // Setzt den Status auf 'dislike' oder null
  };

  return (
    <div className={styles["image-container"]}>
      <div className="gallery-post">
        <Profile person={profile}></Profile>
        <div className={styles["image-border"]}>
          <img
            src={imageUrl}
            alt={altText}
            className={styles["gallery-image"]}
            onClick={handleImageClick}
          />
        </div>
        <button onClick={handleLike}>
          <img src="/path/to/thumbs-up.png" alt="Like" />{" "}
          {/* Pfad zu Ihrem Daumen-hoch-Bild */}
          {status === "like" ? "Liked" : "Like"}
        </button>
        <button onClick={handleDislike}>
          <img src="/path/to/thumbs-down.png" alt="Dislike" />{" "}
          {/* Pfad zu Ihrem Daumen-runter-Bild */}
          {status === "dislike" ? "Disliked" : "Dislike"}
        </button>
      </div>
      {isImageOpen && (
        <div className={styles["modal"]} onClick={handleClose}>
          <img
            src={imageUrl}
            alt={altText}
            className={styles["modal-content"]}
          />
        </div>
      )}
    </div>
  );
}

UserPost.propTypes = {
  avatarSize: PropTypes.number.isRequired,
  person: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
};

function Gallery({ profile, posts }) {
  return (
    <div className={styles["gallery"]}>
      <h2 className={styles["centered-text"]}>Catmazing Guestboard</h2>
      <div className={styles["grid-container"]}>
        {posts.map((post, index) => (
          <UserPost
            profile={profile} // Änderung
            imageUrl={post.image}
            altText={`Bild von Cat${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
