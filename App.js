import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import SearchScreen from "./src/screens/SearchScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
  },
  {
    initialrouteName: "Search",
    defaultNavigationOptions: {
      title: "Can't Decide?",
    },
  }
);

export default createAppContainer(navigator);
