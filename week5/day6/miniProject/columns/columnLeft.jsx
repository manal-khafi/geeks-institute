import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';

function ColumnLeft() {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    try {
      const response = await fetch('https://picsum.photos/v2/list?page=2&limit=2');
      const data = await response.json();
      setImages(data);
    } catch (error) {
      console.error('Failed to fetch images:', error);
    }
  };

  return (
    <Container className="bg-light min-vh-100 py-3">
      <h2>Left column</h2>
      <Button variant="primary" className="my-3" onClick={getImages}>
        Get images
      </Button>
      <div className="d-flex flex-column gap-3">
        {images.map((img) => (
          <img
            key={img.id}
            src={img.download_url}
            alt={img.author}
            style={{ width: '180px', height: '120px', objectFit: 'cover' }}
          />
        ))}
      </div>
    </Container>
  );
}

export default ColumnLeft;