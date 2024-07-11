import { myPage } from "../models/myPage.model";
import { httpClient } from "./http";


export const fetchUsers = async () => {
    try{
        const response = await httpClient.get<myPage>("/users/mypage");
        return response.data;
    }catch (error) {
        console.log(error);
    }
    
};