import { AppRouter, StoreProvider } from "./providers";
import { HelmetProvider } from "react-helmet-async";

import "./App.css";

function App() {
  return (
    <HelmetProvider>
      <StoreProvider>
        <AppRouter />
      </StoreProvider>
    </HelmetProvider>
  );
}

export default App;
