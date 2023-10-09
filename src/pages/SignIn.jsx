import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userRegister } from "../store/authSlice";
import Input from "../components/UI/Input";
import SantaCerveza from "../components/svg/SantaCerveza";
import { useForm } from "react-hook-form";
import Spinner from "../components/svg/Spinner";
import Button from "../components/UI/Button";
function SignIn() {
  const navigate = useNavigate();
  const loading = useSelector((state) => state.auth.loading);
  const dispatch = useDispatch();
  const [errorRegister, setErrorRegister] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const _password = useRef({});
  _password.current = watch("password", "");
  const minValidation = {
    required: "this field is required",
    minLength: {
      value: 5,
      message: "min 5 characters",
    },
  };
  const onSubmit = (data) => {
    setErrorRegister(null);
    const infoRegister = {
      username: data.username,
      email: data.email,
      password: data.password,
    };
    dispatch(userRegister(infoRegister))
      .unwrap()
      .then(() => {
        navigate("/checkout");
      })
      .catch((error) => {
        setErrorRegister(error.response.data.error.message);
      });
  };

  if (loading) {
    return (
      <div className="w-24 mx-auto">
        <Spinner />
      </div>
    );
  }
  return (
    <>
      <h1 className="text-center text-2xl uppercase text-gray-700 mb-3 mx-auto">
        Sign in
      </h1>
      <div className="max-w-4xl mx-auto grid grid-cols-6 bg-white gap-2">
        <div className="col-span-3 p-10">
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <Input
              {...register("username", minValidation)}
              label="username"
              placeHolder="nombre de usuario"
              errors={errors.username ? errors.username.message : null}
              extraCall={errors.username ? "border-error" : ""}
            ></Input>
            <Input
              {...register("email", {
                required: "this field is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "invalid email addres",
                },
              })}
              errors={errors.email ? errors.email.message : null}
              extraCall={errors.email ? "border-error" : ""}
              label="email"
              placeHolder="Email"
            ></Input>
            <Input
              {...register("password", minValidation)}
              label="password"
              placeHolder="***"
              errors={errors.password ? errors.password.message : null}
              extraCall={errors.password ? "border-error" : ""}
              type="password"
            ></Input>
            <Input
              {...register("confirnPassword", {
                required: "this field is required",
                validate: (value) =>
                  value === _password.current || "Password is not Valid",
              })}
              label="confirm Password"
              placeHolder="***"
              errors={
                errors.confirnPassword ? errors.confirnPassword.message : null
              }
              extraCall={errors.confirnPassword ? "border-error" : ""}
              type="password"
            ></Input>
            {errorRegister && (
              <div className="bg-red-200 p-2 mb-2 text-gray-400 text-semibold">
                {errorRegister}
              </div>
            )}
            <Button full label="send" type="submit"/>
          </form>
        </div>
        <div className="col-span-3 p-10 grid content-center justify-items-center">
          <div className="w-56 h-56">
            <SantaCerveza />
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
