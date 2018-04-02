// @flow
import React , { Component } from 'react';
import type { Match } from '../model';
import {
  Table,
  TableBody,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

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
  return (
      <Table
      adjustForCheckbox={false}
      className="Table"
      displaySelectAll={false}
      >
      <TableBody
        displayRowCheckbox={false}
      >
        {this.props.weeklyMatches ? this.props.weeklyMatches.map(match => (
          <TableRow
            style={{height: '25px'}}
            key={match.ID}
          >
            <TableRowColumn style={styles.tableCol}>
              {match.HomeTeam}  {match.HomeTeamGoals}
            </TableRowColumn>
            <TableRowColumn style={styles.tableCol}>
              {match.AwayTeam}  {match.AwayTeamGoals}
            </TableRowColumn>
          </TableRow>
          )): null}
        </TableBody>
      </Table>
  )}
}

export default Matches;
