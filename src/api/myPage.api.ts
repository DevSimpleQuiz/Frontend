import axios from "axios";
import { myPage } from "../models/myPage.model";
import { removeToken } from "../store/authStore";
import { httpClient } from "./http";


export const fetchUsers = async () => {
  try{
    const response = await httpClient.get<myPage>("/users/mypage");
    return response.data;
  }catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      if (error.response && error.response.status === 401) {
        console.log('Unauthorized access - 401 error');
      }else if (error.response && error.response.status === 403){
        console.log('Unauthorized access - 403 error');
      }
    } else {
      console.log('Unexpected error:', error);
    }
  }
};