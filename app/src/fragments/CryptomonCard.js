import React, { PureComponent } from 'react'

import bulbizarre from 'images/bulbizarre.png';
import salameche from 'images/salameche.svg';
import carapuce from 'images/carapuce.svg';

import 'fragments/CryptomonCard.css';

const cryptomonSvg = {
  bulbizarre,
  salameche,
  carapuce,
};

export default class CryptomonCard extends PureComponent {
  render() {
    const {
      name,
    } = this.props;

    return (
      <div clasName='card-container'>
        <img className='card-image' src={cryptomonSvg[name.toLowerCase().replace('è', 'e')]} alt='lol' />
        <p>{name}</p>
      </div>
    )
  }
}
