import React from "react";
import { Card, Button } from "react-bootstrap";

const ImageCard = ({ image, deleteImg }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image.urls.small} />
      <Card.Body>
        <Card.Title>{image.title.toUpperCase()}</Card.Title>
        <Card.Text>
          {image.description ||
            image.alt_description ||
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        </Card.Text>
        <Button
          variant="primary"
          onClick={() => {
            deleteImg(image.id);
          }}
        >
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ImageCard;
