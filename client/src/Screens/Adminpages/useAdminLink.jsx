import { useEffect, useState } from "react";
import axios from "axios";

const useAdminLink = () => {
  const [adminLink, setAdminLink] = useState("/admin/login");

  useEffect(() => {
    axios.get("http://localhost:4000/admin/verify", {
      withCredentials: true,
    })
    .then(() => {
    console.log("Token valid:");
      setAdminLink("/admin/dashboard");
    })
    .catch(() => {
        console.log(" Token invalid:");
      setAdminLink("/admin/login");
    });
  }, []);

  return adminLink;
};

export default useAdminLink;
