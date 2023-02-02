import React from 'react';
import classes from './List.module.css';
import edit from '../../assets/edit.png';
import trash from '../../assets/trash.png';
import Warning from './Warning';

function List(props) {
    
    return (
        <>
        {props.modal.isValid? <Warning onCloseHandler={props.onCloseHandler} onClick={() => props.onDeleteHandler(props.modal.id)} warning="Do you really want to delete?" />:null}  
        <div className={`${classes.listWrapper}`}>
            <div className={classes.listBox}>
                <input id={props.id} onClick={props.onCheckHandler} className={classes.checkbox} type="checkbox"></input>
                <li>{props.value}</li>
            </div>
            <div className={classes.iconWrapper}>
                <img src={edit} alt="edit-png" id={classes.edit} onClick={()=> props.onEditHandler(props.id)}></img>
                <img src={trash} alt="trash-png" id={classes.delete} onClick={() => props.clicked(props.id)}></img>
            </div>
        </div>
        </>
    )
}

export default List
