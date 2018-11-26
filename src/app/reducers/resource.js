const initialState = {};
export default function resourceReducer(state = initialState, action) {
  // console.log(state)
  switch (action.type) {
    case 'RESOURCE':
      // console.log(action)
      return Object.assign({}, state, {
        resourceData: action.resourceData,
      });

    default:
      return state;
  }
}
