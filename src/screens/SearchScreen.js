import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import SearchBar from "../components/searchBar.js";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <View>
      <SearchBar
        term={searchTerm}
        onTermChange={setSearchTerm}
        onSubmit={() => console.log("submitted")}
      />
      <Text>Search Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
