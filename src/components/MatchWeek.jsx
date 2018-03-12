// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/matches';
import { bindActionCreators } from 'redux';
import type { Match, Season } from '../model';

import './MatchWeek.css';

type Props = {
  matches?: Array<Match>,
  season: Season,
};

export class MatchWeek extends Component <Props> {

  render() {
    const { matches, season } = this.props;
    return (
      <div>
      <h1>{season.name}</h1>
        <h2>Matchweek {season.matchWeek}</h2>
        <p>Placeholder for Weekly Matchups and simming</p>
        {matches ? matches.map((match) => (
          <div key={match.ID}>{match.HomeTeam} {match.AwayTeam}</div>
        )): null}
      </div>
    );
  };
}


const mapStateToProps = state => {
  return {
    matches: state.matchesReducer.matches,
    season: state.seasonReducer.season,
  }
}
 
const mapDispatchToProps = dispatch => {}

export default connect(mapStateToProps)(MatchWeek);
