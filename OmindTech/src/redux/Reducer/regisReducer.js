import * as types from '../Constant/actionType';
const initialState = {
  loading: false,
  error: null,
  dataReducer: [],
};

function regisReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_REQUEST:
      return Object.assign({}, state, {
        loading: true,
      });
    case types.GET_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        dataReducer: action.dataAction.data,
      });
    case types.GET_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        error: action.error,
      });
    default:
      return state;
  }
}

export default regisReducer;
