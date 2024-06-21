import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFirebaseAuth } from "../utils/firebase";
import { emailValidator, passwordValidator } from "../utils/input-validations";
import { ToastContainer } from "react-toastify";
import React, { useEffect } from "react";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [isLoginMode, setLoginMode] = useState(true);
    const [errors, setErrors] = useState({
        email: null,
        username: null,
        password: null,
    });
    const navigate = useNavigate();
    const { signup, signin, authChanges } = useFirebaseAuth();
    // const [username,setUsername] = useState("")

    useEffect(() => {
        const unSubscribeCb = authChanges();
    }, []);

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
                {errors.username && (
                    <p className="text-red-500 hover:text-red-600">
                        {errors.username}
                    </p>
                )}
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
                <p className="text-red-500 hover:text-red-600">
                    {errors.password}
                </p>
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
                <p className="text-red-500 hover:text-red-600">
                    {errors.email}
                </p>
            </div>
        );
    };
    const onChangePassword = (event) => {
        setPassword(event.target.value);
        // if (!isLoginMode) {
        setErrors({
            ...errors,
            password: passwordValidator(event.target.value),
        });
        // }
    };
    const onChangeUsername = (event) => {
        setUsername(event?.target?.value);
        // setErrors({
        //     ...errors,
        //     username: usernameValidator(event?.target?.value),
        // });
    };
    const onChangeEmail = (event) => {
        setEmail(event?.target?.value);
        setErrors({
            ...errors,
            email: emailValidator(event?.target?.value),
        });
    };

    const onSubmit = () => {
        //TODO: authenticate user and store the profile details;protect routes auto-redirect user to home if loggedin;auto redirect to login if loggedOut

        if (isLoginMode) {
            if (!errors.email && email && password) {
                signin(email, password);
            }
        } else {
            if (
                !errors.email &&
                !errors.password &&
                !errors.username &&
                email &&
                password &&
                username
            ) {
                console.log("call start");
                signup(email, password, username);
            }
        }
    };
    const toggleMode = () => {
        setLoginMode(!isLoginMode);
    };
    return (
        <div className="login-container h-full w-full p-8 text-white bg-black sm:bg-[url('../public/images/netfilx_background.svg')]">
            <form action="">
                <section>
                    <img
                        className="max-w-32 sm:max-w-48"
                        src="/images/Netflix_Logo.png"
                        alt="logo"
                    />
                </section>
                <div className="opacity-90 m-auto mt-[4vh] sm:mt-[1vh] py-8 sm:px-8 text-white  bg-[#000000b3] w-full sm:w-[356px] flex flex-col justify-between rounded-2xl sm:border border-zinc-900	">
                    <h1 className="font-bold sm:text-center text-3xl ">
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
                        className="bg-[#E50014]  hover:bg-red-700 h-[40px] my-8"
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
                        <ToastContainer />
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Login;
