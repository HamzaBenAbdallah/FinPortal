import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export interface IAuthRouteProps {
  children: React.ReactNode;
}

const AuthRoute = ({ children }: IAuthRouteProps) => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const AuthCheck = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoading(false);
      } else {
        console.log("User is not logged in");
        navigate("/login");
      }
    });

    return () => AuthCheck();
  }, [auth]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default AuthRoute;
