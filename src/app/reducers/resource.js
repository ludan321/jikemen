const initialState = {}
export default function resouseReducer(state = initialState, action) {
    switch (action.type) {

        case "RESOUSE":
            // console.log(action)PLAY
            return Object.assign({}, state, {
                resouseData: action.resouseData
            });
            break;

        default:
            return initialState;
    }
}
