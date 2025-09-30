// components/PrivateRoute.jsx
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { getToken, removeToken } from "../utils/auth";

export default function PrivateRoute({ children }) {
  const [isValid, setIsValid] = useState(null);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      setIsValid(false);
      return;
    }

    fetch("http://localhost:3000/auth/verify", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.valid) {
          setIsValid(true);
        } else {
          removeToken();
          setIsValid(false);
        }
      })
      .catch(() => {
        removeToken();
        setIsValid(false);
      });
  }, []);

  if (isValid === null) return <p>Loading...</p>;
  if (!isValid) return <Navigate to="/admin/login" />;

  return children;
}
