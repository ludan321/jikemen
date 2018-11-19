const initialState = {};
export default function resourceReducer(state = initialState, action) {
  switch (action.type) {
    // case 'RESOURCE':
    //   // console.log(action)
    //   return Object.assign({}, state, {
    //     resourceData: action.resourceData,
    //   });

    default:
      return initialState;
  }
}
