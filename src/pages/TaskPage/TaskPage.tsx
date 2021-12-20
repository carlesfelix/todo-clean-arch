import { FormEvent } from "react";
import { useDispatch } from "../../core/utils/react-redux";
import InputText from "../../components/InputText";
import TaskList from "../../components/TaskList";
import { TaskPageActions, useTaskPage } from "../../core/interactors/TaskPage";
import Task from "../../core/types/Task";
import "./TaskPage.css";

export default function TaskPage() {
  const dispatch = useDispatch();
  const {
    setTaskForm, taskForm, tasks,
    totalTasks
  } = useTaskPage({});
  const actions = TaskPageActions({
    dispatch, setTaskForm,
    taskForm
  });
  function inputTextChangeHandler(value: string): void {
    actions.taskForm.title.onChange(value);
  }
  function submitHandler(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    actions.addTask();
  }
  function deleteHandler(task: Task): void {
    actions.deleteTask(task);
  }
  return (
    <div className="TaskPage">
      <form className="TaskPage__form" onSubmit={submitHandler}>
        <InputText
          onChange={inputTextChangeHandler}
          value={taskForm.title}
          placeholder="Type a new task"
        />
        <button>
          Create task
        </button>
        Total tasks: {totalTasks}
      </form>
      <div className="TaskPage__tasks">
        <TaskList
          tasks={tasks.data}
          onDelete={deleteHandler}
        />
      </div>
    </div>
  );
}