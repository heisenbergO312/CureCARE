import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { backendLink } from "..";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";

export const useRegister = () => {
  const alert = useAlert();
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
        alert.show("Success, wait for verification", { type: "success" });
      } else {
        response = await axios.post(`${backendLink}/api/auth/register`, user);
        alert.show("Success", { type: "success" });
      }
      navigate("/");
      return response;
    } catch (error) {
      setError(error.response.data.error);
    }
  };

  return { register, error };
};
