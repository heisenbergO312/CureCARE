import React, { useEffect, useMemo, useState } from "react";
import { Col, FloatingLabel, Form, Row, Stack } from "react-bootstrap";
import { io } from "socket.io-client";

const Chat = (props) => {
  const host = "http://localhost:4000";
  const socket = io.connect(host);
  const [message, setMessage] = useState("");
  const [data, setData] = useState("");
  //const [data, setdata] = useState([]);
  const [allMsg, setAllMsg] = useState([]);
  const handleMsg = (e) => {
    setMessage(e.target.value);
  };

  const addMsg = (payload) => {
    setAllMsg(allMsg.concat(payload));
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
  console.log(data);
  return (
    <>
      <Stack>
        {allMsg.map((value, index) => {
          //   if (JSON.stringify(value) !== JSON.stringify(oldValue)) {
          //     oldValue = value;
          return (
            <div>
              <p key={index}>
                <span style={{ color: "black", paddingRight: "1rem" }}>
                  {value.user}
                </span>
                <span style={{ color: "#0E2954" }}>{value.msg}</span>
              </p>
            </div>
          );
          // }
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
          {/* <button onClick=  {sendMsg}>Send</button> */}
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
