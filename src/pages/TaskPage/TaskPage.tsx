import { FormEvent, useState } from "react";
import InputText from "../../components/InputText";
import TaskList from "../../components/TaskList";
import Task from "../../core/types/Task";
import "./TaskPage.css";

export default function TaskPage() {
  const [ newTaskTitle, setNewTaskTitle ] = useState<string>('');
  const [ tasks, setTasks ] = useState<Task[]>([]);
  function inputTextChangeHandler(value: string): void {
    setNewTaskTitle(value);
  }
  function submitHandler(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    setTasks(old => [
      { title: newTaskTitle, id: Date.now() },
      ...old
    ]);
    setNewTaskTitle('');
  }
  function deleteHandler(task: Task): void {
    setTasks(old => old.filter(({ id }) => task.id !== id));
  }
  return (
    <div className="TaskPage">
      <form className="TaskPage__form" onSubmit={submitHandler}>
        <InputText
          onChange={inputTextChangeHandler}
          value={newTaskTitle}
          placeholder="Type a new task"
        />
        <button>
          Create task
        </button>
      </form>
      <div className="TaskPage__tasks">
        <TaskList
          tasks={tasks}
          onDelete={deleteHandler}
        />
      </div>
    </div>
  );
}