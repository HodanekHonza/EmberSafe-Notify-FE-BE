import React from 'react'
import ReactDOM from 'react-dom/client'
import EditRoomPage from './routes/EditRoomPage.jsx'
import RoomPage from './routes/RoomPage.jsx'
import AddRoomPage from './routes/AddRoomPage.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ClerkProvider, SignUp } from '@clerk/clerk-react'
import ErrorPage from './routes/ErrorPage.jsx';
import Root from './routes/Root.jsx'
import RoomsPage from './routes/RoomsPage.jsx'
import DashboardLayout from './layouts/DashboardLayout.jsx'
import IndexPage from './routes/IndexPage.jsx'
import ContactPage from './routes/ContactPage.jsx'
import SignInPage from './routes/SignInPage.jsx'
import SignUpPage from './routes/SignUpPage.jsx'
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <IndexPage /> },
      { path: '/contact', element: <ContactPage /> },
      { path: '/sign-in', element: <SignInPage /> },
      { path: '/sign-up', element: <SignUpPage /> },
      {
        element: <DashboardLayout />,
        path: 'dashboard',
        children: [
          {
            path: "/dashboard/rooms",
            element: <RoomsPage />,
          },
          {
            path: "/dashboard/room/:roomId/edit/",
            element: <EditRoomPage />,
          },
          {
            path: "/dashboard/room/:roomId",
            element: <RoomPage />,
          },
          {
            path: "/dashboard/room/add",
            element: <AddRoomPage />,
          },
          {
            path: "/dashboard/signin",
            element: <SignUp />,
          }
        ],
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </React.StrictMode>,
)
