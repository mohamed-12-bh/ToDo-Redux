import {
  ADD_TASK,
  DELETE_TASK,
  COMPLETE_TASK,
  UPDATE_TASK
} from "../actions/actionTypes";

const initialState = [];

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      console.log(action.payload)
      return state.concat(action.payload);
    case DELETE_TASK:
      return state.filter(el => el.key !== action.payload);
    case COMPLETE_TASK:
      return state.map(el =>
        el.key === action.payload ? { ...el, checked: !el.checked } : el
      );
    case UPDATE_TASK:
      console.log(action.payload)
      return state.map(el =>
        el.key === action.payload.key
          ? { ...el, text: action.payload.text }
          : el
      );

    default:
      return state;
  }
};

export default itemReducer;
