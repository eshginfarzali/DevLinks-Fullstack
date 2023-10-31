import { Link, NavLink, Outlet } from "react-router-dom";
import{PiLinkSimpleBold, PiUserCircleBold}from 'react-icons/pi'
import logo from "../../assets/images/logo.svg";
import logoMob from "../../assets/images/logo-devlinks-small.svg";
import styled from "styled-components";

const Container = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  font-family: Instrument Sans;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  [alt="logoMobil"]{
    display: none;
  }
  @media (max-width:768px){
    padding: 0 15px;
    justify-content: space-evenly;
    span{
      display: none;
    }
    [alt="logoMobil"]{
    display: flex;
  }
  }

  .links-profile {
    display: flex;

    text-align: center;

    color: var(--second-text-color);
    .active {
      border-radius: 8px;
      padding: 10px 25px;
      color: var(--button-color);
      background-color: var(--button-disabled);
    }
  }

  .links {
  
    height: 40px;
    padding: 10px;
  }
  .details {
 
    height: 40px;
    padding: 10px;
  }
  .preview{
    width: 90px;
    height: 40px;
    padding: 7px 15px;
    color: var(--button-color);
    border: 1px solid var(--button-color);
    text-align: center;
    border-radius: 8px;
    margin-top: 9px;
  }
`;
export const Navbar = () => {
  return (
    <>
      <Container>
        <div className="logo">
         <span> <img src={logo} alt="logo devlinks" /></span>
         <img src={logoMob} alt="logoMobil" />

        </div>

        <ul className="links-profile">
          <li className="links">
            <NavLink to="/links"><PiLinkSimpleBold style={{fontSize: "25px", marginBottom:"-5px"}} /><span> Links</span></NavLink>
          </li>
          <li className="details">
            <NavLink  to="/details"><PiUserCircleBold style={{fontSize: "25px", marginBottom:"-5px"}}/><span> Profile details</span></NavLink>
          </li>
        </ul>

        <div className="preview">
          <Link to="/preview">Preview</Link>
        </div>
      </Container>
      <Outlet />
    </>
  );
};
