import { httpClient } from "./http";
import { AllRank, NearRank, Rank, TopRank } from "../models/rank.model";

export const fetchRank = async () => {
  const response = await httpClient.get<Rank>("/ranks/my");

  return response.data;
};

export const fetchTopRank = async () => {
  const response = await httpClient.get<TopRank>("/ranks/top");

  return response.data;
};

export const fetchNearRank = async () => {
  const response = await httpClient.get<NearRank>("/ranks/nearby");

  return response.data;
};

export const fetchAllRank = async (page: number, limit: number) => {
  const response = await httpClient.get<AllRank>("/ranks", {
    params: {
      page: page,
      limit: limit,
    },
    withCredentials: true,
  });

  return response.data;
};