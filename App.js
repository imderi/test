import React from "react";
import { Navigation } from "./src/navigation";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { MenuProvider } from "react-native-popup-menu";

const App = () => {
  return (
    <Provider store={store}>
      <MenuProvider>
        <Navigation />
      </MenuProvider>
    </Provider>
  );
};

export default App;
