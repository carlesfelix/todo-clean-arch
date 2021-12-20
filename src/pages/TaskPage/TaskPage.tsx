import { useState } from "react";
import InputText from "../../components/InputText";
import TaskList from "../../components/TaskList";
import Task from "../../core/types/Task";
import "./TaskPage.css";

export default function TaskPage() {
  const [ newTaskTitle, setNewTaskTitle ] = useState<string>('');
  const [ tasks, setTasks ] = useState<Task[]>([
    { id: 1, title: 'My first task' },
    { id: 2, title: 'My second task' }
  ]);
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
        <TaskList tasks={tasks} />
      </div>
    </div>
  );
}