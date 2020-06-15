/** @format */

import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import styles from './styles';
class ProductItem extends Component {
    render() {
        const {
            classes,
            product,
            index,
            onClickEdit,
            onClickDelete,
            onClickView,
        } = this.props;
        const { name, description, price } = product.Properties;
        return (
            <tr className={classes.hoverRow}>
                <th scope="row">{index}</th>
                <td>{name}</td>
                <td>{description}</td>
                <td>{price}</td>
                <td className={classes.cardActions}>
                <Fab
                        color="primary"
                        aria-label="Edit"
                        className={`${classes.viewButton} ${classes.fab}`}
                        // disabled="true"
                        size="small"
                        onClick={onClickView}
                    >
                        <Icon fontSize="small">visibility_icon</Icon>
                    </Fab>
                    <Fab
                        color="primary"
                        aria-label="Edit"
                        className={classes.fab}
                        size="small"
                        onClick={onClickEdit}
                    >
                        <Icon fontSize="small">edit_icon</Icon>
                    </Fab>
                    <Fab
                        color="primary"
                        aria-label="Delete"
                        className={`${classes.deleteButton} ${classes.fab}`}
                        size="small"
                        onClick={onClickDelete}
                    >
                        <Icon fontSize="small">delete_icon</Icon>
                    </Fab>
                </td>
               
                </tr>

        );
    }
}

export default withStyles(styles)(ProductItem);
