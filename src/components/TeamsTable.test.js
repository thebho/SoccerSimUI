import React from 'react';
import ReactDOM from 'react-dom';
import TeamsTable from './TeamsTable';
import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';

const mockTeams = [
  {
    name: 'Arsenal',
    gamesWon: 0,
    gamesLost: 0,
    gamesDrawn: 0,
    goalsScored: 0,
    goalsAllowed: 0,
  },
  {
    name: 'Sp*rs',
    gamesWon: 0,
    gamesLost: 0,
    gamesDrawn: 0,
    goalsScored: 0,
    goalsAllowed: 0,
  },
];
describe('App.js', () => {
  it('matches snapshot with defaults', () => {
    const wrapper = shallow(<TeamsTable teams={mockTeams} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
