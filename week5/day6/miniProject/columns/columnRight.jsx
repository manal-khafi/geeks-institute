import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import ErrorBoundary from '../errorBoundary';

function ColumnRight() {
  const [text, setText] = useState(
    JSON.stringify({ function: 'I live to crash' })
  );

  const replaceWithObject = () => {
    setText({ function: 'I live to crash' });
  };

  const invokeEventHandler = () => {
    throw new Error('Error thrown inside event handler');
  };

  return (
    <Container>
      <h2>Right column</h2>
      <p>
        There are two types of errors we can trigger inside this component: A
        rendering error and a regular javascript error.
      </p>

      <hr />

      <ErrorBoundary>
        <p>
          Clicking this button will replace the <code>stringified</code> object,{' '}
          <code>{text}</code>, with the original object. This will result in a
          rendering error.
        </p>
      </ErrorBoundary>

      <Button variant="danger" onClick={replaceWithObject}>
        Replace string with object
      </Button>

      <hr />

      <p>
        Clicking this button will invoke an event handler, inside of which an
        error is thrown.
      </p>
      <Button variant="danger" onClick={invokeEventHandler}>
        Invoke event handler
      </Button>
    </Container>
  );
}

export default ColumnRight;