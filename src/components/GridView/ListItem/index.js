/** @format */

import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import Item from '../Item';
import Checkbox from '@material-ui/core/Checkbox';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import FilterListIcon from '@material-ui/icons/FilterList';
class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: [],
        };
    }

    renderColumns = () => {
        const { columns } = this.props;
        let xhtml = null;
        xhtml = columns.map((column, index) => {
            if (column.right) {
                return (
                    <TableCell key={index} align="right">
                        {column.lable}
                    </TableCell>
                );
            } else {
                return <TableCell key={index}>{column.lable}</TableCell>;
            }
        });
        return xhtml;
    };

    renderToolBar = () => {
        const {  selected } = this.state;
        const { classes, onClickDeleteAll, name } = this.props;
        let xhtml = null;

        xhtml = (
            <Toolbar>
                {selected.length > 0 ? (
                    <Typography
                        className={classes.title}
                        color="inherit"
                        variant="subtitle1"
                        component="div"
                    >
                        {selected.length} selected
                    </Typography>
                ) : (
                    <Typography
                        className={classes.title}
                        variant="h6"
                        id="tableTitle"
                        component="div"
                    >
                        {name}
                    </Typography>
                )}

                {selected.length > 0 ? (
                    <Tooltip title="Delete">
                        <IconButton
                            aria-label="delete"
                            onClick={() => onClickDeleteAll(selected)}
                        >
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>
                ) : (
                    <Tooltip title="Filter list">
                        <IconButton aria-label="filter list">
                            <FilterListIcon />
                        </IconButton>
                    </Tooltip>
                )}
            </Toolbar>
        );
        return xhtml;
    };

    handleClickCheckBox = (event, name) => {
        console.log(name);
        const { selected } = this.state;
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];
        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        this.setState({
            selected: newSelected,
        });
    };

    handleSelectAllClick = (e) => {
        const { rows } = this.props;
        if (e.target.checked) {
            const newSelecteds = rows.map((n) => n.name);
            this.setState({
                selected: newSelecteds,
            });
            return;
        }
        this.setState({
            selected: [],
        });
    };
    render() {
        const {
            classes,
            rows,
            onClickDelete,
            onClickEdit,
            onClickView,
        } = this.props;

        const { selected } = this.state;
        return (
            <TableContainer component={Paper}>
                {this.renderToolBar()}
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell padding="checkbox">
                                <Checkbox
                                    color="primary"
                                    indeterminate={
                                        selected.length > 0 &&
                                        selected.length < rows.length
                                    }
                                    checked={
                                        rows.length > 0 &&
                                        selected.length === rows.length
                                    }
                                    onChange={this.handleSelectAllClick}
                                />
                            </TableCell>
                            <TableCell align="right" padding="checkbox">
                                STT
                            </TableCell>
                            {this.renderColumns()}
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((item, index) => {
                            return (
                                <TableRow key={`collumn${index}`}>
                                    <TableCell padding="checkbox">
                                        <Checkbox
                                            onClick={(event) =>
                                                this.handleClickCheckBox(
                                                    event,
                                                    item.name,
                                                )
                                            }
                                            checked={
                                                selected.indexOf(item.name) !==
                                                -1
                                            }
                                            color="primary"
                                            inputProps={{
                                                'aria-label':
                                                    'secondary checkbox',
                                            }}
                                        />
                                    </TableCell>
                                    <TableCell align="right" padding="checkbox">
                                        {index}
                                    </TableCell>
                                    <Item item={item} />
                                    <TableCell align="right">
                                        <Fab
                                            color="primary"
                                            aria-label="Edit"
                                            className={`${classes.viewButton} ${classes.fab}`}
                                            // disabled="true"
                                            size="small"
                                            onClick={() => onClickView(item)}
                                        >
                                            <Icon fontSize="small">
                                                visibility_icon
                                            </Icon>
                                        </Fab>
                                        <Fab
                                            color="primary"
                                            aria-label="Edit"
                                            className={classes.fab}
                                            size="small"
                                            onClick={() => onClickEdit(item)}
                                        >
                                            <Icon fontSize="small">
                                                edit_icon
                                            </Icon>
                                        </Fab>
                                        <Fab
                                            color="primary"
                                            aria-label="Delete"
                                            className={`${classes.deleteButton} ${classes.fab}`}
                                            size="small"
                                            onClick={() => onClickDelete(item)}
                                        >
                                            <Icon fontSize="small">
                                                delete_icon
                                            </Icon>
                                        </Fab>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
}

export default withStyles(styles)(ListItem);
