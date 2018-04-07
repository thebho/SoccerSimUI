// @flow
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

type Props = {
  label: string,
  disabled: boolean,
  onClick: Function,
}

const SSButton = (props: Props) => (
  <RaisedButton
    disabled={props.disabled}
    label={props.label}
    onClick={props.onClick}
    backgroundColor='#C5E1A5'
    style={{
      margin: 10,
    }}
  />
);

export default SSButton;
