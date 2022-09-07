import { RootRoutes } from "@/routes";
import { store } from "@/store";
import { Suspense } from "react";
import { Provider } from "react-redux";
import { GlobalTypes } from "./global";

const App: GlobalTypes.FC = () => {
  return (
    <Provider store={store}>
      <Suspense
        fallback={<div>Brrr... here should be your loader component</div>}
      >
        <RootRoutes />
      </Suspense>
    </Provider>
  );
};

export default App;
