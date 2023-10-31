import styled from "styled-components";

import logo from "../../assets/images/logo.svg";
import { FormLogin } from "../../components/Form/FormLogin";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .box {
    width: 40%;
    height: 482px;
    border-radius: 12px;
    background-color: var(--white--color);
    display: flex;
    justify-content: center;
    /* align-items: center; */
    flex-direction: column;
    gap: 10px;
    @media (max-width: 768px) {
      width: 90%;
    }
    h2 {
      font-family: Instrument Sans;
      font-size: 32px;
      font-weight: 700;
      line-height: 48px;
      letter-spacing: 0em;
      color: var(--text-color);
      margin-top: 20px;
      text-align: start;
    }
    p{
font-family: Instrument Sans;
font-size: 16px;
font-weight: 400;
line-height: 24px;
letter-spacing: 0em;
text-align: left;
color: var(--second-text-color);
}
.link{
  text-align: center;
  font-family: Instrument Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  color: var(--second-text-color);
      a{
        color: var(--button-color);

      }

    }
  }
`;
export const Login = () => {
  return (
    <Container>
        <div>
          <img src={logo} alt="logo devlinks" />
        </div>
      <div className="box">
        <h2>Login</h2>
        <p>Add your details below to get back into the app</p>
        <FormLogin />
        <div className="link">Don’t have an account? <Link to="/register">Create account</Link></div>
      </div>
    </Container>
  );
};
