import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';

import LayoutNavBar from './layoutDashboard/LayoutNavbar';

export default function DashboardLayout() {
  const { isSignedIn, user, isLoaded } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(user)

    if (!isSignedIn && isLoaded) {

      console.log("NOT LOGGED IN ");
      navigate('/sign-in');
    }
  }, [isSignedIn, isLoaded, navigate, user]);

  return (
    <div>
      <LayoutNavBar content={<Outlet />} />
    </div>
  );
}
