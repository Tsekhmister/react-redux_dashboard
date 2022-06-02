import { ADD_FILTER, REMOVE_FILTER, CLEAR_FILTER } from "./filter_actions";

export const filterReducer = (state = [], action) => {
  switch (action.type) {
    case CLEAR_FILTER : {
      return [];
    }

    case ADD_FILTER : {
      if (!state.includes(action.payload)) {
        return [
          ...state,
          action.payload,
        ]
      }

      return state;
    }
    
    case REMOVE_FILTER : {
      return state.filter(item => item !== action.payload )
    }


    default: {
      return state;
    }
  }

}