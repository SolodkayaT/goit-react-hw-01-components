import React, { Fragment } from "react";
import Profile from "./Profile/Profile";
import user from "./user.json";
import statistic from "./statistical-data.json";
import Statistics from "./Statistics/Statistics";
import friends from "./friends.json";
import FriendList from "./FriendList/Friendlist";
import transactions from "./transactions.json";
import TransactionHisory from "./TransactionHistory/TransactionHistory";

export default function App() {
  return (
    <Fragment>
      <Profile user={user} />
      <Statistics statistic={statistic} title="Upload stats" />
      <FriendList friends={friends} />
      <TransactionHisory transactions={transactions} />
    </Fragment>
  );
}
