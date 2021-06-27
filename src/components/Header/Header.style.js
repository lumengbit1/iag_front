import styled from 'styled-components';

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  border-bottom: solid 1px black;
`;

export const Title = styled.div`
  font-size: 28px;
  font-weight: bold;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
`;

export const Hint = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 50px;
  border: dotted 1px black;
  box-sizing: border-box;

  font-size: 24px;
  margin-left: 20px;
`;
