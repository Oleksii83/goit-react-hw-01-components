import PropTypes from "prop-types";
import "./Profile.style.css";
const Profile = ({ items }) => {
  return (
    <div className="profile">
      <div className="Profile-description">
        <img
          src={items.avatar}
          alt="Аватар пользователя"
          className="Profile-avatar"
          width="90"
        />
        <p className="Profile-name"> {items.name}</p>
        <p className="Profile-tag"> {items.tag}</p>
        <p className="Profile-location"> {items.location}</p>
      </div>

      <ul className="Profile-stats">
        <li className="Profile-stats-item">
          <span className="Profile-label">Followers</span>
          <span className="Profile-quantity"> {items.followers}</span>
        </li>
        <li className="Profile-stats-item">
          <span className="Profile-label">Views</span>
          <span className="Profile-quantity"> {items.views}</span>
        </li>
        <li className="Profile-stats-item">
          <span className="Profile-label">Likes</span>
          <span className="Profile-quantity"> {items.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  followers: PropTypes.string,
  views: PropTypes.string,
  likes: PropTypes.string,
};
