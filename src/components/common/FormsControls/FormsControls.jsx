import styles from "./FormsControls.module.css";
import { Field } from 'redux-form';

export const Textarea = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;

    return (
        <div>
            <textarea className={hasError ? styles.error : ''} {...props} {...input}/>
            { hasError && <span>{meta.error}</span> }
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;

    return (
        <div>
            <input className={hasError ? styles.error : ''} {...props} {...input}/>
            { hasError && <span>{meta.error}</span> }
        </div>
    )
}

export const createField = (placeholder, name, component, validate, props = {}, text = '') => {
    return (
        <>
        <Field placeholder={placeholder} name={name} component={component} validate={validate} {...props}/>{text}
        </>
    )
}