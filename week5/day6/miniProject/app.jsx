import React from 'react';
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import ColumnLeft from './columns/columnLeft';
import ColumnRight from './columns/columnRight';
import ErrorBoundary from './errorBoundary';

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="px-3">
        <Navbar.Brand>Error boundaries in react</Navbar.Brand>
      </Navbar>
      <Container fluid>
        <Row>
          <Col md={3} className="p-0">
            <ColumnLeft />
          </Col>
          <Col md={9} className="py-3">
            <ErrorBoundary>
              <ColumnRight />
            </ErrorBoundary>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;