const defaultState = {
  tasks: [],
  currentId: 1
};

const taskReducer = (state = defaultState, action) => {
  let task;
  let tasks;

  switch (action.type) {
    case "CREATE_TASK":
      task = { ...action.payload, id: state.currentId };
      tasks = [ ...state.tasks, task ];

      return {
        ...state,
        tasks: tasks,
        currentId: state.currentId + 1,
      };

    default:
      return state;
  }
};

export default taskReducer;
