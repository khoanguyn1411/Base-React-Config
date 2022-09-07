import { RootRoutes } from "@/routes";
import { store } from "@/store";
import { Suspense } from "react";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Suspense
        fallback={<div>Brrr... here should be your loader component</div>}
      >
        <RootRoutes />
      </Suspense>
    </Provider>
  );
}

export default App;
