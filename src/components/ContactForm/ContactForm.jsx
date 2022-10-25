import styles from './ContactForm.module.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { nanoid } from 'nanoid';

const INITIAL_STATE = {
  id: '',
  name: '',
  number: '',
};

export class ContactForm extends Component {
  static propTypes = { handleSubmit: PropTypes.func.isRequired };

  render() {
    return (
      <form
        className={styles.form}
        htmlFor={this.elementId}
        onSubmit={this.props.handleSubmit}
      >
        