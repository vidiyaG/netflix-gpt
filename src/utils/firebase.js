// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { showToast } from "./toast";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    updateProfile,
} from "firebase/auth";
import { addUser, removeUser } from "./store/user-slice";

const firebaseConfig = {
    apiKey: "AIzaSyAG6Ag7UUHB-XlvR1YA5crI5B9toGve4Mg",
    authDomain: "netflix-fbd8a.firebaseapp.com",
    projectId: "netflix-fbd8a",
    storageBucket: "netflix-fbd8a.appspot.com",
    messagingSenderId: "644274133495",
    appId: "1:644274133495:web:230d458f6b827a259336f2",
    measurementId: "G-8JVJL93MXV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();

export const useFirebaseAuth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const signup = (email, password, username) => {
        console.log("start");
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up

                showToast("Account created", "success");
                updateProfile(userCredential.user, {
                    displayName: username,
                })
                    .then(() => {
                        showToast("Profile updated", "success");
                        navigate("/home", { replace: true });
                    })
                    .catch((error) => {
                        const errorMessage = error.message;
                        showToast(errorMessage, "error");
                    });
            })
            .catch(onError);
    };

    const signin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in

                const { displayName, email, photoURL, uid } =
                    userCredential.user;
                dispatch(addUser({ displayName, email, photoURL, uid }));
                showToast("Login success", "success");
                navigate("/home", { replace: true });

                // ...
            })
            .catch(onError);
    };
    const signout = () =>
        signOut(auth)
            .then(() => {
                showToast("Signout success", "success");

                // Sign-out successful.
            })
            .catch(onError);

    const authChanges = () => {
        console.log("auth changes");
        return onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(user);
                const { displayName, email, photoURL, uid } = user;
                dispatch(addUser({ displayName, email, photoURL, uid }));
                navigate("/home", { replace: true });
            } else {
                dispatch(removeUser());
                navigate("/login", { replace: true });
            }
        });
    };

    return { signup, signin, signout, authChanges };
};

export const onError = (error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    showToast(errorMessage, "error");
};
export const onSigninUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(userCredential);
            showToast("Login success", "success");

            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            showToast(errorMessage, "error");
        });
};
