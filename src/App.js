import React from 'react';
import { Container } from 'semantic-ui-react';
import ContactView from './views/contact-view';


function App() {
  return (
    <Container>
      <h1>React Hooks Context Demo</h1>
      <ContactView />
    </Container>
  );
}

export default App;
