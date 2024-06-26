import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../contexts/auth.context";

function Navbar() {
  const context = useContext(AuthContext);

  return (
    <nav className="navbar bg-body-tertiary mb-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Iron Fork | {context.user?.name}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
