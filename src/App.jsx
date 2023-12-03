import { Routes, Route, HashRouter } from "react-router-dom";
import HomePage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";
import MealsPage from "./pages/MealsPage";
import RetailersPage from "./pages/RetailersPage";
import MainLayout from "./layouts/MainLayout";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="meals" element={<MealsPage />} />
          <Route path="retailers" element={<RetailersPage />} />
          <Route path="about" element={<AboutUs />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
