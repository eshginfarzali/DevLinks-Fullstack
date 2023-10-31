import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "../Input";
import { FormValues } from "../../moduls";
import { Button } from "../Button";

type FormSubmitHandler = SubmitHandler<FormValues>;

export const FormLogin = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValues>();
  const [showPassword] = useState(false);

  const onSubmit: FormSubmitHandler = (data) => {
    console.log(data);
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
      <div>
        {" "}
        {errors?.email && (
          <p style={{ color: "var(--error-color)" }}>
            {errors?.email.message}
          </p>
        )}
      </div>
      <Input
        type={showPassword ? "text" : "password"}
        label="Password"
        placeholder="🔒  Enter your password"
        {...register("password", { validate: validatePassword })}
        control={control}
      />

      <div>
        {errors?.password && (
          <p style={{ color: "var(--error-color)" }}>
            {errors?.password.message}
          </p>
        )}
      </div>
      <Button text="Login" />
    </form>
  );
};
