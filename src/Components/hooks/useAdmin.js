import { useState, useEffect } from "react";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    const uid = user?.uid;
    if (uid) {
      fetch(`https://vast-wave-13931.herokuapp.com/admin/${uid}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setAdmin(data?.admin);
        });
    }
  }, [user]);
  return [admin]
};
export default useAdmin;
