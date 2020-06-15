/** @format */

import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import styles from './styles';
class ViewProductItem extends Component {
    render() {
        const {
            classes,
            product,
            index
        } = this.props;
        return (
            <tr className={classes.hoverRow}>
                <th scope="row">{index}</th>
                <td>{product.Properties["KhachHang.ID"]}</td>
                <td>{product.Properties["KhachHang.name"]}</td>
                <td>{product.Properties["products.ID"]}</td>
                <td>{product.Properties["products.name"]}</td>
                <td>{product.Properties["MuaBan.Created"]}</td>
                <td className={classes.cardActions}>
                {/* <Fab
                        color="primary"
                        aria-label="Edit"
                        className={classes.fab}
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
                    </Fab> */}
                </td>
               
                </tr>

        );
    }
}

export default withStyles(styles)(ViewProductItem);
