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

var mockSeason: Season = {
  name: 'TestSeason',
  matchWeek: 1,
};
describe('MatchWeek', () => {
  it('matches snapshot with matches', () => {
    const wrapper = shallow(
      <MuiThemeProvider>
        <MatchWeek
          season={mockSeason}
          matches={mockMatches}
          weekComplete={false}
        />
      </MuiThemeProvider>
    ).dive();
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders without matches', () => {
    const wrapper = shallow(
      <MuiThemeProvider>
        <MatchWeek season={mockSeason} weekComplete={false} />
      </MuiThemeProvider>
    ).dive();
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders with weekComplete', () => {
    const wrapper = shallow(
      <MuiThemeProvider>
        <MatchWeek season={mockSeason} weekComplete={true} />
      </MuiThemeProvider>
    ).dive();
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders without season', () => {
    const wrapper = shallow(
      <MuiThemeProvider>
        <MatchWeek />
      </MuiThemeProvider>
    ).dive();
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('calls simWeek', () => {
    const simWeek = jest.fn();
    const wrapper = shallow(
      <MuiThemeProvider>
        <MatchWeek season={mockSeason} simWeek={simWeek} />
      </MuiThemeProvider>
    ).dive();
    wrapper.instance().simWeek();
    expect(simWeek).toHaveBeenCalledWith(1, 'TestSeason');
  });
  it('calls advanceWeek', () => {
    const advanceWeek = jest.fn();
    const wrapper = shallow(
      <MuiThemeProvider>
        <MatchWeek season={mockSeason} advanceWeek={advanceWeek} />
      </MuiThemeProvider>
    ).dive();
    wrapper.instance().advanceWeek();
    expect(advanceWeek).toHaveBeenCalledWith(2, 'TestSeason');
  });
  it('calls advanceWeek', () => {
    const advanceWeek = jest.fn();
    const wrapper = shallow(
      <MuiThemeProvider>
        <MatchWeek
          season={{ ...mockSeason, matchWeek: 38 }}
          advanceWeek={advanceWeek}
        />
      </MuiThemeProvider>
    ).dive();
    wrapper.instance().advanceWeek();
    expect(advanceWeek).toHaveBeenCalledTimes(0);
  });
});
