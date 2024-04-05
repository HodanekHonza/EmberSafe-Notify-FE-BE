import React from 'react'
import ReactDOM from 'react-dom/client'
import EditRoomPage from './routes/EditRoomPage.jsx'
import RoomPage from './routes/RoomPage.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ClerkProvider, SignUp } from '@clerk/clerk-react'
import ErrorPage from './routes/ErrorPage.jsx';
import Root from './routes/Root.jsx'
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage/> ,
    children: [
      {
        path: "room/:roomId",
        element: <RoomPage />,
      },
    ],
  },
  {
    path: "/signin",
    element: <SignUp />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </React.StrictMode>,
)
