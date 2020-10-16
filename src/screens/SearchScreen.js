import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import yelp from "../api/yelp.js";

import SearchBar from "../components/searchBar.js";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [errMsg, setErrMsg] = useState("");

  const handleSearch = async () => {
    try {
      setErrMsg("");
      const res = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san francisco",
        },
      });
      setResults(res.data.businesses);
    } catch (err) {
      setErrMsg("Uhh oh, Something went wrong");
    }
  };

  return (
    <View>
      <SearchBar
        term={searchTerm}
        onTermChange={setSearchTerm}
        onSubmit={handleSearch}
      />
      <Text>Search Screen</Text>
      {errMsg ? (
        <Text>{errMsg}</Text>
      ) : (
        <Text>Found: {results.length} results</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
