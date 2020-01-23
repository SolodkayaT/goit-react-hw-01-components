import React from "react";
import PropTypes from "prop-types";
import styles from "./Friendlist.module.css";

function FriendList({ friends }) {
  return (
    <section className={styles.section}>
      <ul className={styles.friendList}>
        {friends &&
          friends.map(({ name, avatar, isOnline, id }) => (
            <li key={id} className={styles.item}>
              <span
                className={isOnline ? styles.isOnline : styles.isNotOnline}
              ></span>
              <img
                className={styles.avatar}
                src={avatar}
                alt="avatar"
                width="48"
              />
              <p className={styles.name}>{name}</p>
            </li>
          ))}
      </ul>
    </section>
  );
}
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired
    })
  )
};
FriendList.defaultProps = {
  name: "",
  id: 1,
  avatar:
    "https://i.pinimg.com/originals/a0/40/66/a04066a2d1fcf25df39c599e093995c8.jpg",
  isOnline: "false"
};
export default FriendList;
