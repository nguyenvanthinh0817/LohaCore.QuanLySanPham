/** @format */

import { Box, Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import renderTextField from '../../components/FormHelper/TextField';
import styles from './styles';
import { bindActionCreators, compose } from 'redux';
import * as  loginActions from './../../actions/login';
import validate from './validate';
import { connect } from 'react-redux';
import sessionstorage from 'sessionstorage';
import {Redirect} from 'react-router-dom';
class Login extends Component {
    handleSubmitForm = (data) => {
        const { loginActionsCreators } = this.props;
        const { login } = loginActionsCreators;
        const { email, password } = data;
        login(email, password);
    };
    render() {
        const { classes, invalid, submitting, handleSubmit } = this.props;
        const token = sessionstorage.getItem('auth');
        if(token){
            return <Redirect to='/'/>
        }
        return (
            <div className={classes.login}>
                <div className={classes.header}>
                    <span className={classes.title}>Đăng nhập</span>
                </div>
                <div className={classes.content}>
                    <form onSubmit={handleSubmit(this.handleSubmitForm)}>
                        <Grid container>
                            <Grid item md={12}>
                                <Field
                                    id="email"
                                    label="Email"
                                    className={classes.textField}
                                    margin="normal"
                                    name="email"
                                    component={renderTextField}
                                />
                            </Grid>
                            <Grid item md={12}>
                                <Field
                                    id="password"
                                    label="Password"
                                    className={classes.textField}
                                    margin="normal"
                                    name="password"
                                    type='password'
                                    component={renderTextField}
                                />
                            </Grid>
                            <Grid item md={12}>
                                <Box
                                    display="flex"
                                    flexDirection="row-reverse"
                                    mt={2}
                                >
                                    <Button
                                        disabled={invalid || submitting}
                                        variant="contained"
                                        color="primary"
                                        type="submit"
                                    >
                                        Đăng nhập
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </div>
        );
    }
}
const FORM_NAME = 'LOGIN';

const withReduxForm = reduxForm({
    form: FORM_NAME,
    validate,
});
const mapStateToProps = (state) => {
    return {
        LoggedIn: state.login.LoggedIn,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        loginActionsCreators: bindActionCreators(loginActions, dispatch),
    };
};

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);
export default compose(
    withStyles(styles),
    withConnect,
    withReduxForm,
)(Login);
