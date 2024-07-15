import { useEffect, useState } from "react";
import { fetchUsers } from "../api/myPage.api";
import { myPage } from "../models/myPage.model";

export const useUsers = () => {
    const [users, setUsers] = useState<myPage>();
        useEffect(()=>{
            fetchUsers().then(
                (user) =>{
                    if(!user) return;
                    setUsers(user);
                }
            );
        },[]);
    return {users};
};