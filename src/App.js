import "./App.css";

import { Provider } from "react-redux";
import CakeContainer from "./components/CakeContainer";
import store from "./redux/store";
import IceCreamContainer from "./components/IceCreamContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import UsersContainer from "./components/UsersContainer";
// import ItemContainer from "./components/ItemContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <ItemContainer cake /> */}
        {/* <ItemContainer /> */}
        <CakeContainer />
        <IceCreamContainer />
        <UsersContainer />

        <HooksCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
