
const initialState = {
    PlayData:{
        currentPlay:""
    }

}
export default function recordReducer(state = initialState, action) {


    switch (action.type) {
        case "OPENPANNEL":
            return Object.assign({}, state, {
                pannel: action.pannelData
            });
        case "PLAY":
            return Object.assign({}, state, {
                PlayData: action.playData
            });
            break;
        // case 'RESOURCE':
        //     // console.log(action)
        //     return Object.assign({}, state, {
        //         resourceData: action.resourceData,
        //     });
        default:
            return state;
    }
}
