import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import Input from '../UI/Input';
import classes from './Box.module.css';
import List from '../UI/List';
import Wrapper from '../UI/Wrapper';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '../UI/Button';

function Box(props) {
    const task = useRef();

    const[todos,setTodos] = useState([]);
    const[error,setError] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [editId, setEditId] = useState(null);
    const [modal,setModal] = useState({id:"",isValid:false});
    
    const attributes = {
        type:"text",
        placeholder:"Add your task",
        name:"task",
    }
    const onSubmitHandler = (e)=>{
        e.preventDefault();
        if(task.current.value.trim().length<1){
            setError(true);
        }
        else if(editMode===true){
            const newTodos = todos.map((e)=>{
                if(e.id===editId){
                    return {...e, task: task.current.value};
                }
                return e;
            })
            setTodos(newTodos);
            setEditMode(false);
            task.current.value = "";
            toast.success('Task edited!', {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
                
        }
        else{
            setError(false);
            setTodos([...todos,{id: new Date().getTime().toString(), task: task.current.value}]);
            task.current.value = "";
            toast.success('New Task Added!', {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
                
        }
    }
    const onDeleteHandler = (id)=>{
        setTodos(todos.filter((e)=> e.id!==id))
        setModal({...modal, isValid:false});
    }
    const clicked = (id)=>{
        setModal({...modal, id:id,isValid: true});
    }
    const onEditHandler = (id) =>{
        const [{id:editId,task: editTask}] = todos.filter((e)=> e.id===id);
        task.current.value = editTask;
        setError(false);
        setEditMode(true);
        setEditId(editId);  
    }
    const onCloseHandler = () =>{
        setModal({...modal,isValid:false});
    }
    const onClearHandler = () =>{
        setTodos([]);
    }
    return (       
        <div className={classes.wrapper}>
                <Wrapper>
                    <h1 className={classes.mainHeading}>Task Tracker</h1>
                    <Input editMode={editMode} onDeleteHandler={onDeleteHandler} error={error} onSubmit = {onSubmitHandler} ref={task} attr = {attributes} />
                    <h3 className={classes.yourtask}>{todos.length>=1?"Your Tasks":"No Tasks"}</h3>
                    {todos.map((todo)=>{
                        return <List onCloseHandler={onCloseHandler} modal={modal} id={todo.id} onEditHandler={onEditHandler} clicked={clicked} onDeleteHandler={onDeleteHandler} key={todo.id} value={todo.task} />
                    })}
                    {todos.length>=1 && <Button onClick={onClearHandler} style={classes.btn}>Clear All</Button>}
                </Wrapper>
                <ToastContainer />
            </div>
    )
}

export default Box
