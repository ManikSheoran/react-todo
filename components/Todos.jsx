import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import AddTodo from "./AddTodo";

const initialTodos = [
  { id: 1, text: "Read Newspaper", completed: true },
  { id: 2, text: "Complete ML - 1 video", completed: false },
  { id: 3, text: "Walk 10000 steps", completed: false },
];

export default function Todos() {
  const [todos, setTodos] = React.useState(initialTodos);

  const removeTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((t) => t.id !== id);
    });
  };

  const handleToggle = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    });
  };

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {todos.map((item) => {
        const labelId = `checkbox-list-label-${item.id}`;
        return (
          <ListItem
            key={item.id}
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="comments"
                onClick={() => removeTodo(item.id)}
              >
                <CancelOutlinedIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton role={undefined} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={item.completed}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                  onChange={() => handleToggle(item.id)}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={item.text} />
            </ListItemButton>
          </ListItem>
        );
      })}
      <AddTodo />
    </List>
  );
}
