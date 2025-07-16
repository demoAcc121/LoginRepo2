import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./LoginPage";
import Show from "./Show";
import ProtectedRoutes from "./ProtectedRoutes";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoutes>
              <Show />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
