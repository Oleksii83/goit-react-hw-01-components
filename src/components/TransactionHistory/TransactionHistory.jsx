import "./TransactionHistory.style.css";
const TransactionHistory = ({ items }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr className="description">
          <th className="row">Type</th>
          <th className="row">Amount</th>
          <th className="row">Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => (
          <tr className="itemRow" key={item.id}>
            <td className="rowLine">{item.type}</td>
            <td className="rowLine">{item.amount}</td>
            <td className="rowLine">{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
