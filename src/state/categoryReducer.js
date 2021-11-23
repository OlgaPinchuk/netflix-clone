export default function categoryReducer(state, action) {
  switch (action.type) {
    case "CREATE_CATEGORY":
      return createCategory(state, action);
    case "READ_DATA":
      return readAllCategories(state, action);
    case "DELETE_CATEGORY":
      return deleteCategory(state, action);
    default:
      throw new Error(`No action type found ${action.type}`);
  }
}

function createCategory(state, action) {
  const { payload } = action;
  if (payload !== null) {
    return [...state, payload];
  }
  return state;
}

function readAllCategories(state, action) {
  const { payload } = action;

  if (payload !== null) return payload;
  return state;
}

function deleteCategory(state, action) {
  const { payload } = action;
  if (payload !== null) {
    return [...state, state.filter((item) => item.id !== payload)];
  }
  return state;
}
