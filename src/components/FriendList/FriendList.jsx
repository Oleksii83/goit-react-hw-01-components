import PropTypes from "prop-types";
import "./FriendList.style.css";
// import s from "./FriendList.style.css"
export default function FriendList({ friends }) {
  return (
    <ul className="Friends-list">
      {friends.map((item) => (
        <li key={item.id} className="Friend-item">
          {item.isOnline ? (
            <span className="online" />
          ) : (
            <span className="offline" />
          )}
          <img
            className="Friend-avatar"
            src={item.avatar}
            alt={item.name}
            width="48"
          />
          <p className="Friend-name">{item.name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
