//@flow
import React from 'react';
import './TeamDetailModal.css';
import type { Team, Match } from '../model';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

type Props = {
  open: boolean,
  onClose: () => void,
  team: ?Team,
  matches: Array<Match>,
};

const TeamDetailModal = (props: Props) => {
  const { open, onClose, team, matches } = props;

  if (!team) {
    return null;
  }

  // Filter matches for this team and get last 5
  const teamMatches = matches
    .filter(match => match.HomeTeam === team.Name || match.AwayTeam === team.Name)
    .sort((a, b) => b.MatchWeek - a.MatchWeek)
    .slice(0, 5);

  // Determine result for each match
  const getMatchResult = (match: Match) => {
    const isHome = match.HomeTeam === team.Name;
    const teamGoals = isHome ? match.HomeTeamGoals : match.AwayTeamGoals;
    const opponentGoals = isHome ? match.AwayTeamGoals : match.HomeTeamGoals;

    if (teamGoals > opponentGoals) return 'W';
    if (teamGoals < opponentGoals) return 'L';
    return 'D';
  };

  const getOpponent = (match: Match) => {
    return match.HomeTeam === team.Name ? match.AwayTeam : match.HomeTeam;
  };

  const getScore = (match: Match) => {
    const isHome = match.HomeTeam === team.Name;
    if (isHome) {
      return `${match.HomeTeamGoals}-${match.AwayTeamGoals}`;
    }
    return `${match.AwayTeamGoals}-${match.HomeTeamGoals}`;
  };

  const actions = [
    <FlatButton
      label="Close"
      primary={true}
      onClick={onClose}
    />,
  ];

  const gamesPlayed = team.GamesWon + team.GamesDrawn + team.GamesLost;
  const points = team.GamesWon * 2 + team.GamesDrawn;
  const goalDifference = team.GoalsScored - team.GoalsAllowed;

  return (
    <Dialog
      title={team.Name}
      actions={actions}
      modal={false}
      open={open}
      onRequestClose={onClose}
      contentStyle={{ maxWidth: '500px' }}
    >
      <div className="TeamDetailModal-Content">
        <div className="TeamDetailModal-Stats">
          <div className="TeamDetailModal-StatItem">
            <span className="TeamDetailModal-StatLabel">Games Played</span>
            <span className="TeamDetailModal-StatValue">{gamesPlayed}</span>
          </div>
          <div className="TeamDetailModal-StatItem">
            <span className="TeamDetailModal-StatLabel">Wins</span>
            <span className="TeamDetailModal-StatValue">{team.GamesWon}</span>
          </div>
          <div className="TeamDetailModal-StatItem">
            <span className="TeamDetailModal-StatLabel">Draws</span>
            <span className="TeamDetailModal-StatValue">{team.GamesDrawn}</span>
          </div>
          <div className="TeamDetailModal-StatItem">
            <span className="TeamDetailModal-StatLabel">Losses</span>
            <span className="TeamDetailModal-StatValue">{team.GamesLost}</span>
          </div>
          <div className="TeamDetailModal-StatItem">
            <span className="TeamDetailModal-StatLabel">Goals For</span>
            <span className="TeamDetailModal-StatValue">{team.GoalsScored}</span>
          </div>
          <div className="TeamDetailModal-StatItem">
            <span className="TeamDetailModal-StatLabel">Goals Against</span>
            <span className="TeamDetailModal-StatValue">{team.GoalsAllowed}</span>
          </div>
          <div className="TeamDetailModal-StatItem">
            <span className="TeamDetailModal-StatLabel">Goal Difference</span>
            <span className="TeamDetailModal-StatValue">{goalDifference}</span>
          </div>
          <div className="TeamDetailModal-StatItem">
            <span className="TeamDetailModal-StatLabel">Points</span>
            <span className="TeamDetailModal-StatValue">{points}</span>
          </div>
        </div>

        <div className="TeamDetailModal-MatchHistory">
          <h3>Recent Matches</h3>
          {teamMatches.length > 0 ? (
            <ul className="TeamDetailModal-MatchList">
              {teamMatches.map((match) => (
                <li key={match.ID} className="TeamDetailModal-MatchItem">
                  <span className="TeamDetailModal-Week">Week {match.MatchWeek}:</span>
                  <span className="TeamDetailModal-Opponent">vs {getOpponent(match)}</span>
                  <span className={`TeamDetailModal-Result TeamDetailModal-Result-${getMatchResult(match)}`}>
                    {getMatchResult(match)}
                  </span>
                  <span className="TeamDetailModal-Score">{getScore(match)}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p>No matches found</p>
          )}
        </div>
      </div>
    </Dialog>
  );
};

export default TeamDetailModal;
