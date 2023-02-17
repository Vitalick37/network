import classes from './Login.module.css';
import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Input } from '../common/FormsControls/FormsControls';
import { required } from '../../utils/vatidators/validators';
import { connect } from 'react-redux';
import { login } from '../../redux/authReducer';
import { Navigate } from 'react-router-dom';
import { createField } from '../common/FormsControls/FormsControls';

const LoginForm = ({handleSubmit, error}) => {

    return (

            <form onSubmit={handleSubmit} className={classes.form}>
                {/* <Field placeholder={'Email'} name={'email'} component={Input} validate={[required]} /> */}
                {createField('Email', 'email', Input, [required])}
                
                <Field placeholder={'Password'} name={'password'} component={Input} validate={[required]} type={'password'} />
                <Field type={'checkbox'} name={'rememberMe'} component={Input} /> remember me
                {error && <div  className={classes.form_summury_error}>{error}</div>}
                <button>Login</button>

                {/* <input placeholder={'Login'} />
                <input placeholder={'Password'} />
                <input type={'checkbox'} /> remember me
                <button>Login</button> */}
            </form>

    )
}

const LoginReduxForm = reduxForm({
    form: 'login',
})(LoginForm)


const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if(props.isAuth) {
        return <Navigate to={'/profile'} />
    };

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, {login}) (Login);