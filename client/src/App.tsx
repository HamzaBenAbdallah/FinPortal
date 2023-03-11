import { BrowserRouter, Routes, Route } from "react-router-dom";
import { initializeApp } from "firebase/app";
import config from "Config/config";
import Home from "Pages/Home";
import Login from "Pages/Login";
import AuthRoute from "Components/AuthRoute";

initializeApp(config.firebaseConfig);

export interface IAppProps {}

const App = (props: IAppProps) => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default App;
