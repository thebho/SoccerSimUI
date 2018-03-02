//@flow
import React from 'react';
import type { Team } from '../model';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

type Props = {
  teams: Array<Team>,
};

const TeamsTable = (props: Props): typeof Table => (
  <Table
    displaySelectAll={false}
    adjustForCheckbox={false}
  >
    <TableHeader
      adjustForCheckbox={false}
      displaySelectAll={false}
    >
      <TableRow>
        <TableHeaderColumn>Team</TableHeaderColumn>
        <TableHeaderColumn>Wins</TableHeaderColumn>
        <TableHeaderColumn>Draws</TableHeaderColumn>
        <TableHeaderColumn>Losses</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody
      displayRowCheckbox={false}
    >
    {props.teams.map((team) => (
      <TableRow
        key={team.name}
      >
        <TableRowColumn>{team.name}</TableRowColumn>      <TableRowColumn>{team.gamesWon}</TableRowColumn>
        <TableRowColumn>{team.gamesDrawn}</TableRowColumn>      <TableRowColumn>{team.gamesLost}</TableRowColumn>
      </TableRow>
    ))}
    </TableBody>
  </Table>
);

export default TeamsTable;
