/*eslint-disable*/
import styled from "styled-components";
import { TbMenu } from "react-icons/tb";

// import { SubmitHandler, useForm } from "react-hook-form";
import { FC } from "react";

const Container = styled.div`
  width: 100%;
  background: var(--sliver-white);
  padding: 30px;
  border-radius: 8px;
  margin-bottom: 15px;
  .link {
    display: flex;
    justify-content: space-between;
    color: var(--second-text-color);
    font-family: Instrument Sans;
    line-height: 24px;
    font-size: 16px;
    letter-spacing: 0em;
    p {
      font-weight: 700;
    }
    p:nth-child(2) {
      font-weight: 400;
      cursor: pointer;
    }
  }
  select {
    width: 100%;
    height: 40px;
    border-radius: 8px;
    padding: 10px;
    margin: 15px 0;
    font-family: Instrument Sans;
    line-height: 24px;
    font-size: 16px;
    letter-spacing: 0em;
    &:active {
      border: 1 px solid var(--button-color);
    }
  }
  label {
    font-family: Instrument Sans;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    color: var(--second-text-color);
  }
  input {
    width: 100%;
    border: 1px solid var(--grey-color);
    border-radius: 4px;
    height: 48px;
    padding-left: 10px;
    border-radius: 8px;
    &:focus {
      border-color: var(--button-color);
    }
  }

`;

interface AddLinkProps {
  count: number;
  onRemove: any;
  register: any;
}

export const AddLink: FC<AddLinkProps> = ({ count, onRemove, register }) => {
  return (
    <Container >
      <div className="link">
        <p>
          <TbMenu /> Link #{count}
        </p>
        <p onClick={() => onRemove(count)}>Remove</p>
      </div>
      <select {...register(`social${count}`)} defaultValue="">
          <option value=" <FaGithub /> Github">GitHub</option>
          <option value="<FaGitlab /> Gitlab">GitLab</option>
          <option value=" <FaEnvelope /> Email">Email</option>
          <option value=" <FaLinkedin /> Linkedin">LinkedIn</option>
          <option value=" <FaYoutube /> Youtube">YouTube</option>
          <option value=" <FaFacebook /> Facebook">Facebook</option>
          <option value="<FaTwitter /> Twitter">Twitter</option>
          <option value="  <FaInstagram /> Instagram">Instagram</option>
          <option value="<FaTwitch /> Twitch">Twitch</option>
          <option value=" <FaDev /> Devto">Dev.to</option>
          <option value=" <FaCodepen /> Codepen">Codepen</option>
          <option value=" <SiCodewars /> Codewars">Codewars</option>
          <option value=" <FaFreeCodeCamp /> FreeCodeCamp">FreeCodeCamp</option>
          <option value="  <SiFrontendmentor /> Frontend-Mentor">
            Frontend Mentor
          </option>
          <option value="<FaStackOverflow /> Stack Overflow">
            Stack Overflow
          </option>
        </select>
        <label htmlFor="links">link</label>
        <input
        
          type="text"
          placeholder="🔗 e.g https://github.com/eshginfarzali"
         {...register(`links${count}`, { required: "Link is required" })}
        />

    </Container>
  );
};
