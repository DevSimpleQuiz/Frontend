import { useEffect, useState } from "react";
import { fetchUsers } from "../api/myPage.api";
import { myPage } from "../models/myPage.model";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import { logout } from "../api/auth.api";

export const useUsers = () => {
  const navigate = useNavigate();
  const { storeLogout } = useAuthStore();
  const [users, setUsers] = useState<myPage>();
  useEffect(()=>{
    fetchUsers().then(
      (user) =>{
        if(user){
          setUsers(user);
        }else{
          logout();
          storeLogout();
          navigate("/users/login");
        }
      }
    );
  },[]);
return {users};

};