const defaultState = {
  subtasks: [],
  currentId: 1
};

const defaultSubTask = {
  name: "",
  id: null
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

    default:
      return state;
  }
};

export default subTaskReducer;
