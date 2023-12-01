import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { backendLink } from "..";
import Shimmer from "../components/Shimmer/Shimmer";
import BookDoctorCard from "../components/DoctorCard/BookDoctorCard";

const Booking = () => {
  let navigator = useNavigate();
  const [loading, setLoading] = useState(true);
  const [verifiedData, setVerifiedData] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("user")) navigator("/login");
    (async function () {
      const res = await axios.get(`${backendLink}/api/doctor/doctorData`);
      let filtered = [];
      for (let i = 0; i < res.data.length; i++) {
        if (!res.data[i].verified) continue;
        filtered = [...filtered, res.data[i]];
      }
      setVerifiedData(filtered);
      setLoading(false);
    })();
  }, [navigator]);

  return (
    <>
      {loading ? (
        <Shimmer />
      ) : (
        <div className="doctors-container">
          {verifiedData.map((item) => (
            <BookDoctorCard key={item._id} doc={item} />
          ))}
        </div>
      )}
    </>
  );
};

export default Booking;
