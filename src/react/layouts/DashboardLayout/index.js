import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import styles from './styles.scss'

class DashboardLayout extends Component {

  shouldComponentUpdate() {
    return false
  }

  render() {
    return (
      <div>
        <h1>Welcome to Dashboard!</h1>
      </div>
    )
  }
}

DashboardLayout.propTypes = {
  children: PropTypes.node
};

export default DashboardLayout