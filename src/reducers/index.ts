import { combineReducers } from "redux";
import leagueReducer from './leagueReducer';

export default combineReducers({
  leagueData: leagueReducer
})