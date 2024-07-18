import { httpClient } from "./http";
import { Rank } from "../models/rank.model";

export const fetchRank = async () => {
  const response = await httpClient.get<Rank>("/rank");

  return response.data;
};
