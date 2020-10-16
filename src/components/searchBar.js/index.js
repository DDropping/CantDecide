import React from "react";
import { Feather } from "@expo/vector-icons";

import { Container, IconWrapper, SearchField } from "./style";

const index = ({ term, onTermChange, onSubmit }) => {
  return (
    <Container>
      <IconWrapper>
        <Feather name="search" size={30} color="black" />
      </IconWrapper>
      <SearchField
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onSubmit}
      />
    </Container>
  );
};

export default index;
