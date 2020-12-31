import React, { Fragment, useState } from "react";


//Material Components
import { Card, CardContent, CardHeader, IconButton, InputAdornment, TableContainer, TextField, Typography } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import { makeStyles } from "@material-ui/styles";
//Thirdparty packages
import Moment from "react-moment";

import { getChipLabel } from "../utils/todoUtils";
import PriorityMenuItem from "./MenuItems/PriorityMenuItem";
import StatusMenuItem from "./MenuItems/StatusMenuItem";

const useStyles = makeStyles((theme) => ({
  cardContent: {
    padding: 0,
  },
  tableHeader: {
    backgroundColor: "#fafafa",
    textTransform: "uppercase",
    fontSize: 12,
    padding: 12,
  },
  divider: {
    height: 2,
  },
  headerCell: {
    padding: 8,
  },
  icon: {
    marginRight: theme.spacing(2),
  },
}));

const ToDoListShare = (props) => {
  const [search, setSearch] = useState(null);
  const classes = useStyles();

  return (
    <Card>
      <CardHeader
        disableTypography={true}
        title={
          <Typography variant="h5" component="h1">
            List Items
          </Typography>
        }
      
      ></CardHeader>
      <CardContent className={classes.cardContent}>
      <TableContainer className={classes.tableContainer}>
        <Table stickyHeader aria-label="simple table">
          <TableHead className={classes.tableHeader}>
            <TableRow>
              <TableCell className={classes.headerCell} align="left">
                Name
              </TableCell>
              <TableCell
                className={classes.headerCell}
                align="left"
              ></TableCell>
              <TableCell className={classes.headerCell} align="left">
                Priority
              </TableCell>
              <TableCell className={classes.headerCell} align="left">
                Status
              </TableCell>
              <TableCell className={classes.headerCell} align="left">
                Due date
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(!props.isFiltered ? props.todos : props.filteredTodos)
              .filter((todo) => {
                if (search == null) return todo;
                else if (
                  todo.title.toLowerCase().includes(search.toLowerCase()) ||
                  todo.description.toLowerCase().includes(search.toLowerCase())
                ) {
                  return todo;
                }
              })
              .map((todo, index) => (
                <TableRow key={index}>
                  <TableCell className={classes.headerCell} align="left">{todo.title}</TableCell>
                  <TableCell  className={classes.headerCell} align="left">
                    {getChipLabel(todo.chipId)}
                  </TableCell>
                  <TableCell align="left" className={classes.headerCell}>
                    <PriorityMenuItem
                      todo={todo}
                    />
                  </TableCell>
                  <TableCell className={classes.headerCell} >
                    <StatusMenuItem
                      todo={todo}
                    />
                  </TableCell>
                  <TableCell  className={classes.headerCell} align="left">
                    <Moment format="Do MMM YYYY">{todo.dueDate}</Moment>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default ToDoListShare;