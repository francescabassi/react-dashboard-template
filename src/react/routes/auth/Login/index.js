import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form/immutable'
import { connect } from 'react-redux'
import styles from './styles.scss'

import { login } from 'redux/modules/auth/actions'


const mapStateToProps = state => ({
  auth: state.get('auth')
})

const mapDispatchToProps = dispatch => ({
  login: (username, password) => dispatch(login(username, password))
})

@reduxForm({
  form: 'login'
})
@connect(mapStateToProps, mapDispatchToProps)
class Login extends Component {
  
  static propTypes = {
    auth: PropTypes.object,
    login: PropTypes.func.isRequired
  }

  onSubmit = (values) => {
    this.props.login(values.toJS())
  }

  render() {
    const { handleSubmit, pristine, submitting } = this.props

    return(
      <div className={styles.box}>
        <h1>Please, login</h1>

        <form onSubmit={handleSubmit(this.onSubmit)}>
          <Field
            name="email"
            component="input"
            type="email"
            placeholder="Email"
          />
          <Field
            name="password"
            component="input"
            type="password"
            placeholder="Password"
          />
          <button type="submit" disabled={pristine || submitting}
            className={styles.link}>
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default Login