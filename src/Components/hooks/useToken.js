import { useEffect } from "react";
import { useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    console.log("user inside useToken", user);
    const uid = user?.user?.uid;
    const userName = user?.user?.displayName;
    const userPhoto = user?.user?.photoURL
    const currentUser = {uid : uid, userName:userName, userPhoto:userPhoto}
    if(uid){
        fetch(`https://vast-wave-13931.herokuapp.com/user/${uid}`, {
            method:'PUT',
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(currentUser)
        })
        .then(res => res.json())
        .then(data => {console.log(data)
        
          const accessToken = data.accessToken;
          
          localStorage.setItem('accesstoken', accessToken)
          setToken(accessToken)
        })
    }
  }, [user]);
  return [token];
};
export default useToken;
