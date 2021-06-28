import styled from 'styled-components';
import NumberFormat from 'react-number-format';

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 28px;
  font-weight: bold;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: white;
  border-top: solid 1px black;
  padding: 20px 0;
`;

export const Input = styled(NumberFormat)`
  text-align: center;
  width: 200px;
  height: 40px;
  border: solid 1px black;
  box-sizing: border-box;
  font-size: 24px;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  width: 150px;
  height: 40px;

  font-size: 24px;

  &:hover {
    cursor: pointer;
  }

  &:first-child {
    margin-right: 20px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
`;

export const Text = styled.div`
  color: red;
  text-transform: uppercase;
`;
