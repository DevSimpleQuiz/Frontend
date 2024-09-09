import { httpClient } from "./http";
import { Rank } from "../models/rank.model";

export const fetchRank = async () => {
  const response = await httpClient.get<Rank>("/rank/my");

  return response.data;
};

export const fetchTopRank = async () => {
  const response = await httpClient.get<TopRank>("/rank/top");

  return response.data;
};

export const fetchNearRank = async () => {
  const response = await httpClient.get<NearRank>("/rank/near");

  return response.data;
};