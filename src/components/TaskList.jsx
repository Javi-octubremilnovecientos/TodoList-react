import "../assets/App.css";
import { TaskComponent } from "./TaskComponent";


export const TaskList = ({tasksList, Del}) => {

return (
    <div className="TasksComponent">
      {
       tasksList.map((task) => (
        <TaskComponent
        id={task.id}
        key={task.id}
        name={task.taskName }
        Del={Del}
     
        />
      ))}
    </div>
  );
};
