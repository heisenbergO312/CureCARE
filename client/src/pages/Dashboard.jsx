import axios from "axios";
import React, { useEffect, useState } from "react";
import { backendLink } from "..";
import { CompactTable } from "@table-library/react-table-library/compact";

const COLUMNSPATIENTS = [
  { label: "Therapist", renderCell: (item) => item.docname },
  { label: "Specality", renderCell: (item) => item.specality },
  { label: "Hospital", renderCell: (item) => item.hospital },
  { label: "City", renderCell: (item) => item.city },
  { label: "Subscribed for", renderCell: (item) => item.month },
  { label: "Purchased on", renderCell: (item) => item.date },
];
const COLUMNSDOCTOR = [
  { label: "Patient", renderCell: (item) => item.patientname },
  { label: "Subscribed for", renderCell: (item) => item.month },
  { label: "Purchased on", renderCell: (item) => item.date },
];
const Dashboard = () => {
  const role = JSON.parse(localStorage.getItem("user")).role;
  const [nodes, setData] = useState();
  useEffect(() => {
    console.log(localStorage.getItem("user"));
    const id = JSON.parse(localStorage.getItem("user")).userId;
    const data =
      JSON.parse(localStorage.getItem("user")).role === "doctor"
        ? { doctorId: id }
        : { userId: id };
    (async function () {
      const response = await axios.post(
        `${backendLink}/api/doctor/getBooking`,
        data
      );
      await setData(response.data.response);
      //console.log(response.data.response);
    })();
  }, []);
  const data2 = { nodes };
  if (!nodes) return <>Loading</>;
  return (
    <>
      <div className="m-5">
        {role === "patient" ? (
          <CompactTable columns={COLUMNSPATIENTS} data={data2} />
        ) : (
          <CompactTable columns={COLUMNSDOCTOR} data={data2} />
        )}
      </div>
    </>
  );
};

export default Dashboard;
