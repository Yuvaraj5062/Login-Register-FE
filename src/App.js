import { BrowserRouter } from "react-router-dom";
import RootRoutes from "./app/RootRoutes";
import {store, persistor} from "./store";
import { Provider } from "react-redux";


function App() {
  return (
    <>
      <BrowserRouter >
      <Provider store={store}>
      {/* <PersistGate persistor={persistor}> */}
        <RootRoutes />
      {/* </PersistGate> */}
    </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
