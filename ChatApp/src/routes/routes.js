import { createAppContainer, createSwitchNavigator } from "react-navigation";
import Switch from './switch.navigator';
import Stack from './stack-navigator';
import Bottom from "./bottom-navigator";

const mainNavigation = createSwitchNavigator(
  {
    Switch,
    Stack,
    Bottom,
  }
);

export default createAppContainer(mainNavigation);
