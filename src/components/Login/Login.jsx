import classes from './Login.module.css';
import React from 'react';
import { reduxForm, Field } from 'redux-form';

const LoginForm = (props) => {
    return (

            <form onSubmit={props.handleSubmit} className={classes.form}>
                <Field placeholder={'Login'} name={'login'} component={'input'} />
                <Field placeholder={'Password'} name={'password'} component={'input'} />
                <Field type={'checkbox'} name={'rememberMe'} component={'input'} /> remember me
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
        console.log(formData);
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

export default Login;