import axios from "axios";
import React, { useEffect, useState } from "react";
import { backendLink } from "..";
import { CompactTable } from "@table-library/react-table-library/compact";

import { Button, Modal } from "react-bootstrap";
import Chat from "../components/Chat/Chat";

const Dashboard = () => {
  const role = JSON.parse(localStorage.getItem("user")).role;
  const [nodes, setData] = useState();
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };
  const [roomId, setRoomId] = useState();
  const [name, setName] = useState();
  const handleJoin = (item) => {
    const role = JSON.parse(localStorage.getItem("user")).role;
    if (role === "patient") setName(item.patientname);
    else setName(item.docname);
    setRoomId(item._id);
    setShow(true);
  };
  const COLUMNSPATIENTS = [
    { label: "Therapist", renderCell: (item) => item.docname },
    { label: "Specality", renderCell: (item) => item.specality },
    { label: "Hospital", renderCell: (item) => item.hospital },
    { label: "City", renderCell: (item) => item.city },
    { label: "Subscribed for", renderCell: (item) => `${item.month} months` },
    {
      label: "Chat",
      renderCell: (item) => {
        return (
          <Button
            style={{
              backgroundColor: "yellow",
              color: "black",
              borderColor: "yellow",
            }}
            onClick={() => {
              handleJoin(item);
            }}
          >
            Chat with {item.docname}
          </Button>
        );
      },
    },
  ];
  const COLUMNSDOCTOR = [
    { label: "Patient", renderCell: (item) => item.patientname },
    { label: "Subscribed for", renderCell: (item) => `${item.month} months` },
    { label: "Purchased on", renderCell: (item) => item.date },
    {
      label: "Chat",
      renderCell: (item) => {
        return (
          <Button
            style={{
              backgroundColor: "yellow",
              color: "black",
              borderColor: "yellow",
            }}
            onClick={() => {
              handleJoin(item);
            }}
          >
            Chat with {item.patientname}
          </Button>
        );
      },
    },
  ];
  useEffect(() => {
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
      setData(response.data.response);
    })();
  }, []);
  const data2 = { nodes };
  console.log(nodes);
  if (!nodes) return <>Loading</>;
  return (
    <>

      <div className="services-parent ms-5 me-5">
      <div className="section-heading mb-5">DASHBOARD</div>
        {role === "patient" ? (
          <CompactTable columns={COLUMNSPATIENTS} data={data2} />
        ) : (
          <CompactTable columns={COLUMNSDOCTOR} data={data2} />
        )}
      </div>
      <Modal show={show} onHide={toggleShow}>
        <Modal.Header closeButton>
          <Modal.Title>Chat</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Chat roomId={roomId} name={name} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Dashboard;
