import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [isLoginMode, setLoginMode] = useState(true);
    const navigate = useNavigate();
    // const [username,setUsername] = useState("")

    const renderUsernameField = () => {
        return !isLoginMode ? (
            <div className="flex flex-col my-4">
                <label htmlFor="username" className="mb-1">
                    USERNAME
                </label>
                <input
                    className="px-4 h-[40px] bg-[#333333]"
                    type="text"
                    id="username"
                    value={username}
                    onChange={onChangeUsername}
                />
            </div>
        ) : null;
    };
    const renderPasswordField = () => {
        return (
            <div className="flex flex-col  my-4">
                <label htmlFor="password" className="mb-1">
                    PASSWORD
                </label>
                <input
                    className="px-4 h-[40px] bg-[#333333]"
                    type="text"
                    id="password"
                    value={password}
                    onChange={onChangePassword}
                />
            </div>
        );
    };

    const renderEmailField = () => {
        return (
            <div className="flex flex-col  my-4">
                <label htmlFor="email" className="mb-1">
                    EMAIL
                </label>
                <input
                    className="px-4 h-[40px] bg-[#333333]"
                    type="text"
                    id="email"
                    value={email}
                    onChange={onChangeEmail}
                />
            </div>
        );
    };
    const onChangePassword = (event) => {
        setPassword(event.target.value);
    };
    const onChangeUsername = (event) => {
        setUsername(event?.target?.value);
    };
    const onChangeEmail = (event) => {
        setEmail(event?.target?.value);
    };

    const onSubmit = () => {
        //TODO: authenticate user and store the profile details;protect routes auto-redirect user to home if loggedin;auto redirect to login if loggedOut
        navigate("home");
    };
    const toggleMode = () => {
        setLoginMode(!isLoginMode);
    };
    return (
        <div className="login-container h-full w-full px-6 py-4">
            <form action="">
                <section>
                    <h1 className="text-[#E50014] text-3xl text-left font-bold">
                        NETFLIX
                    </h1>
                    {/* <img src="/images/netflix-app-icon.jpg" alt="logo" /> */}
                </section>
                <div className="opacity-90 m-auto mt-[10vh] p-8 text-white  bg-[#000000b3] w-[356px]  flex flex-col justify-between rounded-2xl border border-zinc-900	">
                    <h1 className="font-bold text-center text-3xl ">
                        {isLoginMode ? "Login" : "Sign Up"}
                    </h1>
                    {/* <h1 className="text-center text-3xl">
                        {username} - {password}
                    </h1> */}

                    {renderUsernameField()}
                    {renderEmailField()}
                    {renderPasswordField()}
                    <button
                        type="button"
                        className="bg-[#E50014] h-[40px] my-4"
                        onClick={onSubmit}
                    >
                        {isLoginMode ? "Login" : "Sign Up"}
                    </button>
                    <p>
                        {isLoginMode
                            ? "New to Netflix?"
                            : "Already have an account?"}{" "}
                        &nbsp;
                        <button
                            type="button"
                            className="font-bold hover:underline"
                            onClick={toggleMode}
                        >
                            {isLoginMode ? " Sign up." : "Login"}
                        </button>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Login;
