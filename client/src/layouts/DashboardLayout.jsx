import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { useUser } from '@clerk/clerk-react';

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
      <Header />
      <Outlet />
    </div>
  );
}
