import {combineReducers} from 'redux';
import exampleReducer from './example/exampleReducer';

const rootReducer = combineReducers({
  exampleReducer,
});
export default rootReducer;
