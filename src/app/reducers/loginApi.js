
const initialState = {
    login_Type: false,
}

export default function loginType (state = initialState, action) {
    switch (action.type) {
        case "SAVE_ITME_INFO":
            return {
                ...state,
                login_Type: action.login_Type, 
            }
        case 'SAVE_LOGIN_OUT_TYPE':
            return {
                ...state,
                login_Type: action.login_Type, 
            }        
        default:
            return initialState;
    }
}
