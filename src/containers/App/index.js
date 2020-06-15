import { withStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import AdminLayoutRoute from '../../commons/Layout/AdminLayoutRoute';
import GlobalLoading from '../../components/GlobalLoading';
import Modal from '../../components/Modal';
import { ADMIN_ROUTES } from '../../constants';
import configureStore from '../../redux/configureStore';
import theme from './../../commons/Theme';
import NotFound from './../../components/NotFound';
import styles from './styles.js';
import Login from '../../containers/Login';
import history from './history';
const store = configureStore();

class App extends Component {
  renderAdminRoutes() {
    let xhtml = null;
    xhtml = ADMIN_ROUTES.map(route => {
      return (
        <AdminLayoutRoute
          key={route.path}
          path={route.path}
          component={route.component}
          exact={route.exact}
          name={route.name}
        />
      );
    });
    return xhtml;
  }

  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <ToastContainer />
            <GlobalLoading />
            <Modal />
            <Switch>
              {this.renderAdminRoutes()}
              <Route path="/login" exact={true} component={Login} />
              <Route component={NotFound} />
            </Switch>
          </ThemeProvider>
        </Router>
      </Provider>
    );
  }
}

export default withStyles(styles)(App);
