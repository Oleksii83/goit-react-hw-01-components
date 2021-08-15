import PropTypes from "prop-types";
import "./FriendList.style.css";
// import s from "./FriendList.style.css"
export default function FriendList(props) {
  const { avatar, name, isOnline } = props;
  return (
    <li className="Friend-item">
      {isOnline ? <span className="online" /> : <span className="offline" />}
      <img className="Friend-avatar" src={avatar} alt={name} width="48" />
      <p className="Friend-name">{name}</p>
    </li>
  );
}

FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
