import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Search from "./components/Search";
import ImageCard from "./components/ImageCard";
import Welcome from "./components/Welcome";
import { Container, Row, Col } from "react-bootstrap";

const API_URL = process.env.REACT_APP_API_URL || "http://127.0.0.1:5001";

const App = () => {
  const [word, setWord] = useState("");
  const [images, setImages] = useState([]);
  console.log(images);

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    fetch(`${API_URL}/new-image?query=${word}`)
      .then((response) => response.json())
      .then((data) => {
        setImages([{ ...data, title: word }, ...images]);
      })
      .catch((error) => {
        console.log(error);
      });

    setWord(""); // Clear the word state
  };

  const handleDeleteImage = (id) => {
    setImages(images.filter((image) => image.id !== id));
  };

  return (
    <div className="App">
      <Header title="Images Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />

      <Container className="mt-4">
        {images.length > 0 ? (
          <Row xs={1} md={2} lg={3} className="g-4">
            {images.map((image, index) => (
              <Col key={index} className="pb-3">
                <ImageCard
                  key={index}
                  image={image}
                  deleteImg={handleDeleteImage}
                />
              </Col>
            ))}
          </Row>
        ) : (
          <Welcome />
        )}
      </Container>
    </div>
  );
};

export default App;
