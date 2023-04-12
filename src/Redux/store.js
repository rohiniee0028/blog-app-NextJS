import { combineReducers, applyMiddleware, legacy_createStore } from 'redux';
import thunk from 'redux-thunk';
import { AuthReducer } from './AuthReducer/authReducer';
import { BlogReducer } from './BlogReducer/blogReducer';

const rootReducer = combineReducers({
  Auth : AuthReducer,
  blogs : BlogReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));