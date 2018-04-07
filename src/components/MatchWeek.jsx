// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import type { Match, Season } from '../model';
import Matches from './Matches';
import './MatchWeek.css';
import SSButton from './SSButton';
import { simWeek } from '../actions/matches';
import { advanceWeek } from '../actions/season';

type Props = {
  matches?: Array<Match>,
  season: Season,
  simWeek: Function,
  advanceWeek: Function,
  weekComplete: boolean,
};

export class MatchWeek extends Component <Props> {
  simWeek = () => {
    this.props.simWeek(this.props.season.matchWeek, this.props.season.name );
  };

  advanceWeek = () => {
    if (this.props.season.matchWeek < 38) {
      this.props.advanceWeek(this.props.season.matchWeek+1, this.props.season.name);
    } else {
      console.error('Advancing season not supported');
    };
  }

  render() {
    if (this.props.season == null) {
      return null;
    };
    const { matches, season } = this.props;
    return (
      <div className='MatchWeek'>
        <h2>Week {season.matchWeek}</h2>
        <p>{season.name}</p>
        <Matches weeklyMatches={matches}/>
        <SSButton label='Sim Week' onClick={this.simWeek} disabled={this.props.weekComplete}/>
        <SSButton label='Advance Week' onClick={this.advanceWeek} disabled={!this.props.weekComplete}/>
      </div>
    );
  };
};


const mapStateToProps = (state: Object): Object => {
  return {
    matches: state.matchesReducer.matches,
    season: state.seasonReducer.season,
    weekComplete: state.seasonReducer.weekComplete,
  };
};
const mapDispatchToProps = (dispatch: Function): Object => {
  return {
    simWeek: (week: number, season: string) => dispatch(simWeek(week,season)),
    advanceWeek: (week: number, season: string ) => dispatch(advanceWeek(week, season)),
  };
};
 
export default connect(mapStateToProps, mapDispatchToProps)(MatchWeek);
