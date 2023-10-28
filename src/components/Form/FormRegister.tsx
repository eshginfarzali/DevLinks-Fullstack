import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "../Input";
import { FormValues } from "../../moduls";
import { Button } from "../Button";

type FormSubmitHandler = SubmitHandler<FormValues>;

export const FormRegister = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValues>();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit: FormSubmitHandler = (data) => {
    if (data.password !== data.passConfirm) {
      alert("Password and Confirm Password do not match");
    } else {
      console.log(data);
    }
  };

  const validatePassword = (value: string) => {
    return value.length >= 8 || "Password must contain at least 8 characters";
  };

  return (
    <form onSubmit={handleSubmit((data) => onSubmit(data as FormValues))}>
      <Input
        type="email"
        label="Email Address"
        placeholder="✉️  e.g. alex@email.com"
        {...register("email", { required: "Email is required" })}
        control={control}
      />
      <Input
         type={showPassword ? "text" : "password"}
        label="Password"
        placeholder="🔒  Enter your password"
        {...register("password", { validate: validatePassword })}
        control={control}
      />
      <Input
        type={showPassword ? "text" : "password"}
        label="Confirm Password"
        name="passConfirm"
        placeholder="🔒  Enter your confirm password"
        control={control}
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        style={{
          fontSize: "12px",
          cursor: "pointer",
          background: "transparent",
          border: "none",
        }}
      >
        {showPassword ? "Hide Password" : "Show Password"}
      </button>
      <p style={{ fontSize: "12px", marginTop: "10px", marginBottom: "10px" }}>
        Password must contain at least 8 characters
      </p>
      <div>
        {errors?.email && (
          <p style={{ color: "red" }}>{errors?.email.message}</p>
        )}
        {errors?.password && (
          <p style={{ color: "red" }}>{errors?.password.message}</p>
        )}
      </div>
      <Button text="Create new account" />
    </form>
  );
};
