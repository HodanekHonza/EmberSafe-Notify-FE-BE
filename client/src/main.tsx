
// @ts-expect-error Weird Errors with intellij, some linting or some tooling?
// vscode and nvim is fine for me. maybe intellij is MoreStrict on this
import ReactDOM from 'react-dom/client'
import RoomPage from './routes/dashboard/RoomPage.jsx'
import RoomGraphPage from './routes/dashboard/RoomGraphPage.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ClerkProvider } from '@clerk/clerk-react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {StrictMode} from "react";
import './index.css'
import ErrorPage from './routes/root/ErrorPage.jsx';
import RootLayout from './layouts/RootLayout.jsx'
import RoomsPage from './routes/dashboard/RoomsPage.jsx'
import DashboardLayout from './layouts/DashboardLayout.jsx'
import IndexPage from './routes/root/IndexPage.jsx'
import ContactPage from './routes/root/ContactPage.jsx'
import SignInPage from './routes/root/SignInPage.jsx'
import SignUpPage from './routes/root/SignUpPage.jsx'
import UserProfilePage from './routes/dashboard/UserProfilePage.jsx'
import DashboardProvider from "./providerContext/DashboardProvider.jsx"
import Faq from './routes/root/FaqPage.jsx'


const queryClient = new QueryClient()
// @ts-expect-error-error
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
//might fuc me later, IDK why vite import keys gives this weird red error,
// only in editor, but my app works as it should, so I just slapped ts ignore expect ErrorError? hmm

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <IndexPage /> },
      { path: '/contact', element: <ContactPage /> },
      { path: '/faq', element: <Faq /> },
      { path: '/sign-in', element: <SignInPage /> },
      { path: '/sign-up', element: <SignUpPage /> },
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
            path: "/dashboard/room/:roomId",
            element: <RoomPage />,
          },
          {
            path: "/dashboard/room/graph",
            element: <RoomGraphPage />,
          },
        ],
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <DashboardProvider>
          <RouterProvider router={router} />
        </DashboardProvider>
      </ClerkProvider>
    </QueryClientProvider>
  </StrictMode>,
)
