import "./assets/App.css";
import React, { useState } from "react";
import { InputComponent } from "./components/InputComponent";
import { TaskList } from "./components/TaskList";
import { Box, Button, Modal, Typography } from "@mui/material";

export const App = () => {
  const [inputValue, setinputValue] = useState("");
  const [tasksList, settaskList] = useState([]);
  const [open, setOpen] = useState(false);
  function setValue(e) {
    setinputValue(e.target.value);
  }

  function numAleat() {
    return Math.floor(Math.random() * 300);
  }

  function addTask() {
    const newTask = {
      id: numAleat(),
      taskName: inputValue,
      fecha: "",
      prioridad: "",
    };
    settaskList([...tasksList, newTask]);

    setinputValue("");
  }

  function del(id) {
    const filtredList = tasksList.filter((task) => {
      return task.id != id;
    });
    settaskList(filtredList);
  }

  function setFecha(id, e) {
    const setDate = tasksList.map((task) => {
      if (task.id == id) {
        task.fecha = e.target.value;
      }
      return task;
    });
    settaskList(setDate);
  }

  function setPriority(id, prior) {
    const setPrior = tasksList.map((task) => {
      if (task.id == id) {
        task.prioridad = prior;
      }
      return task;
    });
    settaskList(setPrior);
  }

  function sortDate() {
    const sortbyD = tasksList.sort((a, b) => {
      return new Date(a.fecha) - new Date(b.fecha);
    });

    settaskList(sortbyD);
  }
  function sortPriority() {
    const ordenPrioridad = ["alta", "media", "baja"];

    const sortByPri = tasksList.sort((a, b) => {
      return (
        ordenPrioridad.indexOf(a.prioridad) -
        ordenPrioridad.indexOf(b.prioridad)
      );
    });

    settaskList(sortByPri);
  
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <main>
      <InputComponent
        InputValue={inputValue}
        setValue={setValue}
        addTask={addTask}
        sortDate={sortDate}
        handleOpen={handleOpen}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: 400,
        }}
      >
        <Button
          variant="contained"
          size="medium"
          sx={{ fontSize: 12, p: 2, lineHeight: 3 }}
          onClick={handleOpen}
        >
          Sort
        </Button>
        <Button
          size="medium"
          variant="contained"
          sx={{ fontSize: 10, p: 2, lineHeight: 1 }}
        >
          Delete Completed
        </Button>
        <Button
          variant="contained"
          size="medium"
          sx={{ fontSize: 10, p: 2, lineHeight: 1 }}
        >
          Delete All
        </Button>
      </Box>
      <TaskList
        tasksList={tasksList}
        Del={del}
        setFecha={setFecha}
        setPriority={setPriority}
      />
      <Modal
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            backgroundColor: "rgb(71, 71, 71)",
            height: 300,
            width: 400,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <button onClick={handleClose}>x</button>
          <Typography variant="h4">Ordenar</Typography>
          <Button variant="contained" onClick={() => sortDate()}>
            Por Fecha
          </Button>
          <Button variant="contained" onClick={()=> sortPriority()}>Por Prioridad</Button>
        </Box>
      </Modal>
    </main>
  );
};

export default App;
