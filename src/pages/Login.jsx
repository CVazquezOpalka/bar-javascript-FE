import React, { useRef, useState } from "react";
import Input from "../components/UI/Input";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/authSlice";
import Spinner from "../components/svg/Spinner";
import { useNavigate } from "react-router-dom";
import Button from "../components/UI/Button";
function Login() {
  const navigate = useNavigate();
  const loading = useSelector((state) => state.auth.loading);
  const dispatch = useDispatch();
  const refInput = useRef(null);
  const refInputPass = useRef(null);
  const [errorUserName, setErrorUserName] = useState(false);
  const [errorMessageUserName, setErrorMessageUserName] = useState(null);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorMessagePassword, setErrorMessagePassword] = useState(null);
  const [errorLogin, setErrorLogin] = useState(false);
  const classUsername = errorUserName ? "border-error" : "";
  const classPassword = errorPassword ? "border-error" : "";

  const refInputCature = (e) => {
    setErrorLogin(false);
    e.preventDefault();
    const userName = refInput.current.value;
    const password = refInputPass.current.value;
    const userNameIsValid = userName.trim() !== "";
    const passwordIsValid = password.trim() !== "";
    const formIsValid = userNameIsValid && passwordIsValid;
    if (!formIsValid) {
      if (!userNameIsValid) {
        setErrorUserName(true);
        setErrorMessageUserName("Este campo es requerido");
      }
      if (!passwordIsValid) {
        setErrorPassword(true);
        setErrorMessagePassword("contraseña requerida");
      }
      return;
    } else {
      const data = { identifier: userName, password };
      dispatch(login(data))
        .unwrap()
        .then((response) => {
          console.log("good", response);
          navigate('/checkout')
        })
        .catch((error) => {
          console.log("bad request", error);
          setErrorLogin(true);
          refInput.current.value = "";
          refInputPass.current.value = "";
        });
    }
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
      <h1 className="text-center text-2xl text-gray-700 uppercase mb-3">
        Login
      </h1>
      <div className="bg-white mx-auto w-4/12 p-10">
        <form action="" onSubmit={refInputCature}>
          <Input
            id="username"
            label="Username"
            placeHolder="ingrese un Usuario..."
            extraClass={classUsername}
            ref={refInput}
            onChange={() => {
              setErrorUserName(false);
              setErrorMessageUserName(null);
            }}
            errors={errorMessageUserName}
          />
          <Input
            id="password"
            label="Password"
            placeHolder="ingrese una Contraseña..."
            type="password"
            extraClass={classPassword}
            ref={refInputPass}
            onChange={() => {
              setErrorPassword(false);
              setErrorMessagePassword(null);
            }}
            errors={errorMessagePassword}
          />
          {errorLogin && (
            <div className="bg-red-200 p-2 mb-2 text-center">
              Wrong password or username
            </div>
          )}
          <Button label="Send" onClick={refInputCature} full ></Button>
        </form>
      </div>
    </>
  );
}

export default Login;
