import React from 'react';
import PropTypes from 'prop-types';

class BankList extends React.Component {
  renderBanks() {
    const { banks } = this.props;
    banks.sort(
      (a, b) => b.account_number - a.account_number,
    );
	
		
    return banks.map(bank => (
      <li key={bank.id}>
		<Link to={`/banks/${bank.id}`}>
        {event.account_number}
        {' - '}
        {bank.bank_nickname}
		</Link>
      </li>
    ));
  }

  render() {
    return (
      <section>
        <h2>Banks</h2>
        <ul>{this.renderBanks()}</ul>
      </section>
    );
  }
}

BankList.propTypes = {
  banks: PropTypes.arrayOf(PropTypes.object),
};

BankList.defaultProps = {
  banks: [],
};

export default BankList;