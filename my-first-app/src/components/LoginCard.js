import React from "react";
import Input from "./Input";
import Button from "./Button";

const LoginCard = () => {
    return (
        <div style={{
            backgroundColor: "#ffffff",
            borderRadius: "5px",
            borderStyle: "solid",
            borderWidth: "1px",
            borderColor: "#d3d3d3",
            width: "70%",
            padding: "32px"
        }}>
            <p>Welcome back</p>
            <p>Sign in to your account</p>
            <Input />
            <Input />
            <p>Forgot Password?</p>
            <Button />
        </div>
    )
};

export default LoginCard;