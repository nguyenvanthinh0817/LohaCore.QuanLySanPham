/** @format */

import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { compose } from 'redux';
import styles from './styles';
class MenuLinkPagin extends Component {
    render() {
        const { to, activeOnlyWhenExact, lable, onClickPagin, activex } = this.props;
        let x = '';
        let y = '';
        if(activex === true){
            x = 'active'
        }
        return (
            <Route
                path={to}
                exact={activeOnlyWhenExact}
                children={() => {
                    return (
                        <li 
                            className={`page-item ${x}  `}
                            onClick={onClickPagin}
                        >
                            <Link  className="page-link" to={to}>
                                {lable}
                            </Link>
                        </li>
                    );
                }}
            />
        );
    }
}

export default compose(withStyles(styles))(MenuLinkPagin);
