// @flow
import React from 'react';
import Button from 'material-ui/Button';

type Props = {
  label: string,
  disabled: boolean,
  onClick: Function,
}

const SSButton = (props: Props) => (
  <Button
    variant='raised'
    disabled={props.disabled}
    onClick={props.onClick}
    style={{
      margin: 10,
      backgroundColor: '#C5E1A5',
    }}
    >
    {props.label}
  </Button>
);

export default SSButton;
