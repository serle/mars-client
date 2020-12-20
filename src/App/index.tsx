import React from 'react';
import { RecoilRoot } from 'recoil';

import './App.css';
import CommandForm from "../Components/CommandForm";
import AppHeader from "../Components/AppHeader";

function App() {
  return (
      <div className="app">
          <RecoilRoot>
              <AppHeader/>
              <React.Suspense fallback={<div>Loading...</div>}>
                <CommandForm/>
              </React.Suspense>
          </RecoilRoot>
      </div>
  )
}

export default App;
