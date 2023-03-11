import { getAuth, signOut } from "firebase/auth";
import IPageProps from "Interfaces/page";

const Home = (props: IPageProps) => {
  const auth = getAuth();

  return (
    <div>
      <p>Home Page (Protected by Firebase)</p>
      <button onClick={() => signOut(auth)}>Sign Out Of Firebase</button>
    </div>
  );
};

export default Home;
