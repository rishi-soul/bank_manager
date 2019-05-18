import React from 'react';
import axios from 'axios';
import Header from './Header';
import BankList from './BankList';

class Editor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      banks: null,
    };
  }

  componentDidMount() {
    axios
      .get('/api/banks.json')
      .then(response => this.setState({ banks: response.data }))
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { banks } = this.state;
    if (banks === null) return null;
	
	const { match } = this.props;
    const bankId = match.params.id;
    const bank = bank.find(e => e.id === Number(bankId));
	
    return (
      <div>
        <Header />
        <BankList banks={banks} />
		<PropsRoute path="/banks/:id" component={Bank} bank={bank} />
      </div>
    );
  }
 
}

Editor.propTypes = {
  match: PropTypes.shape(),
};

Editor.defaultProps = {
  match: undefined,
};

}

export default Editor;