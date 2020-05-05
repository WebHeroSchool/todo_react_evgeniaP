import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.css';

const Footer = ({ count, onClickFooter }) => (<div className={styles.footer}>Невыполненные задачи: {count}</div>);

Footer.defaultProps = {
	count: 0
};

Footer.propTypes = {
	count: PropTypes.number.isRequired
};

export default Footer;