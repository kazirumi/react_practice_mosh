import { useEffect, useState } from "react";
import userService, { User } from "../services/userService";
import { CanceledError } from "../services/api-client";



const useUsers=()=>{
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState<string>("");
  
    useEffect(() => {
      const { request, cancel } = userService.getAll<User>();
  
      request
        .then((res) => setUsers(res.data))
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
        });
  
      return () => {
        setUsers([]);
        setError("");
        cancel();
      };
    }, []);

    return { users, setUsers, error, setError};
}
export default useUsers;