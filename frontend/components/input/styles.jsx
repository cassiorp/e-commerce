import styled from 'styled-components';

export const InputContainer = styled.input`
  flex: 1 0;
  min-width: 50px;
  padding: 10px;
  min-height: 25px;
  font-size: inherit;
  border: unset;
  background-color: #f5f5f5;
  &:focus {
    outline: none;
  }
`;

export const Container = styled.div`
  font-family: 'Arial';
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  background-color: #f5f5f5;
  border-bottom: 1px solid;
  &:hover {
    box-shadow: 1px 1px 1px thistle;
  }
`;
