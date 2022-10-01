import { useState, useEffect } from "react";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    const uid = user?.uid;
    if (uid) {
      fetch(`http://localhost:5000/admin/${uid}`, {
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
