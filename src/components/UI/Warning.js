import React from 'react';
import Button from './Button';
import Modal from './Modal';
import classes from './Warning.module.css';
import close from '../../assets/close.png';

function Warning(props) {
    return (
        <Modal onCloseHandler={props.onCloseHandler}>
            <div className={classes.warningWrapper}>
                <div className={classes.headingWrapper}>
                    <h3>{props.warning}</h3>
                    <img onClick={props.onCloseHandler} id={classes.close} src={close} alt="close"></img>
                </div>
                <Button style={classes.btn} onClick={props.onClick}>Yes</Button>
            </div>
        </Modal>
    )
}

export default Warning
