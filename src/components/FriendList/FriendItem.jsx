import s from "./FriendList.module.css";

const FriendItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <span className={isOnline ? s.online : s.offline} />

      <img className={s.FriendAvatar} src={avatar} alt={name} width="48" />
      <p className={s.FriendName}>{name}</p>
    </>
  );
};

export default FriendItem;
