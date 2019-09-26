import React from 'react';

import {Topbar} from '@momentum-ui/react';

import Main from './Main';

function App() {
  return (
    <div className="App">
      <Topbar color="blue" title="Far End Camera Control" />
      <Main />
    </div>
  );
}

export default App;
