import React, { useState } from "react";
import Landing from "./pages/Landing.jsx";
import Profile from "./pages/Profile.jsx";
import "./App.css";

export default function App() {
    const [page, setPage] = useState("landing");
    const [walletKey, setWalletKey] = useState("");

    const handleConnected = (publicKey) => {
        setWalletKey(publicKey);
        setPage("profile");
    };

    if (page === "profile") {
        return <Profile walletKey={walletKey} />;
    }

    return <Landing onConnected={handleConnected} />;
}