import styled from 'styled-components';

export const LoggedHeaderContainer = styled.div`
  background-color: #0070f3;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .options {
    margin: 10px;
    padding: 10px;
    cursor: pointer;
  }

  .profile {
    padding: 10px;
    span {
      display: inline-block;
      border-radius: 50%;
    }
  }
`;
