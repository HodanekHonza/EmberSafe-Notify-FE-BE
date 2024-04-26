import React, {useEffect} from 'react';
import {Outlet, useNavigate} from 'react-router-dom';
import {useUser} from '@clerk/clerk-react';

import LayoutNavBar from './layoutDashboard/LayoutNavbar';

export default function DashboardLayout() {
    const {isSignedIn, user} = useUser();
    const navigate = useNavigate();
    useEffect(() => {
        if (!isSignedIn && user === null) {
            navigate("/sign-in");
        }
    }, [navigate, isSignedIn, user]);
    return (
        <div>
            {isSignedIn && <LayoutNavBar content={<Outlet/>}/>}
        </div>
    );
}
