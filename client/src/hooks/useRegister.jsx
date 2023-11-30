import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { backendLink } from "..";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const useRegister = () => {
  const [error, setError] = useState("");
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const register = async (
    name,
    email,
    password,
    gender,
    role,
    speciality,
    hospital,
    city,
    img,
    patients
  ) => {
    setError(null);
    const user = {
      name,
      email,
      password,
      gender,
      speciality,
      hospital,
      city,
      img,
      patients,
    };
    try {
      let response;
      if (role === "doctor") {
        response = await axios.post(`${backendLink}/api/doctor/register`, user);
      } else {
        response = await axios.post(`${backendLink}/api/auth/register`, user);
      }
      navigate("/");
      console.log(response.data.doc._id);
      localStorage.clear();
      localStorage.setItem(
        "user",
        JSON.stringify({
          userId: response.data.user
            ? response.data.user._id
            : response.data.doc._id,
          name,
          email,
          password,
          gender,
          speciality,
          hospital,
          city,
          role,
          img,
          patients,
        })
      );
      dispatch({ type: "LOGIN", payload: { name, email, role, gender } });
    } catch (error) {
      setError(error.response.data.error);
    }
  };

  return { register, error };
};
