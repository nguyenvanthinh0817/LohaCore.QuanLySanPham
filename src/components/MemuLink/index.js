import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import { compose } from 'redux';
import styles from './styles';
class MenuLink extends Component {
    render() {
        const { to, activeOnlyWhenExact, lable} = this.props;
        return (
            <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => {
                var active = match ? 'active abc' : '';
                return (
                    <li className={`nav-item ${active}`}>
                        <Link className="nav-link" to={to}>
                            {lable}
                        </Link>
                    </li>
                );
            }}
        />
        );
    }
}

export default compose(
    withStyles(styles),
  )(MenuLink);
