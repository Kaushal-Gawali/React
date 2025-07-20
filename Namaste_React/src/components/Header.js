import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

  const [btnNameReact, setBtnNameReact] = useState("Login");
  
  // check online status
  const onlineStatus = useOnlineStatus();
  
  //console.log("Header Render");


  useEffect(()=>{
    console.log("useEffect called");
  }, [btnNameReact]);             // useEffect called everytime when we click the login button

  return (
    <div className="flex justify-between bg-pink-200 shadow-lg sm:bg-amber-200 lg:bg-green-200">
      <div className="logo-container">
        <img
          className="w-30 h-30"
          src= {LOGO_URL}
        />
      </div>

      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            Online Status : {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
            </li>
          <li className="px-4">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>

          <li className="px-4">Cart</li>

          <button className="login"
          onClick={()=>{
            btnNameReact === "Login" 
            ? setBtnNameReact("Logout")      // ternary operator
            : setBtnNameReact("Login");
          }}
          >
            {btnNameReact}
            
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;