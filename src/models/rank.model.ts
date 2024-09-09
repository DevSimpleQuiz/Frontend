export interface Rank {
  id: string;
  rank?: number;
  totalQuizScore?: number;
  totalQuizCount?: number;
  totalSolvedQuizCount?: number;
  topRankers?: Ranker[];
  nearRankers?: Ranker[];
}

export interface Ranker {
  id: string;
  rank: number;
  score: number;
}
