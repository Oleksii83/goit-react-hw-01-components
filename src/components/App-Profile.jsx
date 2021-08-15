import Profile from "./Profile";
import user from "../template/JSON/user.json";
import Statistics from "./Statistics";
import statisticalData from "../template/JSON/statistical-data.json";
import FriendList from "./FriendList";
import friendsData from "../template/JSON/friends.json";
import TransactionHistory from "./TransactionHistory";
import transactionsData from "../template/JSON/transactions.json";

export default function App() {
  return (
    <div>
      <Profile
        key={user.tag}
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />

      {friendsData.map((friend) => (
        <FriendList
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}

      <TransactionHistory items={transactionsData} />
    </div>
  );
}
