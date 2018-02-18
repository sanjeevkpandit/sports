import React from 'react';

import LayerHeader from './LayerHeader';
import RoundFixtures from './RoundFixtures';

const Final = (props) => {
  return (
    <div className="final-container">
      <LayerHeader title={props.layerTitle}/>
      <RoundFixtures numCards={props.numCards} fixtures={props.fixtures} />
    </div>
  );
};

export default Final;
