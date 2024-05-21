import { getUserInfo, removeUser } from "@/services/auth.services";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AuthButton = () => {
  const userInfo = getUserInfo();
  const router = useRouter();

  const handleLogOut = () => {
    removeUser();
    router.refresh();
  };
  return (
    <>
      {userInfo?.userId ? (
        <Button color="error" onClick={handleLogOut}>
          Logout
        </Button>
      ) : (
        <>
          <Button component={Link} href="/login">
            Login
          </Button>
          <Button component={Link} href="/register">
            Register
          </Button>
        </>
      )}
    </>
  );
};

export default AuthButton;
