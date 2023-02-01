import React from 'react';
import classes from './Input.module.css';
import Button from './Button';

const Input = React.forwardRef((props,ref) => {
    return (
        <>
        <form className={classes.inputField} onSubmit={props.onSubmit}>
                <input autoComplete='off' ref={ref} {...props.attr} className={`${classes.Input} ${props.error&&classes.inputError}`}></input>
                <Button style = {classes.btn}>{props.editMode?"Edit":"Add"}</Button>
        </form>
            {props.error&&<p className={classes.error}>Please enter a valid task!</p>}
        </>
    )
}
)

export default Input;
