import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  height: 105px;
  width: 100%;
  padding: 0 123px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BLACK_100};

  display: flex;
  justify-content: space-evenly;
`;
