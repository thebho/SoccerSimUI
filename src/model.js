// @flow

export type Team = {
  Abv: string,
  Name: string,
  GamesWon: number,
  GamesLost: number,
  GamesDrawn: number,
  GoalsScored: number,
  GoalsAllowed: number,
};

export type Action = {
  type: string,
  teams: Function,
}
