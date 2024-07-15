export interface Rank {
  id: string;
  rank?: number;
  totalQuizScore?: number;
  totalQuizCount?: number;
  totalSolvedQuizCount?: number;
}

export interface TopRank {
  topRankers: Ranker[];
}

export interface NearRank {
  nearRankers: Ranker[];
}

export interface Ranker {
  id: string;
  rank: number;
  totalScore: number;
}
