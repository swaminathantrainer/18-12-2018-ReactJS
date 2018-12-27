import React from "react";
import Logo from "../components/Logo";
import LoginCard from "../components/LoginCard";

const LoginPage = () => {
    return (
        <div>
            <Logo />
            <LoginCard />
            <div>
                <p>Don't have an account?</p>
                <p>Start your free</p>
            </div>
        </div>
    )
};

export default LoginPage;