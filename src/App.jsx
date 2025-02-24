import "./assets/App.css";
import React, { useState } from "react";
import { InputComponent } from "./components/InputComponent";
import { TaskList } from "./components/TaskList";


export const App = () => {
  
  const [inputValue, setinputValue] = useState("");
  const [tasksList, settaskList] = useState([]);

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
  return (
    <main>
      <InputComponent
        InputValue={inputValue}
        setValue={setValue}
        addTask={addTask}
      />
      <TaskList tasksList={tasksList} Del={del} />
    
    </main>
  );
};

export default App;
