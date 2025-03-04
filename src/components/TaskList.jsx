import { Box, Button, Modal, Typography } from "@mui/material";
import "../assets/App.css";
import { TaskComponent } from "./TaskComponent";
import { useState } from "react";

export const TaskList = ({ tasksList, Del, setFecha,setPriority}) => {

return (
    <div className="TasksComponent">

      {tasksList.map((task) => (
        <TaskComponent
          id={task.id}
          key={task.id}
          name={task.taskName}
          fecha={task.fecha}
          prioridad = {task.prioridad}
          Del={Del}
          setFecha={setFecha}
           setPriority={setPriority}
        />
      ))}
   
    </div>
      
  );
};
