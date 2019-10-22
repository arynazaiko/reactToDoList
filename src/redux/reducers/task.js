const defaultState = {
  tasks: [],
  currentId: 1
};

const defaultTask = {
  name: '',
  description: '',
  isCompleted: false,
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
        tasks: tasks
      };

    default:
      return state;
  }
};

export default taskReducer;
