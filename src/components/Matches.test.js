import React from 'react';
import ReactDOM from 'react-dom';
import { fn } from 'jest';
import Matches from './Matches';
import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const mockMatches = [
  {
    ID: 1,
    HomeTeam: 'ARS',
    AwayTeam: 'TOT',
    HomeTeamGoals: null,
    AwayTeamGoals: null,
    MatchWeek: 1,
    Season: 'TestSeason',
  },
  {
    ID: 2,
    HomeTeam: 'WHA',
    AwayTeam: 'CHE',
    HomeTeamGoals: null,
    AwayTeamGoals: null,
    MatchWeek: 1,
    Season: 'TestSeason',
  },
];

describe('TeamsTable', () => {
  it('matches snapshot with matches', () => {
    const wrapper = shallow(
      <MuiThemeProvider>
        <Matches weeklyMatches={mockMatches} />
      </MuiThemeProvider>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
