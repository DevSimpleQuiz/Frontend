import { httpClient } from "./http";
import { NearRank, Rank, TopRank } from "../models/rank.model";

export const fetchRank = async () => {
  const response = await httpClient.get<Rank>("/rank");

  return response.data;
};

export const fetchTopRank = async () => {
  const response = await httpClient.get<TopRank>("/rank");

  return response.data;
};

export const fetchNearRank = async () => {
  const response = await httpClient.get<NearRank>("/rank");

  return response.data;
};