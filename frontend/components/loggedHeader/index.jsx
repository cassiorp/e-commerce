import React from 'react';
import Image from 'next/image';
import { LoggedHeaderContainer, Menu } from './styles';
import { logOutAction } from '../../sagas/actions/user';
import { useDispatch } from 'react-redux';

const LoggedHeader = () => {
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logOutAction());
  };

  return (
    <LoggedHeaderContainer>
      <Image src={'/logo.png'} alt={'logo'} width={'80px'} height={'40px'} />
      <Menu>
        <span className={'options'}>Inicio</span>
        <span className={'options'}>Perfil</span>
        <span onClick={() => logOut()} className={'options'}>
          Logout
        </span>
        <div className={'profile'}>
          <Image
            src={'/profile.png'}
            alt={'logo'}
            width={'40px'}
            height={'40px'}
          />
        </div>
      </Menu>
    </LoggedHeaderContainer>
  );
};

export default LoggedHeader;
