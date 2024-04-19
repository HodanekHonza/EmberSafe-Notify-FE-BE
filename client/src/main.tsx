import React from 'react'
import ReactDOM from 'react-dom/client'
import EditRoomPage from './routes/dashboard/EditRoomPage.jsx'
import RoomPage from './routes/dashboard/RoomPage.jsx'
import AddRoomPage from './routes/dashboard/AddRoomPage.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ClerkProvider } from '@clerk/clerk-react'
import ErrorPage from './routes/root/ErrorPage.jsx';
import RootLayout from './layouts/RootLayout.jsx'
import RoomsPage from './routes/dashboard/RoomsPage.jsx'
import DashboardLayout from './layouts/DashboardLayout.jsx'
import IndexPage from './routes/root/IndexPage.jsx'
import ContactPage from './routes/root/ContactPage.jsx'
import SignInPage from './routes/root/SignInPage.jsx'
import SignUpPage from './routes/root/SignUpPage.jsx'
import UserProfilePage from './routes/root/UserProfilePage.jsx'
import DashboardProvider from "./providerContext/DashboardProvider.jsx"
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Faq from './routes/root/FaqPage.jsx'

const queryClient = new QueryClient()
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <IndexPage /> },
      { path: '/contact', element: <ContactPage /> },
      { path: '/sign-in', element: <SignInPage /> },
      { path: '/sign-up', element: <SignUpPage /> },
      { path: '/faq', element: <Faq /> },
      
      {
        element: <DashboardLayout />,
        path: 'dashboard',
        children: [
          {
            path: "/dashboard/user-profile",
            element: <UserProfilePage />,
          },
          {
            path: "/dashboard",
            element: <RoomsPage />,
          },
          {
            path: "/dashboard/room/:roomId/edit",
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
        ],
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <DashboardProvider>
          <RouterProvider router={router} />
        </DashboardProvider>
      </ClerkProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
