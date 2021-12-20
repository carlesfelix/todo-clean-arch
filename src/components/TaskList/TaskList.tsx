import { MouseEventHandler } from "react";
import Task from "../../core/types/Task";
import { TaskListProps } from "./types";

export default function TaskList(props: TaskListProps) {
  const { tasks, onDelete } = props;
  function deleteHandler(task: Task): MouseEventHandler<HTMLButtonElement> {
    return () => {
      onDelete(task);
    }
  }
  return (
    <ul className="TaskList">
      {
        tasks.map(task => (
          <li key={task.id}>
            {task.title}
            <button onClick={deleteHandler(task)}>Delete</button>
          </li>
        ))
      }
    </ul>
  );
}
