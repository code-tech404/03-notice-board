# 📋 Stellar Notice Board

A decentralized public notice board built on the **Stellar blockchain** using **Soroban** smart contracts. Users connect their Freighter wallet, post announcements, pin critical notices, edit content, and manage a fully on-chain bulletin board — all from a modern React web interface.

---

## 🌐 Live Preview

Run locally at `http://localhost:5173` (see [Getting Started](#getting-started)).

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔐 Wallet Connect | Connect via Freighter browser extension |
| 📝 Post Notice | Create announcements with title, content, category & priority |
| ✏️ Edit Notice | Update existing notices on-chain |
| 📌 Pin / Unpin | Highlight important notices |
| 🗑️ Remove Notice | Delete notices with a confirmation guard |
| 🔍 Query | Get a single notice, list all notices, or get total count |
| ⛓️ On-Chain | All data stored on Stellar Testnet via Soroban |

---

## 🗂️ Project Structure

```
my-stellar-app/
│
├── public/
│   ├── bg.jpg               # Background image used on all pages
│   └── favicon.svg
│
├── src/
│   ├── pages/
│   │   ├── Landing.jsx      # Landing page — wallet connect entry point
│   │   └── Profile.jsx      # Notice board app (shown after wallet connect)
│   │
│   ├── lib/
│   │   └── stellar.js       # All Stellar SDK / Freighter API interactions
│   │
│   ├── App.jsx              # Router — switches between Landing and Profile
│   ├── App.css              # All styles (landing, profile, components)
│   ├── main.jsx             # React entry point
│   └── index.css            # Global resets
│
└── contract/                # Soroban smart contract (Rust)
    └── contracts/
        └── hello-world/
            └── src/
                └── lib.rs   # Notice board contract logic
```

---

## 🖥️ Pages

### Landing Page (`/`)
- Full-screen `bg.jpg` background with dark overlay
- **Nav bar**: "Notice Board" title on the left, **Connect Wallet** button on the right
- **Hero section**: headline, description, and a large "Connect & Enter Board" CTA
- On successful Freighter connection → automatically navigates to the Profile page

### Profile Page (after connect)
- `bg.jpg` background with a frosted-glass app panel
- Displays the connected wallet address
- **Tab navigation**: Post Notice · Actions · Query
- Output terminal shows real-time blockchain responses

---

## 🛠️ Tech Stack

### Frontend
| Package | Version | Purpose |
|---|---|---|
| React | ^19.2.4 | UI framework |
| Vite | ^8.0.1 | Dev server & bundler |
| `@stellar/stellar-sdk` | ^14.6.1 | Stellar SDK (transactions, RPC) |
| `@stellar/freighter-api` | ^6.0.1 | Freighter wallet integration |

### Smart Contract
| Tool | Version | Purpose |
|---|---|---|
| Rust | stable | Contract language |
| `soroban-sdk` | 23 | Soroban smart contract SDK |
| Stellar Testnet | — | Deployment network |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18+
- **Rust** + `cargo` ([install](https://rustup.rs/))
- **Stellar CLI** ([install](https://developers.stellar.org/docs/build/smart-contracts/getting-started/setup))
- **Freighter Wallet** browser extension ([download](https://www.freighter.app/))

---

### 1. Install Frontend Dependencies

```bash
cd my-stellar-app
npm install
```

### 2. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

### 3. Build the Smart Contract (optional)

```bash
cd contract
stellar contract build
```

The compiled `.wasm` file will be in `target/wasm32-unknown-unknown/release/`.

### 4. Deploy the Contract to Testnet

```bash
stellar contract deploy \
  --wasm target/wasm32-unknown-unknown/release/hello_world.wasm \
  --source <YOUR_SECRET_KEY> \
  --network testnet
```

Copy the returned **Contract ID** and update it in:

```js
// src/lib/stellar.js
export const CONTRACT_ID = "YOUR_CONTRACT_ID_HERE";
```

---

## ⚙️ Configuration

All on-chain configuration lives in `src/lib/stellar.js`:

```js
// Contract deployed on Stellar Testnet
export const CONTRACT_ID = "CD7H7KZXJI6F6DKPJI6CJL26TE6B62WRMJO4MYQNYLN7FPNXYMGFXR2G";

// Demo address used for read-only simulations (no private key needed)
export const DEMO_ADDR   = "GDGPCDOK57AM3VSX3GK4R67C6IAKG5GE2FJ6VD5UL2CZJFTPAUMSY2CX";

// Soroban RPC endpoint
const RPC_URL            = "https://soroban-testnet.stellar.org";

// Network
const NETWORK_PASSPHRASE = Networks.TESTNET;
```

---

## 📡 Smart Contract Functions

| Function | Type | Description |
|---|---|---|
| `post_notice` | Write | Post a new notice (id, author, title, content, category, priority, expiresAt) |
| `edit_notice` | Write | Edit an existing notice |
| `remove_notice` | Write | Delete a notice by id + author |
| `pin_notice` | Write | Toggle pin status on a notice |
| `get_notice` | Read | Fetch a single notice by id |
| `list_notices` | Read | Return all notices |
| `get_notice_count` | Read | Return total count of notices |

> Write functions require Freighter wallet signature. Read functions use simulation only.

---

## 💡 How It Works

```
User visits Landing Page
        │
        ▼
  Clicks "Connect Wallet"
        │
        ▼
  Freighter popup → user approves
        │
        ▼
  publicKey returned → navigate to Profile Page
        │
        ▼
  Select tab (Post / Actions / Query)
        │
        ▼
  Action triggered → stellar.js builds transaction
        │
        ▼
  Freighter signs transaction
        │
        ▼
  Transaction submitted to Stellar Testnet RPC
        │
        ▼
  Result displayed in Output panel
```

---

## 🔧 Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

---

## 🔐 Wallet Setup (Freighter)

1. Install the [Freighter extension](https://www.freighter.app/)
2. Create or import a Stellar account
3. **Switch to Testnet** in Freighter settings
4. Fund your account using [Stellar Friendbot](https://friendbot.stellar.org/?addr=YOUR_ADDRESS)

---

## 📦 Production Build

```bash
npm run build
```

Output is in the `dist/` folder — ready to deploy to any static host (Vercel, Netlify, GitHub Pages, etc.).

---

## 📄 License

MIT — free to use and modify.

---

> Built with ❤️ on Stellar · Soroban · React
