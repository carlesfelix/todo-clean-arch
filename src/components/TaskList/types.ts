import Task from "../../core/types/Task";

export type TaskListProps = {
  tasks: Task[];
  onDelete: (task: Task) => void;
};
