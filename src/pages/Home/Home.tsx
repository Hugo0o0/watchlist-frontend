import { Button } from "@/components/UI";
import useAuth from "@/utils/hooks/auth/useAuth";

const Home = () => {
  const { logout } = useAuth();
  return (
    <div>
      <Button onClick={logout}>Logout</Button>
    </div>
  );
};

export default Home;
