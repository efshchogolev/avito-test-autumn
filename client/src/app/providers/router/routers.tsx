import { BrowserRouter, Route, Routes } from "react-router-dom";
import { APP_BASE_URL, APP_ROUTES } from "src/shared/config";
import {AdPage, ListPage} from "src/pages";

export const AppRouter = () => {
  return (
    <BrowserRouter basename={APP_BASE_URL}>
      <Routes>
        <Route path={APP_ROUTES.LIST} element={<ListPage />} />
          <Route path={APP_ROUTES.ITEM()} element={<AdPage />} />
      </Routes>
    </BrowserRouter>
  );
};
