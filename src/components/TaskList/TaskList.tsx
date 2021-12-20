import { TaskListProps } from "./types";

export default function TaskList(props: TaskListProps) {
  const { tasks } = props;
  return (
    <ul className="TaskList">
      {
        tasks.map(task => (
          <li key={task.id}>
            {task.title}
          </li>
        ))
      }
    </ul>
  );
}
