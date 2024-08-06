import React from "react"

const Login = () => {
    return (
        <form className="input__container">
            <input className="login-input" placeholder="Email" type="email" />
            <input className="login-input" placeholder="Password" type="password" />
            <input className="login-input" value={'Log In'} type="submit" />
        </form>
    )
}
export default Login