import React from 'react'
import PropTypes from 'prop-types'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'

import { store, history } from 'redux/configureStore'
import restricted from 'react/hoc/restricted'

import AuthLayout from 'react/layouts/AuthLayout'
import DashboardLayout from 'react/layouts/DashboardLayout'

import LoginPage from 'react/routes/auth/Login'

const RestrictedRoute = ({component, ...props}) =>
  <Route {...props} component={restricted(component)} />

RestrictedRoute.propTypes = {
  component: PropTypes.func
}

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Redirect exact from='/' to='/dashboard' />
        <RestrictedRoute path='/dashboard' component={DashboardLayout} />
        <Route path='/auth/'>
          <AuthLayout>
            <Route path='/auth/login' component={LoginPage} />
          </AuthLayout>
        </Route>
      </Switch>
    </Router>
  </Provider>
);

export default router;