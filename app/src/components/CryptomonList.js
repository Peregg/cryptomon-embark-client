import React, { PureComponent } from 'react';

export default class CryptomonList extends PureComponent {
  async componentDidMount() {
    const { getCryptomons } = this.props;
    getCryptomons();
  }

  renderCryptomons = () => {
    const { cryptomons } = this.props;

    return cryptomons.map(({ name, type }) => <li>{`${name} de type ${type}`}</li>);
  }

  render() {
    const { getCryptomons } = this.props;

    return (
      <div>
        <button onClick={() => getCryptomons()}>
          Voir mes cryptomons
        </button>
        <ul>
          {this.renderCryptomons()}
        </ul>
      </div>
    );
  }
}
