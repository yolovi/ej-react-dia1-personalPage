import { Link } from "react-router-dom";

const Header = () => {
  return ( 
      <header className="header-container"> 
        <nav>
          <Link to = "/" >Home /</Link>
          <Link to = "/Contact" >Contact /</Link>
        </nav>
      </header>
  );
};

export default Header;
