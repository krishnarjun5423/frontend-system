export const initialState = {
  data: [],
};

function reducer(state, action) {
  console.log(action);

  switch (action.type) {
    case "ADD_PART_ONE_DATA_TO_STORE":
      //LOGIC
      return {
        ...state,
        data: [...state.data, action.part_one_data],
      };
      break;
    case "ADD_PART_TWO_DATA_TO_STORE":
      //LOGIC
      return {
        ...state,
        data: [...state.data, action.part_two_data],
      };
      break;
    case "ADD_PART_THREE_DATA_TO_STORE":
      //LOGIC
      return {
        ...state,
        data: [...state.data, action.part_three_data],
      };
      break;
    default:
      return state;
  }
}

export default reducer;
