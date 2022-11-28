import { BrowserRouter } from "react-router-dom";
import RootRoutes from "./app/RootRoutes";
import {store, persistor} from "./store";
import { Provider } from "react-redux";
import DemoApp from "./pages/demo/DemoApp";


function App() {
  return (
    <>
      <BrowserRouter >
      <Provider store={store}>
  
        {/* <RootRoutes /> */}
        <DemoApp />

    </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
