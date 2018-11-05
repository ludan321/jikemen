
const initialState = {}
export default function mobileBankReducer(state = initialState, action) {
    switch (action.type) {

        case "login":
            return Object.assign({}, state, {
                loginState: action.login
            });

        default:
            return initialState;
    }
}
