// @flow

import React, { PureComponent } from 'react';

import CryptomonContract from 'contracts/CryptomonContract';

import CryptomonList from 'components/CryptomonList';

import type { CryptomonType } from 'types/CryptomonTypes';

type Props = {||};

type State = {|
  myCryptomons: CryptomonType[],
  account: string,
|};

export default class App extends PureComponent<Props, State> {
  state = {
    myCryptomons: [],
    account: '',
  };

  async componentDidMount() {
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0]
    this.setState({ account });
  }

  getCryptomons = async () => {
    const { account } = this.state;

    const rawCryptomons = await CryptomonContract.methods.getMyCryptomons().call();
    const myCryptomons = rawCryptomons.map(({
      _id: id,
      name,
      _type: type,
      tamer,
      dna,
      level,
      health,
      attack,
      defense,
      speed,
    }) => ({
      id,
      name,
      type,
      tamer,
      dna,
      level,
      health,
      attack,
      defense,
      speed,
    }));

    this.setState({ myCryptomons });
  }

  catchCryptomon = async () => {
    const { account } = this.state;

    const catchCryptomon = await CryptomonContract.methods.catchCryptomon.call();
    const estimateCatch = await catchCryptomon.estimateGas();

    await catchCryptomon.send({ from: account, gas: estimateCatch });

    this.getCryptomons();
  }

  render() {
    const { myCryptomons, account } = this.state;

    return (
      <div>
        <h1>Cryptomon test with EMBARK</h1>
        <button
          type='submit'
          onClick={this.catchCryptomon}>
          Attraper un cryptomon
        </button>
        <CryptomonList cryptomons={myCryptomons} account={account} getCryptomons={this.getCryptomons} />
      </div>
    );
  }
}
