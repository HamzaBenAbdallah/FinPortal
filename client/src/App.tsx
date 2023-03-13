import { Routes, Route } from "react-router-dom";
import Home from "Pages/Home";
import Login from "Pages/Login";
import AuthRoute from "Components/AuthRoute";

export interface IAppProps {}

const App = (props: IAppProps) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AuthRoute>
            <Home />
          </AuthRoute>
        }
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
