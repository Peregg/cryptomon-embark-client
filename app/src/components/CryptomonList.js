// @flow

import React, { PureComponent } from 'react';

import CryptomonCard from 'fragments/CryptomonCard';

import type { CryptomonType } from 'types/CryptomonTypes';

import 'styles/CryptomonList.scss';

type Props = {|
  getCryptomons: () => void,
  cryptomons: CryptomonType[],
|};

export default class CryptomonList extends PureComponent<Props> {
  async componentDidMount() {
    const { getCryptomons } = this.props;
    getCryptomons();
  }

  renderCryptomons = (): React$Element<'div'>[] => {
    const { cryptomons } = this.props;

    return cryptomons.map((cryptomon) => (
      <CryptomonCard
        cryptomon={cryptomon}
      />
    ));
  }

  render() {
    const { getCryptomons } = this.props;

    return (
      <div>
        <button onClick={() => getCryptomons()}>
          Voir mes cryptomons
        </button>
        <div className='list-container'>
          {this.renderCryptomons()}
        </div>
      </div>
    );
  }
}
