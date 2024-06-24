import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useFirebaseAuth } from "../utils/firebase";

const Header = () => {
    const { authChanges, signout } = useFirebaseAuth();
    useEffect(() => {
        authChanges();
    }, []);
    return (
        <div className="bg-slate-400 w-full min-h-12 flex p-3">
            <section className="flex gap-8">
                <img
                    className="max-w-24 sm:max-w-32"
                    src="/images/Netflix_Logo.png"
                    alt="logo"
                />

                <ul className="flex text-white gap-4 items-center">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/popular">Popular</Link>
                    </li>
                    <button onClick={() => signout()}>Logout</button>
                </ul>
            </section>
        </div>
    );
};

export default Header;
