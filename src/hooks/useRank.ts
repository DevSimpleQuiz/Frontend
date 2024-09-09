import { useEffect, useState } from "react";
import { Rank } from "../models/rank.model";
import { fetchRank } from "../api/rank.api";

export const useRank = () => {
  const [userRank, setUserRank] = useState<Rank | null>(null);

  const fetchUserData = async () => {
    try {
      const userRankData = await fetchRank();
      setUserRank(userRankData);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchTopRankData = async () => {
    try {
      const topRankData = await fetchTopRank();
      setTopRank(topRankData);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchNearRankData = async () => {
    try {
      const nearRankData = await fetchNearRank();
      setNearRank(nearRankData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUserData();
    fetchTopRankData();
    fetchNearRankData();
  }, []);

  return { userRank };
};

