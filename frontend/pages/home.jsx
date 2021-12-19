import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import redirect from 'nextjs-redirect';

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
          <div>Redirecting to github!</div>
        </Redirect>
      ) : (
        <h1>bem vindo a home</h1>
      )}
    </>
  );
};

export default MyHome;
