import { getAuth, signOut } from "firebase/auth";

interface HomeProps {}

const Home: React.FC<HomeProps> = (props) => {
  const auth = getAuth();

  return (
    <div>
      <p>Home Page (Protected by Firebase)</p>
      <button onClick={() => signOut(auth)}>Sign Out Of Firebase</button>
    </div>
  );
};

export default Home;
