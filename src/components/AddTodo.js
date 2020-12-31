import { Button, Grid, TextField } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import TodoSnackBar from "./snackbar/TodoSnackBar";

const useStyles = makeStyles((theme) => ({
  addTodoContainer: {
    margin: "16px 0",
    padding: theme.spacing(1.5),
    borderColor: '#5bc8ac',
    border: "2px double ",
    borderRadius: theme.spacing(0.5),
  },
  secondary: {
    backgroundColor: '#5bc8ac'
  },
}));

const AddTodo = (props) => {
  const initialToDoState = {
    id: null,
    title: "",
    description: "",
    priority: 1,
    status: 1,
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTodo({
      ...todo,
      [name]: value,
    });
  };

  const handleAddClick = () =>{
    if(todo.title !==''){
      props.addTodo(todo);
      setTodo(initialToDoState)
      setOpen(true)
    }
  }

  const handleKeyDown = (event) => {
    if ((event.which === 13 || event.keyCode === 13) && todo.title!=='') {
        props.addTodo(todo);
        setTodo(initialToDoState)
        setOpen(true)
    }
  }

  const handleClose =() => {
    setOpen(false)
  }

  const classes = useStyles();
  const [todo, setTodo] = useState(initialToDoState);
  const [open,setOpen] = useState(false)
  
  return (
    <div className={classes.addTodoContainer}>
      <Grid container spacing={4}>
        <Grid item xs={10} md={11}>
          <TextField color="secondary" id="title" name="title" value={todo.title} onKeyDown={handleKeyDown} onChange={handleInputChange} fullWidth placeholder=" Quick Add Item Here"></TextField>
        </Grid>
        <Grid item xs={2} md={1}>
          <Button onClick={handleAddClick} variant="contained" color="secondary" fullWidth className={classes.secondary} >
            Add items
          </Button>
        </Grid>
      </Grid>
      <TodoSnackBar message="Todo Addded Successfully" handleClose={handleClose} open={open}/>
    </div>
  );
};

export default AddTodo

