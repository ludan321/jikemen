
const initialState = {}
export default function resouseReducer(state = initialState, action) {
    switch (action.type) {

        case "RESOUSE":
            // console.log(action)
            return Object.assign({}, state, {
                resouseData: action.resouseData
            });

        default:
            return initialState;
    }
}
