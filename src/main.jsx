import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App, { App2, doThing1, doThing2 } from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Help from './Help.jsx';
import Game from './Game.jsx';
import { CounterProvider } from './CounterProvider.jsx';
import TitleHomePage from './TitleHomePage.jsx';
import WhackAMoleGame from './WhackAMoleGame.jsx';
import { WhatAMoleGameProvider } from './WhackAMoleGameProvider.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: 
    <TitleHomePage />
  },
  {
    path: '/game',
    element: 
    <WhatAMoleGameProvider>
      <WhackAMoleGame />
    </WhatAMoleGameProvider>
  }, 
  {
    path: '/game/:difficulty',
    element: <Game />
  }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
