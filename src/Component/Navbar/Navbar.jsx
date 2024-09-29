import React, { useState } from "react";
import "./Navbar.css";
import { ImSpoonKnife } from "react-icons/im";
import { BsCartCheck } from "react-icons/bs";
import { ImSearch } from "react-icons/im";
import { FaPhone } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import logo from "../../Assets/logo-white.svg";
const Navbar = () => {
  const [hide, sethide] = useState(false);
  function displaylist(event) {
    console.log(event);
    sethide(event);
  }
  function closediv(event) {
    console.log(event);
    sethide(false);
  }
  return (
    <>
      <div className="navbar">
        <div className="navbarimg">
          <img src={logo} alt="" />
        </div>
        <div className="navlist">
          <ul
            onMouseOver={() => displaylist("f1")}
            onMouseLeave={() => closediv("f1")}
          >
            Home{" "}
            <div className="btns">
              <span className="inc">+</span>
              <span className="dec">-</span>
            </div>
            <div className={hide == "f1" ? "nav1" : "nav2"}>
            <div className="sidelist">
            <div className="list">
              <ImSpoonKnife className="spoon" />

              <li>Restaurant Shop</li>
              </div>
              <div className="list">
              <ImSpoonKnife className="spoon" />

              <li>Home Fast Food</li>
              </div>
              <div className="list">
              <ImSpoonKnife className="spoon" />

              <li>Home Restaurant</li>
              </div>
            </div>
              
            </div>
          </ul>
          <ul
            onMouseOver={() => displaylist("f2")}
            onMouseLeave={() => closediv("f1")}
          >
            Pages{" "}
            <div className="btns">
              <span className="inc">+</span>
              <span className="dec">-</span>
            </div>
            <div className={hide == "f2" ? "nav1" : "nav2"}>
            <div className="sidelist">
            <div className="list">
              <ImSpoonKnife className="spoon" />

              <li>Restaurant Shop</li>
              </div>
              <div className="list">
              <ImSpoonKnife className="spoon" />

              <li>Home Fast Food</li>
              </div>
              <div className="list">
              <ImSpoonKnife className="spoon" />

              <li>Home Restaurant</li>
              </div>
            </div>
            </div>
          </ul>
          <ul
            onMouseOver={() => displaylist("f3")}
            onMouseLeave={() => closediv("f1")}
          >
            Menus{" "}
            <div className="btns">
              <span className="inc">+</span>
              <span className="dec">-</span>
            </div>
            <div className={hide == "f3" ? "nav1" : "nav2"}>
            <div className="sidelist">
            <div className="list">
              <ImSpoonKnife className="spoon" />

              <li>Restaurant Shop</li>
              </div>
              <div className="list">
              <ImSpoonKnife className="spoon" />

              <li>Home Fast Food</li>
              </div>
              <div className="list">
              <ImSpoonKnife className="spoon" />

              <li>Home Restaurant</li>
              </div>
            </div>
            </div>
          </ul>
          <ul
            onMouseOver={() => displaylist("f4")}
            onMouseLeave={() => closediv("f1")}
          >
            Shop{" "}
            <div className="btns">
              <span className="inc">+</span>
              <span className="dec">-</span>
            </div>
            <div className={hide == "f4" ? "nav1" : "nav2"}>
            <div className="sidelist">
            <div className="list">
              <ImSpoonKnife className="spoon" />

              <li>Restaurant Shop</li>
              </div>
              <div className="list">
              <ImSpoonKnife className="spoon" />

              <li>Home Fast Food</li>
              </div>
              <div className="list">
              <ImSpoonKnife className="spoon" />

              <li>Home Restaurant</li>
              </div>
            </div>
            </div>
          </ul>
          <ul
            onMouseOver={() => displaylist("f5")}
            onMouseLeave={() => closediv("f1")}
          >
            Blog{" "}
            <div className="btns">
              <span className="inc">+</span>
              <span className="dec">-</span>
            </div>
            <div className={hide == "f5" ? "nav1" : "nav2"}>
            <div className="sidelist">
            <div className="list">
              <ImSpoonKnife className="spoon" />

              <li>Restaurant Shop</li>
              </div>
              <div className="list">
              <ImSpoonKnife className="spoon" />

              <li>Home Fast Food</li>
              </div>
              <div className="list">
              <ImSpoonKnife className="spoon" />

              <li>Home Restaurant</li>
              </div>
            </div>
            </div>
          </ul>
          <ul
            onMouseOver={() => displaylist("f6")}
            onMouseLeave={() => closediv("f1")}
          >
            Contact{" "}
            <div className="btns">
              <span className="inc">+</span>
              <span className="dec">-</span>
            </div>
            <div className={hide == "f6" ? "nav1" : "nav2"}>
            <div className="sidelist">
            <div className="list">
              <ImSpoonKnife className="spoon" />

              <li>Restaurant Shop</li>
              </div>
              <div className="list">
              <ImSpoonKnife className="spoon" />

              <li>Home Fast Food</li>
              </div>
              <div className="list">
              <ImSpoonKnife className="spoon" />

              <li>Home Restaurant</li>
              </div>
            </div>
            </div>
          </ul>
        </div>
        <div className="search">
          <div className="searchbar">
            <input type="text" placeholder="Enter Keyword"/>
            <ImSearch className="se"/>
          </div>
          <div className="cart">
          <BsCartCheck className="carticon"/>
            <p>0</p>
          </div>
          <div className="conatct">
            <div className="contact1">
            <FaPhone />
              <h1>+98778678755</h1>
            </div>
            <h4>Contact us for reservation</h4>
          </div>
          <div className="burger">
          <IoMenu className="burgericon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
