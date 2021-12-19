import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import redirect from 'nextjs-redirect';
import LoggedHeader from '../components/loggedHeader';
import SideMenu from "../components/sideMenu";

const MyHome = () => {
  const login = useSelector((state) => state?.logged);
  const Redirect = redirect('http://localhost:3000');

  useEffect(() => {
    if (login) return;
  }, [login]);
  return (
    <>
      {!login ? (
        <Redirect>
          <div>Logout...</div>
        </Redirect>
      ) : (
        <>
          <LoggedHeader />
          <SideMenu />
        </>
      )}
    </>
  );
};

export default MyHome;
