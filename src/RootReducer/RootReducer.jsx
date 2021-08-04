import { combineReducers } from 'redux';

import taskAdd from './Reducer';

const rootReducer = combineReducers({
    taskAdd,
});

export default rootReducer;
