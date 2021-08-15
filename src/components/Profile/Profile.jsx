import "./Profile.style.css";
export default function Profile(props) {
  return (
    <div className="profile">
      <div className="Profile-description">
        <img
          src={props.avatar}
          alt="Аватар пользователя"
          className="Profile-avatar"
          width="90"
        />
        <p className="Profile-name"> {props.name}</p>
        <p className="Profile-tag"> {props.tag}</p>
        <p className="Profile-location"> {props.location}</p>
      </div>

      <ul className="Profile-stats">
        <li className="Profile-stats-item">
          <span className="Profile-label">Followers</span>
          <span className="Profile-quantity"> {props.followers}</span>
        </li>
        <li className="Profile-stats-item">
          <span className="Profile-label">Views</span>
          <span className="Profile-quantity"> {props.views}</span>
        </li>
        <li className="Profile-stats-item">
          <span className="Profile-label">Likes</span>
          <span className="Profile-quantity"> {props.likes}</span>
        </li>
      </ul>
    </div>
  );
}
