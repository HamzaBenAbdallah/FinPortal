import { getAuth, signOut } from "firebase/auth";

export interface IHomeProps {}

const Home = (props: IHomeProps) => {
  const auth = getAuth();

  return (
    <div>
      <p>Home Page (Protected by Firebase)</p>
      <button onClick={() => signOut(auth)}>Sign Out Of Firebase</button>
    </div>
  );
};

export default Home;
