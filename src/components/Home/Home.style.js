import styled, { css } from 'styled-components';

export const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px 30%;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Attempt = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 30px;
  border: solid 1px black;
  border-radius: 5px;
  box-sizing: border-box;

  font-size: 20px;
  margin-left: 20px;
`;

export const AttemptText = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Num = styled.span`
  ${(props) => props.highlight && css`
    color: white;
    background-color: green;
  `}
`;
