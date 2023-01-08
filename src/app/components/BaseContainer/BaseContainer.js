import React from 'react';
import PropTypes from 'prop-types';
import styles from './BaseContainer.module.css';
const BaseContainer = ({ children }) => (
  <main className={[styles.BaseContainer, 'container', 'm-2'].join(' ')} data-testid="BaseContainer">
    {children}
  </main>
);
BaseContainer.propTypes = {};
BaseContainer.defaultProps = {};
export default BaseContainer;