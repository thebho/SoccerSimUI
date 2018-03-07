// @flow

export type Team = {
  name: string,
  gamesWon: number,
  gamesLost: number,
  gamesDrawn: number,
  goalsScored: number,
  goalsAllowed: number,
};

export type Action = {
  type: string,
  teams: Function,
}
