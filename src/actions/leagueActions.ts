import { FETCH_LEAGUES } from '../actions/types';

export const fetchLeagues = () => {
  return (dispatch: any, getState: any) => {
    return fetch('https://cors-anywhere.herokuapp.com/https://api.eslgaming.com/play/v1/leagues/177161')
    .then(res => res.json())
    .then(ld => dispatch({
      type: FETCH_LEAGUES,
      payload: ld
    }))}
}