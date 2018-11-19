import {combineReducers} from 'redux';

import loginReducer from '../app/reducers/login';
import resourceReducer from '../app/reducers/resource';
import recordReducer from '../app/reducers/record';
import loginApi from '../app/reducers/loginApi';
import todos from '../app/reducers/todos';
import visibilityFilter from '../app/reducers/visibilityFilter';

// const rootReducer = combineReducers({helloworldReducer, depositRecordsReducer, depositPageReducer, homePageReducer});
const rootReducer = combineReducers({
  loginReducer: loginReducer,
  resourceReducer: resourceReducer,
  recordReducer: recordReducer,
  loginApi: loginApi,
    todos,
    visibilityFilter
});

export default rootReducer;
