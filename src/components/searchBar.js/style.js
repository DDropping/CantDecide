import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #f0eeee;
  height: 50px;
  border-radius: 5px;
  margin: 0 15px;

  display: flex;
  flex-direction: row;
`;

export const IconWrapper = styled.View`
  align-self: center;
`;

export const SearchField = styled.TextInput`
  flex: 1;
`;
