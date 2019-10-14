import React from 'react';
import './App.scss';

//Redux crap
import {Provider} from 'react-redux';
import store from './store/store';

import TournamentMatches from './pages/TournamentMatches';

const App: React.FC = () => {

  return (
    <Provider store={store}>
      <div className="App">
        <TournamentMatches />
      </div>
    </Provider>
  );
}

export default App;
