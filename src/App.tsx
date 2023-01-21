import React from 'react';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import GameStart from "./components/GameStart/GameStart";
import MillionaireChance from "./components/MillionaireChance/MillionaireChance";
import EndGame from "./components/EndGame/EndGame";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import {Context} from './context/context';

function App() {
  const [prize, setPrize] = React.useState<string>('$ 0');
  const earnedPrizeValue = {prize, setPrize};

  const router = createBrowserRouter([
      {
          path: '/',
          element: <GameStart />,
          errorElement: <ErrorPage />
      },
      {
          path: '/millionaire-chance',
          element: <MillionaireChance />,
          errorElement: <ErrorPage />,
      },
      {
          path: '/millionaire-end',
          element: <EndGame prize={prize}/>,
          errorElement: <ErrorPage />,
      },
  ])

  const composedApp =  (
      <Context.Provider
          value={earnedPrizeValue}
      >
          <RouterProvider router={router}/>
      </Context.Provider>
  )

  return (
    <div className="App">
      {composedApp}
    </div>
  );
}

export default App;
