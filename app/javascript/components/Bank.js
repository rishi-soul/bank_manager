import React from 'react';
import PropTypes from 'prop-types';

const Bank = ({ bank }) => (
  <div>
    <h2>
      {bank.account_number}
      {' - '}
      {event.bank_nickname}
    </h2>
    <ul>
      <li>
        <strong>Account Number:</strong>
        {' '}
        {bank.account_number}
      </li>
      <li>
        <strong>Routing number:</strong>
        {' '}
        {bank.routing_number}
      </li>
      <li>
        <strong>Bank Nick namw</strong>
        {' '}
        {bank.bank_nickname}
      </li>
      <li>
        <strong>Address:</strong>
        {' '}
        {bank.bank_address}
      </li>
    </ul>
  </div>
);

Bank.propTypes = {
  bank: PropTypes.shape(),
};

Bank.defaultProps = {
  bank: undefined,
};

export default Bank;