/** @format */

import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import styles from './styles';


class Item extends Component {
    render() {
        const {item} = this.props;
        let xhtml =[];
        for (const key in item) {
            if (item.hasOwnProperty(key)) {
                if (typeof item[key] === 'string') {
                    xhtml.push(<TableCell key={`cell${item[key]}`} >{item[key]}</TableCell>);
                } else {
                    xhtml.push(<TableCell key={`cell${item[key]}`} align="right">{item[key]}</TableCell>);
                }
            }
        }
        return xhtml;
     
    }
}
export default withStyles(styles)(Item);
