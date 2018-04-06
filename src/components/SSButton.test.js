import React from 'react';
import ReactDOM from 'react-dom';
import { fn } from 'jest';
import SSButton from './SSButton';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

describe('SSButton', () => {
  it('matches snapshot', () => {
    const onClickMock = jest.fn();
    const wrapper = shallow(
      <SSButton label='Test Label' onClick={onClickMock} />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper.simulate('click');
    expect(onClickMock).toHaveBeenCalled();
  });
});
