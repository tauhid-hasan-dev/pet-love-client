import { logoutUser } from "@/services/actions/logutUser";
import { getUserInfo } from "@/services/auth.services";
import { Button, Stack } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useMediaQuery from "@mui/material/useMediaQuery";

const AuthButton = () => {
  const userInfo = getUserInfo();
  const router = useRouter();
  const isMobile = useMediaQuery("(max-width:600px)");

  const handleLogOut = () => {
    logoutUser(router);
  };

  return (
    <>
      {userInfo?.id ? (
        <Button onClick={handleLogOut}>Logout</Button>
      ) : (
        <Stack direction={isMobile ? "column" : "row"} gap={2}>
          <Button component={Link} href="/login">
            Login
          </Button>
          <Button component={Link} href="/register">
            Register
          </Button>
        </Stack>
      )}
    </>
  );
};

export default AuthButton;
