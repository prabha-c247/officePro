import { combineReducers } from 'redux';
import {planReducer} from '../reducers/planReducer';
import schoolReducer from '../reducers/schoolReducer';
import { userReducer } from '../reducers/userReducer';
import settingReducer from "../reducers/settingReducer";

const rootReducer = combineReducers({
  plan: planReducer,     // planReducer handles 'plan' state
  school: schoolReducer, // schoolReducer handles 'school' state
  user:userReducer,
  setting: settingReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
