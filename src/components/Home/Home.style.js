import styled from 'styled-components';
import NumberFormat from 'react-number-format';

export const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Hint = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 40px;
  border: dotted 1px black;
  box-sizing: border-box;

  font-size: 24px;
`;

export const Input = styled(NumberFormat)`
  text-align: center;
  width: 200px;
  height: 40px;
  border: solid 1px black;
  box-sizing: border-box;

  font-size: 24px;
`;

export const Submit = styled.button`
  width: 200px;
  height: 40px;

  font-size: 24px;

  &:hover {
    cursor: pointer;
  }
`;
