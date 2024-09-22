import Menu from "./components/Menu/Menu";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import TodosPage from "./pages/TodosPage/TodosPage";
import SettingsPage from "./pages/SettingsPage/SettingsPage";

const App = () => {
  return (
    <div className="app">
      <Menu />
      <Routes>
        <Route path="/" element={<TodosPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </div>
  );
};

export default App;
