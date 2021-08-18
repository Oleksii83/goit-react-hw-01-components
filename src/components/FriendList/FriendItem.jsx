import s from "./FriendList.module.css";
import PropTypes from "prop-types";

const FriendItem = ({ avatar, name, isOnline, id }) => {
  return (
    <>
      <li key={id} className={s.FriendItem}>
        <span className={isOnline ? s.online : s.offline} />

        <img className={s.FriendAvatar} src={avatar} alt={name} width="48" />
        <p className={s.FriendName}>{name}</p>
      </li>
    </>
  );
};

export default FriendItem;

FriendItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
