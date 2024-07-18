import { useEffect, useState } from "react";
import { Rank } from "../models/rank.model";
import { fetchRank } from "../api/rank.api";

export const useRank = () => {
  const [userRank, setUserRank] = useState<Rank | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userRankData = await fetchRank();
        setUserRank(userRankData);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return { userRank };
};

