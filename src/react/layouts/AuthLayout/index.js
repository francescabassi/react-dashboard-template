import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.scss'

export const AuthLayout = ({ children }) => (
  <div>
    {children}
  </div>
)

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default AuthLayout