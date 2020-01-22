import React from "react";
import PropTypes from "prop-types";

function FriendList({ friends }) {
  return (
    <section>
      <ul class="friend-list">
        {friends &&
          friends.map(({ name, avatar, isOnline, id }) => (
            <li key={id} class="item">
              <span class="status"></span>
              <img class="avatar" src={avatar} alt="avatar" width="48" />
              <p class="name">{name}</p>
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
