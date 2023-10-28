import styled from "styled-components";
import {useState} from 'react'
import { AddLink, Empty } from "../../components";

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

export const Links = () => {
  const [linkData, setLinkData] = useState([]);
  const [count, setCount] = useState(1);

  const saveLinkData = () => {
    const savedData = linkData.map((data) => ({
      social: data.social,
      links: data.links,
    }));
    // Verileri istediğiniz şekilde kullanabilirsiniz, örneğin bir API'ye gönderebilirsiniz.
    console.log("Kaydedilen Veriler:", savedData);
  };
  

  const addNewLink = () => {
    setCount(count + 1);
    setLinkData((prevData) => [
      ...prevData,
      {
        count: count,
        social: "",
        links: "",
      },
    ]);
  };

  const removeLink = (linkCount) => {
    const updatedLinkData = linkData.filter((data) => data.count !== linkCount);
    setLinkData(updatedLinkData);
  };

  

  return (
    <Container>
      <h1>Customize your links</h1>
      <p>Add/edit/remove links below and then share all your profiles with the world!</p>
      <button onClick={addNewLink}>+ Add new link</button>
      {linkData.length === 0 ? <Empty /> : null}
      {linkData.map((data) => (
        <AddLink key={data.count} count={data.count} onRemove={removeLink} />
      ))}
      <button className="save" onClick={saveLinkData}>
        Save
      </button>
    </Container>
  );
};