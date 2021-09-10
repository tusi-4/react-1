import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
import Card from '../Card/Card.js';
import Icon from '../Icon/Icon.js';

class SearchResults extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    cards: PropTypes.array,
    icon: PropTypes.node,
    addCard: PropTypes.func,
  }

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }
  
  render() {
    const {cards} = this.props; 

    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          <p>Ok proba sztywnego tytulu</p>
          <span className={styles.icon}>
            <Icon name="blind" />
          </span>
        </h3>
        <div className={styles.cards}>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>
      </section>
    );
  }
}

export default SearchResults;
