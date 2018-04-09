import React, { Component } from 'react';
import './TeamsTable.css';
import type { Team } from '../model';
import { connect } from 'react-redux';

import Table, {
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
} from 'material-ui/Table';

const columnData = [
  { id: 'team', numeric: false, label: 'Team'},
  { id: 'gp', numeric: true, label: 'GP'},
  { id: 'wins', numeric: true, label: 'W'},
  { id: 'draws', numeric: true, label: 'D'},
  { id: 'losses', numeric: true, label: 'L'},
  { id: 'goalsFor', numeric: true, label: 'GF'},
  { id: 'goalsAgainst', numeric: true, label: 'GA'},
  { id: 'goalDifference', numeric: true, label: 'GD'},
  { id: 'points', numeric: true, label: 'Points'},
];

class TeamsTable extends Component<*> {
  render(){
    return(
      <Table className='Table'>
        <TableHead>
          <TableRow>
            {columnData.map(column => {
              return (
                <TableCell
                  key={column.id}
                  numeric={column.numeric}
                  sortDirection={ column.id === 'points' ? 'asc' : false}
                >
                {column.label}
              </TableCell>
              )
            })}
          </TableRow>
        </TableHead>
      </Table>
    )
  }
}

export default TeamsTable;
