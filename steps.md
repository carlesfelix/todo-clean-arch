# Steps
## Step 1
- Create a component called `TaskPage`.
- Create a controlled input text component with the following properties: `value`, `onChange` and `placeholder`.
- Place a form with a single inputtext field (task title) in order to create a task in TaskPage.
- Display the inputtext value in the TaskPage.

## Step 2
- Create a component called `TaskList` with the following properties: `tasks`
- In `TaskPage`, create a task list state and pass it to the `TaskList` component.
- Add some mocked tasks to the task list state as the default value.

## Step 3
- Add a submit feature to the form in `TaskPage`.
- Add the task submitted in the tasks state in `TaskPage`.
- Replace initial state to an empty array.

# step 4
- Add delete feature to the task list

# step 5
- Wrap the App with the CoreProvider in the React entry point file.
- Add the following types to `core/interactors/TaskPage/types.ts`
```typescript
  export type TaskPageActionsProps = PropsWithDispatch<{
    setTaskForm: Dispatch<SetStateAction<TaskForm>>;
    setTasks: Dispatch<SetStateAction<Task[]>>;
    taskForm: TaskForm;
    tasks: Task[];
  }>;

  export type TaskPageActionReturn = {
    addTask: () => void;
    deleteTask: (task: Task) => void;
    taskForm: {
      title: InputTextProps
    };
    tasks: Task[];
  }

  export type TaskForm = { title: string };

  export type UseTaskPageProps = {};

  export type UseTaskPageReturn = {
    taskForm: TaskForm;
    tasks: Task[],
    setTaskForm: Dispatch<SetStateAction<TaskForm>>;
    setTasks: Dispatch<SetStateAction<Task[]>>;
  };
```
- Migrate all logic in `core/interactors/TaskPage` from `TaskPage` component.
  - Create `core/interactors/TaskPage/TaskPageActions` and return an object with all possible handlers.
  ```typescript
    export default function TaskPageActions(props: TaskPageActionsProps): TaskPageActionReturn {
    const {
      dispatch, setTaskForm, setTasks,
      taskForm, tasks
    } = props;
    return {
      addTask: () => {
        setTasks(old => [
          { title: taskForm.title, id: Date.now() },
          ...old
        ]);
        setTaskForm(old => ({
          ...old,
          title: ''
        }));
      },
      deleteTask: task => {
        setTasks(old => old.filter(({ id }) => task.id !== id));
      },
      taskForm: {
        title: {
          onChange: newTaskTitle => {
            setTaskForm(old => ({
              ...old,
              title: newTaskTitle
            }));
          },
          value: taskForm.title
        }
      },
      tasks
    };
  }
  ```
  - Create `core/interactors/TaskPage/useTaskPage` and cut and paste from `TaskPage` component all hooks to this module.
  ```typescript
    export default function usePerformancePage(
      props: UseTaskPageProps
    ): UseTaskPageReturn {
      const [ taskForm, setTaskForm ] = useState<{ title: string }>({
        title: ''
      });
      const [ tasks, setTasks ] = useState<Task[]>([]);

      // Return complex state (a bunch of combined atomic hooks)
      return {
        taskForm,
        tasks,
        setTaskForm,
        setTasks
      };
    }
  ```
