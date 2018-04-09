import React from 'react';
import ReactDOM from 'react-dom';
import { TeamsTable } from './TeamsTable';
import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const mockTeams = [
  {
    name: 'Arsenal',
    gamesWon: 2,
    gamesLost: 0,
    gamesDrawn: 0,
    goalsScored: 20,
    goalsAllowed: 0,
    Abv: 'ARS',
    TeamID: 'ARS',
  },
  {
    name: 'Sp*rs',
    gamesWon: 0,
    gamesLost: 2,
    gamesDrawn: 0,
    goalsScored: 0,
    goalsAllowed: 20,
    Abv: 'TOT',
    TeamID: 'TOT',
  },
];
describe('TeamsTable', () => {
  // it('matches snapshot with mock teams', () => {
  //   const wrapper = shallow(
  //     <MuiThemeProvider>
  //       <TeamsTable teams={mockTeams} />
  //     </MuiThemeProvider>
  //   ).dive();
  //   expect(toJson(wrapper)).toMatchSnapshot();
  // });
  // it('renders without teams', () => {
  //   const wrapper = shallow(
  //     <MuiThemeProvider>
  //       <TeamsTable />
  //     </MuiThemeProvider>
  //   ).dive();
  //   expect(toJson(wrapper)).toMatchSnapshot();
  // });
});
