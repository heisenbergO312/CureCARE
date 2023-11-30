import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { backendLink } from "..";
import Shimmer from "../components/Shimmer/Shimmer";
import BookDoctorCard from "../components/DoctorCard/BookDoctorCard";
import { Button, Modal } from "react-bootstrap";

const Booking = () => {
  let navigator = useNavigate();
  const [loading, setLoading] = useState(true);

  const [doc, setDoc] = useState();
  useEffect(() => {
    if (!localStorage.getItem("user")) navigator("/login");
    axios.get(`${backendLink}/api/doctor/doctorData`).then((res) => {
      setDoc(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading ? (
        <Shimmer />
      ) : (
        <div className="doctors-container">
          {doc.map((item) => (
            <BookDoctorCard key={item._id} doc={item} />
          ))}
        </div>
      )}
    </>
  );
};

export default Booking;
