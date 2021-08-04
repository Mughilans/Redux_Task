import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../RootReducer/RootReducer';


const middleware = [logger, thunk];

const Store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware)),
);


export default Store