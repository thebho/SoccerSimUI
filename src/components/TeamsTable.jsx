//@flow
import React from 'react';
import './TeamsTable.css';
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
  teams?: Array<Team>,
};

const styles = {
  tableCol: {
    paddingLeft: '10px',
    paddingRight: '10px',
    width: '40px',
    textAlign: 'center',
  },
};

const TeamHeaderColumnDefault = (props: {text: string}) => {
  return (
    <TableHeaderColumn
      style={styles.tableCol}
    >
      {props.text}
    </TableHeaderColumn>
  )
}
const TeamColumnDefault = (props: {text: number}) => {
  return (
    <TableRowColumn
      style={styles.tableCol}
    >
    {props.text}
    </TableRowColumn>
  )
}

const TeamsTable = (props: Props): typeof Table => (
  <Table
    displaySelectAll={false}
    adjustForCheckbox={false}
    className="Table"
  >
    <TableHeader
      adjustForCheckbox={false}
      displaySelectAll={false}
    >
      <TableRow
      style={styles.tableCol}
      >
        <TableHeaderColumn className="Table-Col-Nam">
          Team
        </TableHeaderColumn>
        <TeamHeaderColumnDefault text='W'/>
        <TeamHeaderColumnDefault text='D'/>
        <TeamHeaderColumnDefault text='L'/>
        <TeamHeaderColumnDefault text='GF'/>
        <TeamHeaderColumnDefault text='GA'/>
        <TeamHeaderColumnDefault text='Points'/>
      </TableRow>
    </TableHeader>
    <TableBody
      displayRowCheckbox={false}
    >
    {props.teams ? props.teams.map((team) => (
      <TableRow
        key={team.name}
      >
        <TableRowColumn className="Table-Col-Nam">
          {team.name}
        </TableRowColumn>
        <TeamColumnDefault text={team.gamesWon}/>
        <TeamColumnDefault text={team.gamesDrawn}/>
        <TeamColumnDefault text={team.gamesLost}/>
        <TeamColumnDefault text={team.goalsScored}/>
        <TeamColumnDefault text={team.goalsAllowed}/>
        <TeamColumnDefault text={team.gamesWon * 2 + team.gamesDrawn}/>
      </TableRow>
    )): null}
    </TableBody>
  </Table>
);

export default TeamsTable;
