import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import FixtureTeam from './partials/FixtureTeam';
import FixtureResult from './partials/FixtureResult';

const ScoreCard = props => {
  let fixture = props.fixture;
  let isHomeTeamWinner = false,
    isAwayTeamWinner = false;

  if (fixture.status.toLowerCase() === 'played') {
    isHomeTeamWinner = fixture.homeTeamScore > fixture.awayTeamScore;
    isAwayTeamWinner = fixture.awayTeamScore > fixture.homeTeamScore;
  }

  const homeTeamClassNames = `home-team text-right ${isHomeTeamWinner ? 'winner' : ''}`;
  const awayTeamClassNames = `away-team text-left ${isAwayTeamWinner ? 'winner' : ''}`;

  const scoreCardEl = (
    <div className="score-card">
      <div className="score-brief">
        <FixtureTeam team={fixture.homeTeam} classNames={homeTeamClassNames} />
        <FixtureResult fixture={fixture} />
        <FixtureTeam team={fixture.awayTeam} classNames={awayTeamClassNames} />
      </div>
    </div>
  );

  let scoreCardLinkEl = scoreCardEl;

  if (props.fixtureLink) {
    const fixtureLink = props.fixtureLink.replace(':fixtureId', fixture.id);

    scoreCardLinkEl = (
      <Link
        key={fixture.id}
        to={{
          pathname: fixtureLink,
          state: {
            modal: true,
            data: fixture
          }
        }}
      >
        {scoreCardEl}
      </Link>
    );
  }

  return <div className="score-card-wrapper">{scoreCardLinkEl}</div>;
};

ScoreCard.propTypes = {
  fixture: PropTypes.object,
  fixtureLink: PropTypes.string
};

export default ScoreCard;
