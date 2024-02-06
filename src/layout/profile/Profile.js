import styles from "./Profile.module.css";

function Profile({ person: profile }) {
  return (
    <div className={styles["gallerypost"]}>
      <div className={styles["image-container"]}>
        <p>
          {" "}
          {profile.username} {profile.age}
        </p>
        <img className="avatar" src={profile.avatar} alt={profile.username} />
      </div>
      <div className={styles["text-container"]}>{"left an image"}</div>
    </div>
  );
}
export default Profile;
