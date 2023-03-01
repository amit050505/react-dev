import { Link } from "react-router-dom";
import "./navigation-header.css";
function NavigationHeader() {
  return (
    <div className="App">

      {/* navigation component goes here... */}
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="about">About</Link></li>
        <li><Link to="contact">Contact</Link></li>
      </ul>

    </div>
  )
}

export default NavigationHeader;
