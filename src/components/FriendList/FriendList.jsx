import PropTypes from "prop-types";
import s from "./FriendList.module.css";
import FriendItem from "./FriendItem";
console.log("🚀 ~ file: FriendList.jsx ~ line 3 ~ style", s);
// import s from "./FriendList.style.css"

export default function FriendList({ friends }) {
  return (
    <ul className={s.FriendsList}>
      {friends.map((item) => (
        <FriendItem
          avatar={item.avatar}
          name={item.name}
          isOnline={item.isOnline}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
