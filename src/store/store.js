import { createStore } from 'redux';
import { ActionTypes } from "./action.types";


const INITIAL_STATE = {
  datasets: []
};

export const updateDatasets = datasets => ({
  type: ActionTypes.UPDATE_DATASETS,
  payload: datasets
});

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_DATASETS:
      return {
        ...state,
        datasets: action.payload
      }
    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default store;
