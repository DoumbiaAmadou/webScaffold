import React from 'react';
import PropTypes from 'prop-types';
import styles from './BaseFooter.module.css';

const BaseFooter = () => (
  <div className='navbar bg-dark fixed-bottom text-whitex' data-testid="BaseFooter">
    BaseFooter Component
  </div>
);

BaseFooter.propTypes = {};

BaseFooter.defaultProps = {};

export default BaseFooter;
