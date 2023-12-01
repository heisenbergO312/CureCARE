import React, { useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { useBookDoctor } from "../../hooks/useBookDoctor";
import { useAlert } from "react-alert";
const BookDoctorCard = (props) => {
  const { bookDoctor } = useBookDoctor();
  const alert = useAlert();
  const [show, setShow] = useState(false);
  const [month, setMonth] = useState("1");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleBook = async () => {
    let userId = await localStorage.getItem("user");
    userId = JSON.parse(userId);
    await bookDoctor(
      userId.userId,
      props.doc._id,
      props.doc.name,
      userId.name,
      props.doc.speciality,
      props.doc.hospital,
      props.doc.city,
      month
    );
    alert.show("Success", { type: "success" });
  };
  const handleDoctorBooking = async () => {
    // let userId = await localStorage.getItem("user");
    // userId = JSON.parse(userId);
    // await bookDoctor(userId.userId, props.doc._id);
    // alert.show("Success", { type: "success" });
    handleShow();
  };

  return (
    <>
      <div className="doc-card">
        <img src={props.doc.img} alt={props.doc.name} />
        {/* <div className="name-title">
                <h1>{props.doc.name}</h1>
                <p>{props.doc.speciality}</p>
              </div> */}
        <Row>
          <Col xs="8" className="name-title">
            <h1>{props.doc.name}</h1>
            <p>{props.doc.speciality}</p>
          </Col>
          <Col xs="4">
            <Button
              style={{
                backgroundColor: "yellow",
                color: "black",
                borderColor: "yellow",
              }}
              onClick={handleDoctorBooking}
              xs={"auto"}
            >
              Book
            </Button>
          </Col>
        </Row>
        <div className="stats">
          <div className="patients">
            <div className="patient-logo">
              <i className="fa-solid fa-hospital-user"></i>
            </div>
            <p>{props.doc.patients}</p>
          </div>
          <div className="rating">
            <div className="rating-logo">
              <i className="fa fa-venus-mars"></i>
            </div>
            <p>{props.doc.gender}</p>
          </div>
        </div>
        <div className="location">
          <div className="hospital">
            <div className="icon">
              <i className="fa-solid fa-hospital"></i>
            </div>
            <div className="name">{props.doc.hospital}</div>
          </div>
          <div className="city">
            <div className="icon">
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <div className="name">{props.doc.city}</div>
          </div>
        </div>
      </div>
      <Modal
        show={show}
        onHide={() => {
          setShow(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Book Therapist</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <strong>Name </strong>
            {props.doc.name}
          </p>
          <p>
            <strong>Specality </strong>
            {props.doc.speciality}
          </p>
          <p>
            <strong>Hospital </strong>
            {props.doc.hospital}
          </p>
          <p>
            <strong>City </strong>
            {props.doc.city}
          </p>
          <p>
            <strong>Select month </strong>
            <label className="role-label ">
              <select
                name="month"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
              >
                <option value="1">1</option>
                <option value="3">3</option>
                <option value="6">6</option>
              </select>
            </label>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            style={{
              backgroundColor: "yellow",
              color: "black",
              borderColor: "yellow",
            }}
            onClick={handleBook}
          >
            Book
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default BookDoctorCard;
