import React from 'react';
import ReactDOM from 'react-dom';
import TeamsTable from './TeamsTable';
import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';

const mockTeams = [
  {
    name: 'Arsenal',
    gamesWon: 2,
    gamesLost: 0,
    gamesDrawn: 0,
    goalsScored: 20,
    goalsAllowed: 0,
  },
  {
    name: 'Sp*rs',
    gamesWon: 0,
    gamesLost: 2,
    gamesDrawn: 0,
    goalsScored: 0,
    goalsAllowed: 20,
  },
];
describe('TeamsTable', () => {
  it('matches snapshot with mock teams', () => {
    const wrapper = shallow(<TeamsTable teams={mockTeams} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders without teams', () => {
    const wrapper = shallow(<TeamsTable />);
    expect(toJson(wrapper)).toMatchSnapshot();
  })
});
