import { useLogout, useUser } from "../lib/auth";
import { Button } from "./ui/moving-border";

export const UserInfo = () => {
  const user = useUser({});
  const logout = useLogout({});

  return (
    <>
      <h2>Welcome {user.data?.name}</h2>
      <Button disabled={logout.isLoading} onClick={() => logout.mutate({})}>
        Log Out
      </Button>
    </>
  );
};
