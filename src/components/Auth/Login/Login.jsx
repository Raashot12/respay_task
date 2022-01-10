/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react"
import Spinner from "react-spinkit"
import Input from "../../../Utilities/TextInput/Input"
import Button from "../../../Utilities/Button/Button"
import {validateLogin} from "./Validation"
import useForm from "./LoginHook"

const Login = () => {
  const {handleSubmit, handleChange, userData, errors, loading} = useForm(
    {username: "", password: ""},
    validateLogin
  )
  return (
    <>
      <section className="login-container">
        <section className="login-innner-content">
          <div className="login-wrapper">
            <div className="img-container">
              <img
                src="https://res.cloudinary.com/rashot/image/upload/v1641691601/r190X60_1_ury5fn.png"
                alt=""
              />
            </div>
            <form onSubmit={handleSubmit}>
              <div className="login-input-wrapper">
                <Input
                  type="email"
                  name="username"
                  id="email"
                  htmlFor="email"
                  placeholder="Email*"
                  onChange={handleChange}
                  value={userData.username}
                />
                <p className="error-message">{errors?.username}</p>
              </div>
              <div className="login-input-wrapper">
                <Input
                  type="password"
                  name="password"
                  id="password"
                  htmlFor="password"
                  placeholder="Password*"
                  value={userData.password}
                  onChange={handleChange}
                />
                <p className="error-message">{errors?.password}</p>
              </div>
              {!loading ? (
                <Button
                  type="submit"
                  buttonText="Login"
                  className="login-button-wrapper"
                />
              ) : (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  className="default-btn  login-button-wrapper"
                >
                  <Spinner name="circle" className="spinner" color="red" />
                </div>
              )}
            </form>
          </div>
        </section>
      </section>
    </>
  )
}

export default Login
