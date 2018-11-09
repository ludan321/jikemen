import {combineReducers} from 'redux';

import loginReducer from '../app/reducers/login';
import resouseReducer from "../app/reducers/resource"
import recordReducer from  "../app/reducers/record"


// const rootReducer = combineReducers({helloworldReducer, depositRecordsReducer, depositPageReducer, homePageReducer});
const rootReducer = combineReducers({
    loginReducer: loginReducer,
    resouseReducer:resouseReducer,
    recordReducer:recordReducer

});

export default rootReducer