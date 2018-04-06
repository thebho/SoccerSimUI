// @flow
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

type Props = {
  label: string,
  onClick: Function,
}

const SSButton = (props: Props) => (
  <RaisedButton
    label={props.label}
    onClick={props.onClick}
    backgroundColor="#C5E1A5"
    style={{
      margin: 10,
    }}
  />
)

export default SSButton;
