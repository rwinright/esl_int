import { FETCH_LEAGUES } from '../actions/types';

const initialState = {
  items: [], //All leagues
  item: {} //single league
}

export default function(state = initialState, action: any) {
  console.log(action.type)
  switch(action.type){
    case FETCH_LEAGUES:
      return {
        ...state,
        items: action.payload
      }
    default:
      console.log('Nothing happened')
      return state;
  }
}