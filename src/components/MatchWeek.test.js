import React from 'react';
import ReactDOM from 'react-dom';
import { MatchWeek } from './MatchWeek';
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
describe('MatchWeek', () => {
  it('matches snapshot with matches', () => {
    const wrapper = shallow(
      <MuiThemeProvider>
        <MatchWeek
          season={{ name: 'TestSeason', matchWeek: 1 }}
          matches={mockMatches}
        />
      </MuiThemeProvider>
    ).dive();
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders without matches', () => {
    const wrapper = shallow(
      <MuiThemeProvider>
        <MatchWeek season={{ name: 'TestSeason', matchWeek: 1 }} />
      </MuiThemeProvider>
    ).dive();
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
