//@flow
import React from 'react';
import {
  Dialog,
  FlatButton,
} from 'material-ui';
import type { Team, Match } from '../model';
import './TeamDetailModal.css';

type Props = {
  open: boolean,
  onClose: () => void,
  team: Team | null,
  matches: Array<Match>,
};

const TeamDetailModal = (props: Props) => {
  const { open, onClose, team, matches } = props;

  if (!team) {
    return null;
  }

  // Filter matches for this team
  const teamMatches = matches.filter(
    match => match.HomeTeam === team.Abv || match.AwayTeam === team.Abv
  );

  // Sort by MatchWeek descending and take first 5
  const recentMatches = teamMatches
    .sort((a, b) => b.MatchWeek - a.MatchWeek)
    .slice(0, 5);

  // Determine result for each match
  const matchesWithResults = recentMatches.map(match => {
    let result = 'TBD';
    let opponentAbv = '';

    if (match.HomeTeam === team.Abv) {
      opponentAbv = match.AwayTeam;
      if (
        match.HomeTeamGoals !== undefined &&
        match.AwayTeamGoals !== undefined
      ) {
        if (match.HomeTeamGoals > match.AwayTeamGoals) {
          result = 'W';
        } else if (match.HomeTeamGoals === match.AwayTeamGoals) {
          result = 'D';
        } else {
          result = 'L';
        }
      }
    } else if (match.AwayTeam === team.Abv) {
      opponentAbv = match.HomeTeam;
      if (
        match.HomeTeamGoals !== undefined &&
        match.AwayTeamGoals !== undefined
      ) {
        if (match.AwayTeamGoals > match.HomeTeamGoals) {
          result = 'W';
        } else if (match.AwayTeamGoals === match.HomeTeamGoals) {
          result = 'D';
        } else {
          result = 'L';
        }
      }
    }

    return {
      ...match,
      result,
      opponentAbv,
    };
  });

  const points = team.GamesWon * 2 + team.GamesDrawn;

  const actions = [
    <FlatButton
      label="Close"
      primary={true}
      onClick={onClose}
    />,
  ];

  return (
    <Dialog
      title={team.Name}
      actions={actions}
      modal={false}
      open={open}
      onRequestClose={onClose}
    >
      <div className="team-stats">
        <div>Won: {team.GamesWon}</div>
        <div>Drawn: {team.GamesDrawn}</div>
        <div>Lost: {team.GamesLost}</div>
        <div>GF: {team.GoalsScored}</div>
        <div>GA: {team.GoalsAllowed}</div>
        <div>Points: {points}</div>
      </div>
      <h3>Last 5 Matches</h3>
      <ul className="match-history-list">
        {matchesWithResults.map(match => (
          <li key={match.ID}>
            Week {match.MatchWeek}: vs {match.opponentAbv} ({match.result}){' '}
            {match.HomeTeamGoals}-{match.AwayTeamGoals}
          </li>
        ))}
      </ul>
    </Dialog>
  );
};

export default TeamDetailModal;
