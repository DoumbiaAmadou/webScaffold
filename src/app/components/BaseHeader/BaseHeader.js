import React from 'react';
import PropTypes from 'prop-types';
import styles from './BaseHeader.module.css';
import { useSharedData } from '../../hooks';


const BaseHeader = ({ children }) => {

  const [data, updateData] = useSharedData();

  return (
    <div className=" navbar bg-primary text-white" data-testid="BaseHeader">
      {children}
      <button >
        {data.count}
      </button>
    </div>)

}

BaseHeader.propTypes = {};

BaseHeader.defaultProps = {};

export default BaseHeader;
