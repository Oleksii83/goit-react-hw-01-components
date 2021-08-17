import PropTypes from "prop-types";
import "./Profile.style.css";

const Profile = ({ name, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;
  return (
    <div className="profile">
      <div className="Profile-description">
        <img
          src={avatar}
          alt="Аватар пользователя"
          className="Profile-avatar"
          width="90"
        />
        <p className="Profile-name"> {name}</p>
        <p className="Profile-tag"> {tag}</p>
        <p className="Profile-location"> {location}</p>
      </div>

      <ul className="Profile-stats">
        <li className="Profile-stats-item">
          <span className="Profile-label">Followers</span>
          <span className="Profile-quantity"> {followers}</span>
        </li>
        <li className="Profile-stats-item">
          <span className="Profile-label">Views</span>
          <span className="Profile-quantity"> {views}</span>
        </li>
        <li className="Profile-stats-item">
          <span className="Profile-label">Likes</span>
          <span className="Profile-quantity"> {likes}</span>
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
