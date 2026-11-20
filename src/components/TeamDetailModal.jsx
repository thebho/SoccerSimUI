//@flow
import React, { Component } from 'react';
import './TeamDetailModal.css';
import type { Team, Match } from '../model';
import { connect } from 'react-redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

type Props = {
  open: boolean,
  team: ?Team,
  matches: Array<Match>,
  onClose: Function,
  currentWeek: number,
  seasonName: string,
};

const styles = {
  tableCol: {
    paddingLeft: '8px',
    paddingRight: '8px',
    paddingTop: '0px',
    paddingBottom: '0px',
    height: '25px',
    textAlign: 'center',
  },
  teamNameCol: {
    paddingLeft: '10px',
    paddingRight: '10px',
    paddingTop: '0px',
    paddingBottom: '0px',
    height: '25px',
  },
};

export class TeamDetailModal extends Component<Props> {
  getTeamMatches = (teamName: string): Array<Match> => {
    const { matches } = this.props;
    return matches.filter(
      match =>
        match.HomeTeam === teamName || match.AwayTeam === teamName
    );
  };

  getLastFiveMatches = (teamName: string): Array<Match> => {
    const allMatches = this.getTeamMatches(teamName);
    return allMatches.slice(-5).reverse();
  };

  getUpcomingFixture = (teamName: string): ?Match => {
    const { matches, currentWeek } = this.props;
    const upcoming = matches.find(
      match =>
        (match.HomeTeam === teamName || match.AwayTeam === teamName) &&
        match.MatchWeek > currentWeek
    );
    return upcoming;
  };

  getMatchResult = (match: Match, teamName: string): string => {
    const isHome = match.HomeTeam === teamName;
    const teamGoals = isHome ? match.HomeTeamGoals : match.AwayTeamGoals;
    const opponentGoals = isHome ? match.AwayTeamGoals : match.HomeTeamGoals;

    if (teamGoals > opponentGoals) return 'W';
    if (teamGoals < opponentGoals) return 'L';
    return 'D';
  };

  getOpponentName = (match: Match, teamName: string): string => {
    return match.HomeTeam === teamName ? match.AwayTeam : match.HomeTeam;
  };

  render() {
    const { open, team, onClose } = this.props;

    if (!team) {
      return null;
    }

    const lastFive = this.getLastFiveMatches(team.Name);
    const upcoming = this.getUpcomingFixture(team.Name);

    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onClick={onClose}
      />,
    ];

    return (
      <Dialog
        title={`${team.Name} - Season Details`}
        actions={actions}
        modal={false}
        open={open}
        onRequestClose={onClose}
        autoScrollBodyContent={true}
      >
        <div className="TeamDetailModal">
          <div className="TeamStats">
            <h3>Season Statistics</h3>
            <div className="StatsGrid">
              <div className="StatItem">
                <span className="StatLabel">Games Played:</span>
                <span className="StatValue">
                  {team.GamesWon + team.GamesDrawn + team.GamesLost}
                </span>
              </div>
              <div className="StatItem">
                <span className="StatLabel">Wins:</span>
                <span className="StatValue">{team.GamesWon}</span>
              </div>
              <div className="StatItem">
                <span className="StatLabel">Draws:</span>
                <span className="StatValue">{team.GamesDrawn}</span>
              </div>
              <div className="StatItem">
                <span className="StatLabel">Losses:</span>
                <span className="StatValue">{team.GamesLost}</span>
              </div>
              <div className="StatItem">
                <span className="StatLabel">Goals For:</span>
                <span className="StatValue">{team.GoalsScored}</span>
              </div>
              <div className="StatItem">
                <span className="StatLabel">Goals Against:</span>
                <span className="StatValue">{team.GoalsAllowed}</span>
              </div>
              <div className="StatItem">
                <span className="StatLabel">Goal Difference:</span>
                <span className="StatValue">
                  {team.GoalsScored - team.GoalsAllowed}
                </span>
              </div>
              <div className="StatItem">
                <span className="StatLabel">Points:</span>
                <span className="StatValue">
                  {team.GamesWon * 2 + team.GamesDrawn}
                </span>
              </div>
            </div>
          </div>

          <div className="MatchHistory">
            <h3>Last 5 Matches</h3>
            {lastFive.length > 0 ? (
              <Table displaySelectAll={false} adjustForCheckbox={false}>
                <TableHeader
                  adjustForCheckbox={false}
                  displaySelectAll={false}
                >
                  <TableRow style={styles.tableCol}>
                    <TableHeaderColumn style={styles.teamNameCol}>
                      Opponent
                    </TableHeaderColumn>
                    <TableHeaderColumn style={styles.tableCol}>
                      Week
                    </TableHeaderColumn>
                    <TableHeaderColumn style={styles.tableCol}>
                      Result
                    </TableHeaderColumn>
                    <TableHeaderColumn style={styles.tableCol}>
                      Score
                    </TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                  {lastFive.map((match, idx) => {
                    const opponent = this.getOpponentName(match, team.Name);
                    const result = this.getMatchResult(match, team.Name);
                    const isHome = match.HomeTeam === team.Name;
                    const score = isHome
                      ? `${match.HomeTeamGoals}-${match.AwayTeamGoals}`
                      : `${match.AwayTeamGoals}-${match.HomeTeamGoals}`;

                    return (
                      <TableRow key={idx} style={{ height: '25px' }}>
                        <TableRowColumn
                          style={styles.teamNameCol}
                        >
                          {opponent}
                        </TableRowColumn>
                        <TableRowColumn style={styles.tableCol}>
                          {match.MatchWeek}
                        </TableRowColumn>
                        <TableRowColumn
                          style={{
                            ...styles.tableCol,
                            color:
                              result === 'W'
                                ? 'green'
                                : result === 'L'
                                ? 'red'
                                : 'orange',
                            fontWeight: 'bold',
                          }}
                        >
                          {result}
                        </TableRowColumn>
                        <TableRowColumn style={styles.tableCol}>
                          {score}
                        </TableRowColumn>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            ) : (
              <p>No matches played yet.</p>
            )}
          </div>

          {upcoming && (
            <div className="UpcomingFixture">
              <h3>Next Fixture</h3>
              <div className="FixtureInfo">
                <p>
                  <strong>Week {upcoming.MatchWeek}:</strong>{' '}
                  {upcoming.HomeTeam} vs {upcoming.AwayTeam}
                </p>
              </div>
            </div>
          )}
        </div>
      </Dialog>
    );
  }
}

const mapStateToProps = state => {
  return {
    matches: state.matchesReducer.matches || [],
    currentWeek: state.seasonReducer.matchWeek,
    seasonName: state.seasonReducer.name,
  };
};

export default connect(mapStateToProps)(TeamDetailModal);
