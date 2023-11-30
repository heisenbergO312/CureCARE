import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

import { backendLink } from "..";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const login = async (email, password, role) => {
    setError(null);
    const user = { email, password, role };
    try {
      const response = await axios.post(`${backendLink}/api/auth/login`, user);

      navigate("/");
      localStorage.clear();
      localStorage.setItem(
        "user",
        JSON.stringify({
          userId: response.data.user._id,
          email,
          role,
          name: response.data.user.name,
        })
      );
      dispatch({ type: "LOGIN", payload: { email } });
    } catch (error) {
      setError(error.response.data.error);
    }
  };

  return { login, error };
};
