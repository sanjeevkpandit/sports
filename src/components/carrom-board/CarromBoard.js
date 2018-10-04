import axios from 'axios';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import FixtureService from '../../services/FixtureService';

import Content from './views/Content';
import LoadingIcon from '../common/loadingIcon';

class CarromBoard extends Component {
  state = {
    data: [],
    error: false,
    loading: true
  };

  componentDidMount() {
    this.props.handleChangePageTitle('Carrom Board');
    this.fetchData();
  }

  fetchData = () => {
    axios
      .get('https://script.google.com/macros/s/AKfycbyYfBIlzlDhbFKprirQTDeeb_-ezxQkYsYq9HyEDT9LAl7HLkPc/exec')
      .then(response => {
        this.setState({
          data: this.getSanitizedData(response.data.data)
        });

        this.props.handleChangePageTitle(this.state.data.details.title, this.state.data.details.year);
      })
      .catch(() => {
        this.setState({
          error: true
        });
      })
      .then(() => {
        this.setState({
          loading: false
        });
      });
  };

  getSanitizedData = rawData => {
    const data = {
      teams: rawData.teams,
      rounds: rawData.rounds,
      details: rawData.details,
      statuses: rawData.statuses,
      allFixtures: rawData.fixtures,
      categories: rawData.categories,
      recents: FixtureService.getRecentFixtures(rawData, 5),
      results: FixtureService.getResults(rawData.fixtures),
      fixtures: FixtureService.getFixtures(rawData.fixtures)
    };

    return data;
  };

  render() {
    if (this.state.loading) {
      return (
        <div className="container">
          <LoadingIcon />
        </div>
      );
    }

    if (this.state.error) {
      return (
        <div className="container">
          <div className="alert alert-error">Unable to load data. Please try again later.</div>
        </div>
      );
    }

    return (
      <div className="carrom-board">
        <div className="tournament-content">
          <Content routeProps={this.props.routeProps} data={this.state.data} />
        </div>
      </div>
    );
  }
}

CarromBoard.propTypes = {
  routeProps: PropTypes.object,
  handleChangePageTitle: PropTypes.func
};

export default CarromBoard;
