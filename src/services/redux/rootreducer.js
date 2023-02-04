import {combineReducers} from 'redux';
import CartReducer from './CartReducer/reducer';
import PersonReducer from './PeronReducer/reducer';
const rootReducer = combineReducers({
  CartReducer: CartReducer,
  PersonReducer: PersonReducer,
});
export default rootReducer;
