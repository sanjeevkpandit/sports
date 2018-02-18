import React from 'react';

import Player from './Player';
import MatchTime from './MatchTime';

const Card = (props) => {
  return (
    <div className="card">
      <MatchTime {...props.matchTime}/>
      <Player {...props.playerUp} />
      <Player {...props.playerDown} />
    </div>
  );
};

export default Card;
