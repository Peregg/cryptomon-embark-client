import React, { PureComponent } from 'react'
import { pick } from 'lodash';

import IndividualStat from 'fragments/IndividualStat';

import bulbizarre from 'images/bulbizarre.png';
import salameche from 'images/salameche.svg';
import carapuce from 'images/carapuce.svg';

import 'styles/CryptomonCard.scss';

const cryptomonSvg = {
  bulbizarre,
  salameche,
  carapuce,
};

export default class CryptomonCard extends PureComponent {
  renderIVs = () => {
    const { cryptomon } = this.props;

    const stats = Object.keys(pick(cryptomon, [
      'health',
      'attack',
      'defense',
      'speed'
    ]));

    return stats.map((key) => (
      <IndividualStat
        type={key}
        value={cryptomon[key]}
      />
    ));
  }

  render() {
    const {
      cryptomon: {
        attack,
        defense,
        dna,
        health,
        id,
        level,
        name,
        speed,
        tamer,
        type,
      },
    } = this.props;

    return (
      <div className='card-container'>
        <p className='card-title'>{name}</p>
        <img className='card-image' src={cryptomonSvg[name.toLowerCase().replace('è', 'e')]} alt='lol' />
        <div className='card-stats'>
          {this.renderIVs()}
        </div>
      </div>
    )
  }
}
