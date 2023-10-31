/*eslint-disable*/
import {
  FaGithub,
  FaGitlab,
  FaEnvelope,
  FaLinkedin,
  FaYoutube,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaTwitch,
  FaDev,
  FaCodepen,
  FaFreeCodeCamp,
  FaStackOverflow,
  FaArrowRight,
} from "react-icons/fa";
import { SiCodewars, SiFrontendmentor } from "react-icons/si";

import { Link } from "react-router-dom";
import styled from "styled-components";
import johnDoe from "../../assets/images/johndoeyork2.webp";

const Container = styled.div`
  width: 100%;
  height: 327px;
  background-color: var(--button-color);
  border-radius: 0 0 32px 32px;
`;
const Header = styled.div`
  margin-top: 10px;
  margin: auto;
  width: 95%;
  height: 60px;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  background-color: var(--white-color);
  .back {
    button {
      background-color: unset;
      border-radius: 8px;
      color: var(--button-color);
      border: 1px solid var(--button-color);
      padding: 10px;
      cursor: pointer;
    }
  }
  .share {
    button {
      background-color: var(--button-color);
      border-radius: 8px;
      border: none;
      color: var(--white-color);
      cursor: pointer;
      padding: 10px;
    }
  }
`;
const UserBox = styled.div`
  width: 349px;
  min-height: 569px;
  border-radius: 24px;
  background-color: var(--white-color);
  margin: auto;
  margin-top: 50px;
  gap: 8px;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  padding-top: 30px;
  gap: 20px;
  .username {
    display: flex;
    flex-direction: column;
    text-align: center;
    h1 {
      font-family: Instrument Sans;
      font-size: 32px;
      font-weight: 700;
      line-height: 48px;
      letter-spacing: 0em;
      text-align: left;
      color: #333;
    }
    p {
      font-family: Instrument Sans;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0em;
      text-align: left;
      color: #737373;
    }
  }

  .image {
    width: 80px;
    height: 80px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
      border: 2px solid var(--button-color);
    }
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
    li {
      font-family: Instrument Sans;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0em;
      text-align: left;

      a {
        border-radius: 8px;
        padding: 0 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 200px;
        height: 40px;
        background: #ee3939;
        color: var(--white-color);
      }
    }
  }
`;

export const Preview = () => {
  return (
    <Container>
      &nbsp;
      <Header>
        <div className="back">
          <button>
            <Link to="/details">Back to Editor</Link>
          </button>
        </div>
        <div className="share">
          <button>Share Link</button>
        </div>
      </Header>
      <UserBox>
        <div className="image">
          <img src={johnDoe} alt="" />
        </div>
        <div className="username">
          <h1>John Doe</h1>
          <p>johndoe@gmail.com</p>
        </div>
        <ul>
          <li>
            <Link to="#">
              <p>
                {" "}
                <FaGithub /> Github
              </p>
              <p>
                <FaArrowRight />
              </p>
            </Link>
          </li>
          <li>
            <Link to="#">
              <p>
                {" "}
                <FaGithub /> Github
              </p>
              <p>
                <FaArrowRight />
              </p>
            </Link>
          </li>
          <li>
            <Link to="#">
              <p>
                {" "}
                <FaGithub /> Github
              </p>
              <p>
                <FaArrowRight />
              </p>
            </Link>
          </li>
          <li>
            <Link to="#">
              <p>
                {" "}
                <FaGithub /> Github
              </p>
              <p>
                <FaArrowRight />
              </p>
            </Link>
          </li>
          <li>
            <Link to="#">
              <p>
                {" "}
                <FaGithub /> Github
              </p>
              <p>
                <FaArrowRight />
              </p>
            </Link>
          </li>
          <li>
            <Link to="#">
              <p>
                {" "}
                <FaGithub /> Github
              </p>
              <p>
                <FaArrowRight />
              </p>
            </Link>
          </li>
        </ul>
      </UserBox>
    </Container>
  );
};
