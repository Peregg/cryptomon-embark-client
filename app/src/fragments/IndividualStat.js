// @flow

import React, { PureComponent } from 'react';

import { STATS } from 'constants/individualStatConstants';

import 'styles/IndividualStat.scss';

type Props = {|
  value: string,
  type: string,
|};

export default class IndividualStat extends PureComponent<Props> {
  render() {
    const { value, type } = this.props;

    return (
      <div className='stat-container'>
        <img className='stat-icon' src={STATS[type].icon} alt={STATS[type].wording} />
        <p className='stat-value'>{value}</p>
      </div>
    )
  }
}
