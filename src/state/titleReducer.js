export default function titleReducer(state, action) {
  switch (action.type) {
    case "CREATE_TITLE":
      return createTitle(state, action);
    case "READ_TITLE":
      return readTitle(state, action);
    case "UPDATE_TITLE":
      return updateTitle(state, action);
    case "DELETE_TITLE":
      return deleteTitle(state, action);
    default:
      throw new Error(`No action type found ${action.type}`);
  }
}

function createTitle(state, action) {
  const { payload } = action;

  if (payload !== null) return [...state, payload];
  return state;
}

function readTitle(state, action) {
  const { payload } = action;

  if (payload !== null) return payload;
  return state;
}

function updateTitle(state, action) {
  const { payload } = action;
  const newState = [...state];
  const index = newState.findIndex((item) => item.id === payload.id);

  newState[index] = { ...payload };
  return newState;
}

function deleteTitle(state, action) {
  const { payload } = action;
  if (payload !== null) {
    return [...state, state.filter((item) => item.id !== payload)];
  }
  return state;
}