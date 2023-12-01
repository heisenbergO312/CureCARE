import React from "react";
import { Button, Card, Col } from "react-bootstrap";

const BlogCard = (props) => {
  return (
    <>
      <Col xs={4} style={{ paddingTop: "2rem" }}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={props.item.img} />
          <Card.Body>
            <Card.Title>{props.item.title}</Card.Title>
            <Card.Text>{props.item.content}</Card.Text>
            <Button
              style={{
                backgroundColor: "yellow",
                color: "black",
                borderColor: "yellow",
              }}
              onClick={() => {
                window.location.replace(props.item.url);
              }}
            >
              Read blog
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default BlogCard;
