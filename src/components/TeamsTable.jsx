//@flow
import React, { Component } from 'react';
import './TeamsTable.css';
import type { Team } from '../model';
import { connect } from 'react-redux';
import TeamDetailModal from './TeamDetailModal';
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

type State = {
  selectedTeam: ?Team,
  modalOpen: boolean,
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

export class TeamsTable extends Component <Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      selectedTeam: null,
      modalOpen: false,
    };
  }

  handleTeamClick = (team: Team) => {
    this.setState({
      selectedTeam: team,
      modalOpen: true,
    });
  };

  handleModalClose = () => {
    this.setState({
      modalOpen: false,
      selectedTeam: null,
    });
  };

  render() {
    const { teams } = this.props;
    const { selectedTeam, modalOpen } = this.state;

    return (
      <div>
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
                style={{height: '25px', cursor: 'pointer'}}
                onClick={() => this.handleTeamClick(team)}
                hoverable={true}
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
          team={selectedTeam}
          onClose={this.handleModalClose}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { teams: state.teamsReducer.teams }
}
 
export default connect(mapStateToProps)(TeamsTable);
