const defaultState = {
  tasks: [],
  currentId: 1
};

const defaultTask = {
  name: '',
  description: '',
  isCompleted: false,
  id: null,
}

const taskReducer = (state = defaultState, action) => {
  let task;
  let tasks;

  switch (action.type) {
    case "CREATE_TASK":
      task = { ...defaultTask, ...action.payload, id: state.currentId };
      tasks = [...state.tasks, task];

      return {
        ...state,
        tasks: tasks,
        currentId: state.currentId + 1
      };

    case "COMPLETE_TASK":
      tasks = state.tasks.map(task => task.id === action.payload ? { ...task, isCompleted: true } : task);

      return {
        ...state,
        tasks: tasks,
      };

      case "EDIT_TASK":
        tasks = state.tasks.map(task => task.id === action.payload.id ? { ...task, ...action.payload } : task);

        return {
          ...state,
          tasks: tasks,
        };

        case "DELETE_TASK":
          tasks = state.tasks.filter(task => task.id !== action.payload);
          // let taskIndex = state.tasks.findIndex(task => task.id === action.payload);
          // tasks = state.tasks;
          // tasks.splice(taskIndex, 1); // more complicated way to delete task from the array

          return {
            ...state,
            tasks: tasks,
          };

    default:
      return state;
  }
};

export default taskReducer;
