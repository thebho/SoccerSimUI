// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import type { Match, Season } from '../model';
import Matches from './Matches';
import './MatchWeek.css';
import SSButton from './SSButton';
import { simWeek } from '../actions/matches';

type Props = {
  matches?: Array<Match>,
  season: Season,
  simWeek: Function,
};

export class MatchWeek extends Component <Props> {
  simWeek = () => {
    this.props.simWeek(this.props.season.matchWeek, this.props.season.name );
  }

  render() {
    if (this.props.season == null) {
      return null;
    }
    const { matches, season } = this.props;
    return (
      <div className='MatchWeek'>
        <h2>Week {season.matchWeek}</h2>
        <p>{season.name}</p>
        <Matches weeklyMatches={matches}/>
        <SSButton label='Sim Week' onClick={this.simWeek}/>
      </div>
    );
  };
}


const mapStateToProps = (state: Object): Object => {
  return {
    matches: state.matchesReducer.matches,
    season: state.seasonReducer.season,
  }
}
const mapDispatchToProps = (dispatch: Function): Object => {
  return {
    simWeek: (week: string, season: string) => dispatch(simWeek(week,season)),
  };
};
 
export default connect(mapStateToProps, mapDispatchToProps)(MatchWeek);
