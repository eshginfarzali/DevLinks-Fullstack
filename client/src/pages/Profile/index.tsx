import React, { useState } from "react";
import styled from "styled-components";
import { BiImageAdd } from "react-icons/bi";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// import * as Yup from "yup";
import {userSchemaValidation} from '../../validate/yup'

// const schema = Yup.object().shape({
//   firstName: Yup.string()
//     .required("First Name is required")
//     .min(2, "First Name must be at least 2 characters")
//     .max(50, "First Name must be at most 50 characters"),
//   lastName: Yup.string()
//     .required("Last Name is required")
//     .min(2, "Last Name must be at least 2 characters")
//     .max(50, "Last Name must be at most 50 characters"),
//   email: Yup.string()
//     .required("Email is required")
//     .email("Invalid email format"),
// });
const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 20px 30px;

  h1 {
    font-family: "Instrument Sans", sans-serif;
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 48px;
    letter-spacing: 0em;
    text-align: left;
    color: var(--text-color);
  }

  p {
    font-family: "Instrument Sans", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1em;
    letter-spacing: 0em;
    text-align: left;
    color: var(--second-text-color);
  }
  [type="submit"] {
    width: 80px;
    height: 40px;
    border: none;
    border-radius: 8px;
    position: fixed;
    right: 10px;
    bottom: 30px;
    color: var(--white-color);
    background-color: var(--button-color);
    cursor: pointer;
    &:hover {
      background-color: var(--buttton-active);
    }
  }
 
`;

const ImageUpload = styled.div`
  margin: 20px 0;
  width: 100%;
  min-height: 200px;
  background-color: var(--sliver-white);
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-evenly;
  align-items: center;
  input[type="file"] {
    display: none;
  }

  label {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 190px;
    height: 190px;
    border-radius: 12px;
    color: var(--button-color);
    cursor: pointer;
    background: #efebff;
    font-family: Instrument Sans;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    [stroke="currentColor"] {
      font-size: 50px;
    }
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 193px;
      object-fit: cover;
      height: 193px;
      border-radius: 12px;
    }
  }
`;
const UserDAta = styled.div`
  margin: 20px 0;
  width: 100%;
  min-height: 200px;
  background-color: var(--sliver-white);
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  .box {
    padding: 0 5%;
    width: 95%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 5px;

    div {
      font-family: Instrument Sans;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0em;
      text-align: left;
      color: var(--second-text-color);
      text-align: center;
      width: 45%;
      .error{
        text-align: left;
        margin-top: -5px;
        font-size: 12px;
    color: var(--error-color);
  }
      @media (max-width: 768px) {
        width: 90%;
      }
    }
    input {
      width: 100%;
      border: 1px solid grey;
      padding-left: 15px;
      height: 40px;
      border-radius: 8px;
      &:focus {
        border-color: var(--button-color);
      }
    }
  }
`;

export const Profile: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchemaValidation),
  });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target?.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageDataUrl = event.target?.result as string;
        setSelectedImage(imageDataUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  //eslint-disable-next-line
  const onSubmit = (data: any) => {
    const formData = [{ ...data, image: selectedImage }];
    console.log(formData);
  };

  return (
    <Container>
      <h1>Profile Details</h1>
      <p>Add your details to create a personal touch to your profile.</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ImageUpload>
          <p>Profile picture</p>
          <input type="file" id="imageInput" onChange={handleImageChange} />
          <label htmlFor="imageInput">
            <BiImageAdd />
            Upload Image
            {selectedImage && <img src={selectedImage} alt="Uploaded Image" />}
          </label>
          <p>
            Image must be below 1024x1024px. <br />
            Use PNG or JPG format.
          </p>
        </ImageUpload>
        <UserDAta>
          <div className="box">
            <div>
              <label htmlFor="firstName">*First Name</label>
            </div>
            <div>
              <Controller
                name="firstName"
                control={control}
                defaultValue=""
                render={({ field }) => <input {...field} type="text" />}
              />
              {errors.firstName && (
                <span className="error">{errors.firstName.message}</span>
              )}
            </div>
          </div>
          <div className="box">
            <div>
              <label htmlFor="lastName">*Last Name</label>
            </div>
            <div>
              <Controller
                name="lastName"
                control={control}
                defaultValue=""
                render={({ field }) => <input {...field} type="text" />}
              />
              {errors.lastName && (
                <span className="error">{errors.lastName.message}</span>
              )}
            </div>
          </div>
          <div className="box">
            <div>
              <label htmlFor="email">*E-mail</label>
            </div>
            <div>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => <input {...field} type="text" />}
              />
              {errors.email && (
                <span className="error">{errors.email.message}</span>
              )}
            </div>
          </div>
        </UserDAta>
        <button type="submit">Save</button>
      </form>
    </Container>
  );
};
