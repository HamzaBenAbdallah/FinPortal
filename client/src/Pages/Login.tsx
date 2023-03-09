import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

interface LoginProps {}

const Login: React.FC<LoginProps> = (props) => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [authing, setAuthing] = useState(false);

  const SignInWithGoogle = async () => {
    setAuthing(true);

    signInWithPopup(auth, new GoogleAuthProvider())
      .then((response) => {
        console.log(response.user.uid);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
        setAuthing(false);
      });
  };

  return (
    <div>
      <button onClick={() => SignInWithGoogle()} disabled={authing}>
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;
