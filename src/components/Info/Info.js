import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {settings} from '../../data/dataStore.js';

class Info extends React.Component {
  render() {
    const {title, image, content} = settings.info;

    return (
      <Container>
        <Hero titleText={title} image={image} />
        <p>{content}</p>
      </Container>
    );
  }
}

export default Info;