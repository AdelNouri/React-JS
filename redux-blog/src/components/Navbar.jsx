import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <section>
        <h1>My little redux blog</h1>
        <div className="navContent">
          <div className="navLinks"> </div>
        </div>
        <div style={{marginBottom: "1rem"}} className="navLinks">
          <Link to="/" >Blogs</Link>
          <Link to="/authors" >Authors</Link>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
