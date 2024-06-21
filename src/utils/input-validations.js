import { email, password, username } from "./RegEx";
export const emailValidator = (input) => {
    return input ? (!email.test(input) ? "Invalid email" : null) : "Required";
};
export const passwordValidator = (input) => {
    return input
        ? !password.test(input)
            ? "Invalid password"
            : null
        : "Required";
};
export const usernameValidator = (input) => {
    return input
        ? !username.test(input)
            ? "Week username"
            : null
        : "Required";
};
