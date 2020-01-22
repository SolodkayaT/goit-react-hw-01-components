import React from "react";
import PropTypes from "prop-types";

function TransactionHisory({ transactions }) {
  return (
    <section>
      <table class="transaction-history">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {transactions &&
            transactions.map(({ id, type, amount, currency }) => (
              <tr key={id}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  );
}
TransactionHisory.defaultProps = {
  id: "",
  type: "",
  amount: "",
  currency: ""
};
TransactionHisory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired
    })
  )
};
export default TransactionHisory;
