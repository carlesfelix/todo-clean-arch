import { useState } from "react";
import InputText from "../../components/InputText";
import "./TaskPage.css";

export default function TaskPage() {
  const [ newTaskTitle, setNewTaskTitle ] = useState<string>('');
  function inputTextChangeHandler(value: string): void {
    setNewTaskTitle(value);
  }
  return (
    <div className="TaskPage">
      <form className="TaskPage__form">
        <InputText
          onChange={inputTextChangeHandler}
          value={newTaskTitle}
          placeholder="Type a new task"
        />
      </form>
      <div className="TaskPage__tasks">
        New task: {newTaskTitle}
      </div>
    </div>
  );
}