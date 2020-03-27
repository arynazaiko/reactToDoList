const defaultState = {
  subtasks: [],
  currentId: 1
};

const defaultSubTask = {
  name: "",
  id: null,
  taskId: null,
};

const subTaskReducer = (state = defaultState, action) => {
  let subtask;
  let subtasks;

  switch (action.type) {
    case "CREATE_SUBTASK":
      subtask = { ...defaultSubTask, ...action.payload, id: state.currentId };
      subtasks = [...state.subtasks, subtask];

      return {
        ...state,
        subtasks: subtasks,
        currentId: state.currentId + 1
      };

      case "DELETE_SUBTASK":
        subtasks = state.subtasks.filter(subtask => subtask.id !== action.payload);

      return {
        ...state,
        subtasks: subtasks,
      };

    default:
      return state;
  }
};

export default subTaskReducer;
