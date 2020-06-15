import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Dashboard from './../../../components/Dashboard';
import sessionstorage from 'sessionstorage';
class AdminLayoutRoute extends Component {
  render() {
    if (!sessionstorage.getItem('auth')) {
      return <Redirect to="/login" />;
    }
    const { component: YourComponent, ...remainProps } = this.props;
    return (
      <Route
        {...remainProps}
        render={routeProps => {
          return (
            <Dashboard {...remainProps}>
              <YourComponent {...routeProps} />
            </Dashboard>
          );
        }}
      />
    );
  }
}

AdminLayoutRoute.propTypes = {
  path: PropTypes.string,
  exact: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  name: PropTypes.string,
};

export default AdminLayoutRoute;
