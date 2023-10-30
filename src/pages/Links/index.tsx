/* eslint-disable */

import styled from "styled-components";
import  { useState } from "react";
import { AddLink, Empty } from "../../components";
import { SubmitHandler, useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 20px 30px;
  h1 {
    font-family: Instrument Sans;
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 48px;
    letter-spacing: 0em;
    text-align: left;
    color: var(--text-color);
  }
  p {
    font-family: Instrument Sans;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1em;
    letter-spacing: 0em;
    text-align: left;
    color: var(--second-text-color);
  }
  button {
    font-family: Instrument Sans;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0em;
    width: 100%;
    height: 40px;
    border: 1px solid var(--button-color);
    color: var(--button-color);
    border-radius: 8px;
    margin: 20px 0;
    cursor: pointer;
  }
  .save {
    width: 80px;
    position: fixed;
    right: 10px;
    bottom: 30px;
    color: var(--white-color);
    background-color: var(--button-color);
    &:hover {
      background-color: var(--buttton-active);
    }
  }
`;
// enum LinksEnum {
//   Github = "GitHub",
//   Gitlab = "GitLab",
//   Email = "Email",
//   Linkedin = "LinkedIn",
//   Youtube = "YouTube",
//   Facebook = "Facebook",
//   Twitter = "Twitter",
//   Instagram = "Instagram",
//   Twitch = "Twitch",
//   Devto = "Dev.to",
//   Codepen = "Codepen",
//   Codewars = "Codewars",
//   FreeCodeCamp = "FreeCodeCamp",
//   FrontendMentor = "Frontend Mentor",
//   StackOverflow = "Stack Overflow",
// }
interface IFormInput {
  social: string;
  links: string;
}

export const Links: React.FC = () => {
  const [linkNew, setLinkNew] = useState<{ count: number; social: string; links: string; key: string }[]>([]);
  const [count, setCount] = useState(1);
  const {
    handleSubmit,
    register,
  
  } = useForm<IFormInput>();

  // const [linkData, setLinkData] = useState<Array<{ social?: LinksEnum; links?: string }| null>>([]);
  const [linkData, setLinkData] = useState<Array<IFormInput| null>>([]);

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
   
      setLinkData(() => {
        const linkData = Array.from({ length: count }, (_, i) => i + 1)
          .map((i) => {
            const socialKey = `social${i}`;
            const linksKey = `links${i}`;
            if (data[socialKey] && data[linksKey]) {
              return {
                social: data[socialKey],
                links: data[linksKey],
              };
            }
            return null;
          })
          .filter((entry) => entry !== null);
  
        return linkData;
      });
    };

  console.log("Converted Data:", linkData);

  const addNewLink = () => {
    const uniqueKey = uuidv4();
    setCount(count + 1);
    setLinkNew((prevData) => [
      ...prevData,
      {
        count: count,
        social: "",
        links: "",
        key: uniqueKey,
      },
    ]);
  };

  const removeLink = (linkCount: number) => {
    const updatedLinkData = linkNew.filter((data) => data.count !== linkCount);
    setLinkNew(updatedLinkData);
  };

  return (
    <Container>
      <h1>Customize your links</h1>
      <p>
        Add/edit/remove links below and then share all your profiles with the
        world!
      </p>
      <button onClick={addNewLink}>+ Add new link</button>
      {linkNew.length === 0 ? <Empty /> : null}
      <form onSubmit={handleSubmit(onSubmit)}>
        {linkNew.map((data) => (
          <AddLink
            key={data.key}
            count={data.count}
            onRemove={removeLink}
            register={register}
          />
        ))}

        <button type="submit" className="save">
          Save
        </button>
      </form>
    </Container>
  );
};