import { useState } from "react";

import { backendLink } from "..";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const useBookDoctor = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const bookDoctor = async (
    userId,
    doctorId,
    docname,
    patientname,
    specality,
    hospital,
    city,
    month
  ) => {
    setError(null);
    const data = {
      userId,
      doctorId,
      docname,
      patientname,
      specality,
      hospital,
      city,
      month,
    };
    try {
      console.log(data);
      await axios.post(`${backendLink}/api/doctor/bookDoctor`, data);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.response.data.error);
    }
  };

  return { bookDoctor, error };
};
