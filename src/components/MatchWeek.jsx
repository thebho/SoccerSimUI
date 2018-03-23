// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import type { Match, Season } from '../model';
import Matches from './Matches';
import './MatchWeek.css';

type Props = {
  matches?: Array<Match>,
  season?: Season,
};

export class MatchWeek extends Component <Props> {

  render() {
    if (this.props.season == null) {
      return null;
    }
    const { matches, season } = this.props;
    return (
      <div className="MatchWeek">
        <h2>Week {season.matchWeek}</h2>
        <p>{season.name}</p>
        <Matches weeklyMatches={matches}/>
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
 
// const mapDispatchToProps = dispatch => {}

export default connect(mapStateToProps)(MatchWeek);
