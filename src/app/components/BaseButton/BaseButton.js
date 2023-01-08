import React from 'react';
import styles from './BaseButton.module.css';

const BaseButton = () => (
  <div className={styles.BaseButton} data-testid="BaseButton">
    BaseButton Component
  </div>
);

BaseButton.propTypes = {};

BaseButton.defaultProps = {};

export default BaseButton;
