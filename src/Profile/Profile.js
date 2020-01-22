import React from "react";
import PropTypes from "prop-types";

function Profile({ user }) {
  const { name, tag, location, avatar, stats } = user;
  const { followers, views, likes } = stats;
  return (
    <div class="profile">
      <div class="description">
        <img src={avatar} alt="user avatar" class="avatar" width="200" />
        <p class="name">{name}</p>
        {tag && <p class="tag">@{tag}</p>}
        {location && <p class="location">{location}</p>}
      </div>

      <ul class="stats">
        <li>
          <span class="label">Followers</span>
          <span class="quantity"> {followers}</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity"> {views}</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity"> {likes}</span>
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
