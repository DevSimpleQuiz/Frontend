import { useEffect, useState } from "react";
import { NearRank, Rank, TopRank } from "../models/rank.model";
import { fetchNearRank, fetchRank, fetchTopRank } from "../api/rank.api";

export const useRank = () => {
  const [userRank, setUserRank] = useState<Rank | null>(null);
  const [topRank, setTopRank] = useState<TopRank | null>(null);
  const [nearRank, setNearRank] = useState<NearRank | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userRankData = await fetchRank();
        const topRankData = await fetchTopRank();
        const nearRankData = await fetchNearRank();
        setUserRank(userRankData);
        setTopRank(topRankData);
        setNearRank(nearRankData);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return { userRank, topRank, nearRank };
};
