import React, { useState } from "react";
import { ListItem, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { v4 as uuid } from "uuid";

export default function AddTodo({ addTodo }) {
  const [text, setText] = useState("");

  const handleChange = (evt) => {
    setText(evt.target.value);
  };

  const handleAddTodo = () => {
    if (text.trim()) {
      addTodo({ id: uuid(), text: text.trim(), completed: false });
      setText("");
    }
  };

  return (
    <ListItem>
      <TextField
        id="outlined-basic"
        label="New Task"
        variant="outlined"
        onChange={handleChange}
        value={text}
        sx={{ marginRight: 2 }}
      />
      <Button variant="outlined" onClick={handleAddTodo}>
        Add
      </Button>
    </ListItem>
  );
}
