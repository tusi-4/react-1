import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {settings} from '../../data/dataStore.js';

class FAQ extends React.Component {
  render() {
    const {title, image, content} = settings.FAQ;

    return (
      <Container>
        <Hero titleText={title} image={image} />
        <p>{content}</p>
      </Container>
    );
  }
}

export default FAQ;