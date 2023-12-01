import React, { useEffect, useMemo, useState } from "react";
import { Col, FloatingLabel, Form, Row, Stack } from "react-bootstrap";
import { io } from "socket.io-client";
import { backendLink } from "../..";

const Chat = (props) => {
  const socket = io.connect(`${backendLink}`);
  const [message, setMessage] = useState("");
  const [data, setData] = useState("");
  const [allMsg, setAllMsg] = useState([]);
  const handleMsg = (e) => {
    setMessage(e.target.value);
  };

  const addMsg = (payload) => {
    if (payload !== "") setAllMsg(allMsg.concat(payload));
  };
  useMemo(() => addMsg(data), [data]);
  useEffect(() => {
    socket.emit("join-room", props.roomId);

    socket.on("msg", (payload) => {
      setData(payload);
    });
  }, []);

  const sendMsg = async () => {
    socket.emit("msg", { msg: message, user: props.name }, props.roomId);
    setMessage("");
  };
  return (
    <>
      <Stack style={{ backgroundColor: "#213555" }}>
        {allMsg.map((value, index) => {
          return (
            <div>
              <p key={index}>
                <span style={{ color: "white", paddingRight: "1rem" }}>
                  {value.user}
                </span>
                <span style={{ color: "white" }}>{value.msg}</span>
              </p>
            </div>
          );
        })}
      </Stack>
      <Row style={{ alignItems: "center", padding: "1rem 0rem 0 1rem" }}>
        <Col>
          <FloatingLabel
            controlId="floatingInput"
            label="Message"
            style={{
              color: "white",

              backgroundColor: "#213555",
            }}
          >
            <Form.Control
              type="text"
              name="msg"
              required
              onChange={handleMsg}
              placeholder="Message"
              style={{ backgroundColor: "#213555", color: "white" }}
              value={message}
            />
          </FloatingLabel>
        </Col>
        <Col xs="auto">
          <button
            type="button"
            style={{ borderColor: "#213555", color: "black" }}
            className="btn"
            onClick={sendMsg}
          >
            Send
          </button>
        </Col>
      </Row>
    </>
  );
};

export default Chat;
