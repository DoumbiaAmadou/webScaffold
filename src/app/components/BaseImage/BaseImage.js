import React from 'react';
import PropTypes from 'prop-types';
import styles from './BaseImage.module.css';

const BaseImage = () => (
  <div className={styles.BaseImage} data-testid="BaseImage">
    BaseImage Component
  </div>
);

BaseImage.propTypes = {};

BaseImage.defaultProps = {};

export default BaseImage;
