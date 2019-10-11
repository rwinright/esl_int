import { FETCH_LEAGUES } from './types';

export const fetchPosts = () => (dispatch:any) => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => dispatch({
      type: FETCH_LEAGUES,
      payload: data
    }))
}