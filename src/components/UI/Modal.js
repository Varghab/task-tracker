import React from 'react';
import ReactDOM  from 'react-dom';
import classes from './Modal.module.css';


const Backdrop = (props) =>{
    return <div onClick={props.onCloseHandler} className={classes.backdrop}>

    </div>
}

const Overlay = (props)=>{
    return <div className={classes.overlay}>
        {props.children}
    </div>
}


const warningElement = document.getElementById("warning");

function Modal(props) {
    return (
        <>
            {ReactDOM.createPortal( <Backdrop onCloseHandler={props.onCloseHandler} />, warningElement )}
            {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, warningElement)}
        </>
    )
}

export default Modal
