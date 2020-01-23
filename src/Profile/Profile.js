import React from "react";
import PropTypes from "prop-types";
import styles from "./Profile.module.css";

function Profile({ user }) {
  const { name, tag, location, avatar, stats } = user;
  const { followers, views, likes } = stats;
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img
          src={avatar}
          alt="user avatar"
          className={styles.avatar}
          width="200"
        />
        <p className={styles.name}>{name}</p>
        {tag && <p className={styles.tag}>@{tag}</p>}
        {location && <p>{location}</p>}
      </div>

      <ul className={styles.stats}>
        <li className={styles.item}>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}> {followers}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}> {views}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}> {likes}</span>
        </li>
      </ul>
    </div>
  );
}
Profile.defaultProps = {
  name: "Guest",
  tag: "",
  location: "",
  avatar:
    "https://i.pinimg.com/originals/a0/40/66/a04066a2d1fcf25df39c599e093995c8.jpg",
  stats: {
    followers: 0,
    views: 0,
    likes: 0
  }
};
Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number)
};
export default Profile;
