import React, { FormEvent, useRef } from "react";
import "./CreateTask.css";
interface sample {
  addTask: Function;
}

const CreateTask: React.FunctionComponent<sample> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleForm = (event: FormEvent) => {
    event.preventDefault();
    if (inputRef.current!.value.length > 0)
      props.addTask(inputRef.current!.value);
    inputRef.current!.value = "";
  };

  return (
    <div className="form">
      <form onSubmit={handleForm}>
        <div className="input-task">
          <input type="text" ref={inputRef} />
          <button>Add Task</button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
