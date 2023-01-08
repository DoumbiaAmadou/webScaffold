import React from 'react';
import PropTypes from 'prop-types';
import styles from './BaseCard.module.css';

const BaseCard = () => (
  <div className={styles.BaseCard} data-testid="BaseCard">
    BaseCard Component
  </div>
);

BaseCard.propTypes = {};

BaseCard.defaultProps = {};

export default BaseCard;
