//@flow
import React, { Component } from 'react';
import './TeamsTable.css';
import type { Team, Match } from '../model';
import { connect } from 'react-redux';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import TeamDetailModal from './TeamDetailModal';

type Props = {
  teams?: Array<Team>,
  matches?: Array<Match>,
};

const styles = {
  tableCol: {
    paddingLeft: '10px',
    paddingRight: '10px',
    paddingTop: '0px',
    paddingBottom: '0px',
    width: '40px',
    height: '25px',
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

export class TeamsTable extends Component <Props> {
  constructor(props: Props) {
    super(props);
    this.state = {
      selectedTeam: null,
      modalOpen: false,
    };
  }

  handleRowClick = (team: Team) => {
    this.setState({ selectedTeam: team, modalOpen: true });
  };

  handleModalClose = () => {
    this.setState({ modalOpen: false, selectedTeam: null });
  };

  render() {
    const { teams, matches } = this.props;
    const { selectedTeam, modalOpen } = this.state;

    return (
      <>
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
              <TeamHeaderColumnDefault text='GP'/>
              <TeamHeaderColumnDefault text='W'/>
              <TeamHeaderColumnDefault text='D'/>
              <TeamHeaderColumnDefault text='L'/>
              <TeamHeaderColumnDefault text='GF'/>
              <TeamHeaderColumnDefault text='GA'/>
              <TeamHeaderColumnDefault text='GD'/>
              <TeamHeaderColumnDefault text='Points'/>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={false}
          >
            {teams ? teams.map((team) => (
              <TableRow
                key={team.TeamID}
                style={{height: '25px'}}
                onClick={() => this.handleRowClick(team)}
              >
                <TableRowColumn className="Table-Col-Nam" style={{height: '25px'}}>
                  {team.Name}
                </TableRowColumn>
                <TeamColumnDefault text={team.GamesWon + team.GamesDrawn + team.GamesLost}/>
                <TeamColumnDefault text={team.GamesWon}/>
                <TeamColumnDefault text={team.GamesDrawn}/>
                <TeamColumnDefault text={team.GamesLost}/>
                <TeamColumnDefault text={team.GoalsScored}/>
                <TeamColumnDefault text={team.GoalsAllowed}/>
                <TeamColumnDefault text={team.GoalsScored - team.GoalsAllowed}/>
                <TeamColumnDefault text={team.GamesWon * 2 + team.GamesDrawn}/>
              </TableRow>
            )): null}
          </TableBody>
        </Table>
        <TeamDetailModal
          open={modalOpen}
          onClose={this.handleModalClose}
          team={selectedTeam}
          matches={matches || []}
        />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    teams: state.teamsReducer.teams,
    matches: state.matchesReducer.matches,
  };
};

export default connect(mapStateToProps)(TeamsTable);
