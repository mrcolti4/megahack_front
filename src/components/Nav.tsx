import { AuthContext } from "@/auth/AuthContext";
import { useContext } from "react";
import NavLink from "./NavLink";
import { Button } from "./ui/button";

export default function Nav() {
  const { user, logOut } = useContext(AuthContext)!;

  const handleLogout = () => {
    logOut().then(() => {
      localStorage.removeItem("token");
    });
  };

  return (
    <nav className="">
      <ul className="py-3 px-1 justify-center items-center flex gap-10">
        {!user ? (
          <>
            <li>
              <NavLink to="/">How it works</NavLink>
            </li>
            <li>
              <NavLink to="/auth/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/auth/register">Register</NavLink>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <Button className="cursor-pointer" onClick={handleLogout}>
                Logout
              </Button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
