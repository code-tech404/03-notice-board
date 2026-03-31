import React, { useState } from "react";
import { checkConnection } from "../lib/stellar.js";

export default function Landing({ onConnected }) {
    const [isConnecting, setIsConnecting] = useState(false);
    const [error, setError] = useState("");

    const handleConnect = async () => {
        setIsConnecting(true);
        setError("");
        try {
            const user = await checkConnection();
            if (user && user.publicKey) {
                onConnected(user.publicKey);
            } else {
                setError("No wallet found. Please install Freighter and try again.");
            }
        } catch (err) {
            setError(err?.message || "Failed to connect wallet.");
        } finally {
            setIsConnecting(false);
        }
    };

    return (
        <div className="landing-page">
            {/* Background */}
            <div className="landing-bg" />

            {/* Overlay */}
            <div className="landing-overlay" />

            {/* Navbar */}
            <nav className="landing-nav">
                <span className="landing-nav-title">Notice Board</span>
                <button
                    className={`landing-connect-btn${isConnecting ? " connecting" : ""}`}
                    onClick={handleConnect}
                    disabled={isConnecting}
                    id="landingConnectWallet"
                >
                    {isConnecting ? (
                        <>
                            <span className="btn-spinner" />
                            Connecting…
                        </>
                    ) : (
                        <>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <rect x="2" y="7" width="20" height="14" rx="2" />
                                <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                                <line x1="12" y1="12" x2="12" y2="16" />
                                <line x1="10" y1="14" x2="14" y2="14" />
                            </svg>
                            Connect Wallet
                        </>
                    )}
                </button>
            </nav>

            {/* Hero Content */}
            <div className="landing-hero">
                <p className="landing-kicker">Stellar · Soroban · On-Chain</p>
                <h1 className="landing-headline">
                    Decentralized<br />
                    <span className="landing-headline-accent">Notice Board</span>
                </h1>
                <p className="landing-desc">
                    Post announcements, pin critical notices, and manage a fully decentralized bulletin board — all secured on the Stellar blockchain.
                </p>

                {error && (
                    <div className="landing-error" role="alert">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="12" y1="8" x2="12" y2="12" />
                            <line x1="12" y1="16" x2="12.01" y2="16" />
                        </svg>
                        {error}
                    </div>
                )}

                <button
                    className={`landing-cta-btn${isConnecting ? " connecting" : ""}`}
                    onClick={handleConnect}
                    disabled={isConnecting}
                    id="landingCtaBtn"
                >
                    {isConnecting ? "Connecting…" : "Connect & Enter Board"}
                </button>

                <p className="landing-hint">Requires Freighter Wallet extension</p>
            </div>

            {/* Bottom gradient fade */}
            <div className="landing-bottom-fade" />
        </div>
    );
}
