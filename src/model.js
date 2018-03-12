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
  teams?: Function,
  season: Object,
  matches?: Function,
}

export type Season = {
  name: string,
  matchWeek: number,
}

export type Match = {
  ID: number,
	HomeTeam: string,
	AwayTeam: string,
	HomeTeamGoals: number,
	AwayTeamGoals: number,
	MatchWeek: number,
	Season: string,
}
