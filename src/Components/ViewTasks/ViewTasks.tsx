import React from "react";
import "./ViewTasks.css";
interface sampletask {
  tasks: { id: number; task: string }[];
  deleteTask: Function;
}

const ViewTasks: React.FC<sampletask> = (props) => {
  const deleteTaskHandler = (event: number) => {
    props.deleteTask(event);
  };

  return (
    <div className="view-tasks">
      {props.tasks.map((task) => (
        <div className="single-task" key={task.id}>
          {" "}
          <div className="task-text">{task.task}</div>{" "}
          <div className="delete-button">
            <button onClick={() => deleteTaskHandler(task.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ViewTasks;
