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

const router = createBrowserRouter([
  {
    path: '/',
    element: 
    <CounterProvider>
          <App />
    </CounterProvider>
  },
  {
    path: '/help',
    element: <Help />
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
