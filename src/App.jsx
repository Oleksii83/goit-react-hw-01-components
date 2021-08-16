import Profile from "./components/Profile/Profile";
import user from "./template/JSON/user.json";
import Statistics from "./components/Statistics/Statistics";
import statisticalData from "./template/JSON/statistical-data.json";
import FriendList from "./components/FriendList/FriendList";
import friendsData from "./template/JSON/friends.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import transactionsData from "./template/JSON/transactions.json";

export default function App() {
  return (
    <div>
      <Profile items={user} />

      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />

      <FriendList friends={friendsData} />

      <TransactionHistory items={transactionsData} />
    </div>
  );
}
