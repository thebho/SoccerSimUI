// @flow
import React , { Component } from 'react';
import type { Match } from '../model';
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
} from 'material-ui/Table';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';


const styles = {
  tableCol: {
    height: '25px',
    textAlign: 'right',
    fontSize: '12px',
  }
}

type Props = {
  weeklyMatches?: Array<Match>
}

class Matches extends Component<Props> {
  render() {
    if (!this.props.weeklyMatches) {
      return null;
    }
    console.log('rendering')
    return (
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell numeric={false}>
                Test
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell numeric={false}>
                Test
              </TableCell>
            </TableRow>

          </TableBody>
        </Table>
      </Paper>
    )
  }
}

export default withStyles(styles)(Matches);
