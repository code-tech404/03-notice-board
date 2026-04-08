# 📋 Stellar Notice Board

A decentralized public notice board built on the **Stellar blockchain** using **Soroban** smart contracts. Users connect their Freighter wallet, post announcements, pin critical notices, edit content, and manage a fully on-chain bulletin board — all from a modern React web interface.

---

## 📸 App Preview

### 🔹 Landing Page & Wallet Connect

![Landing](public/Screenshot%202026-03-31%20124140.png)

### 🔹 Notice Board Dashboard

![Dashboard](public/Screenshot%202026-03-31%20124153.png)

---

## 🌐 Live Preview

Run locally at `http://localhost:5173` (see Getting Started).

---

## ✨ Features

| Feature           | Description                                                   |
| ----------------- | ------------------------------------------------------------- |
| 🔐 Wallet Connect | Connect via Freighter browser extension                       |
| 📝 Post Notice    | Create announcements with title, content, category & priority |
| ✏️ Edit Notice    | Update existing notices on-chain                              |
| 📌 Pin / Unpin    | Highlight important notices                                   |
| 🗑️ Remove Notice | Delete notices with a confirmation guard                      |
| 🔍 Query          | Get a single notice, list all notices, or get total count     |
| ⛓️ On-Chain       | All data stored on Stellar Testnet via Soroban                |

---

## 🗂️ Project Structure

```id="st1"
my-stellar-app/
├── public/
├── src/
├── contract/
└── package.json
```

---

## 🖥️ Pages

### Landing Page

* Background UI with wallet connect CTA
* Connect → redirects to dashboard

### Profile / Dashboard

* Manage notices (Post / Edit / Pin / Delete)
* Real-time blockchain response panel

---

## 🛠️ Tech Stack

* **Frontend** → React 19 · Vite 8
* **Blockchain** → Stellar Testnet
* **Smart Contracts** → Soroban (Rust)
* **Wallet** → Freighter

---

## 🚀 Getting Started

```bash
cd my-stellar-app
npm install
npm run dev
```

---

## ⚙️ Configuration

```js id="cfg1"
export const CONTRACT_ID = "CD7H7KZXJI6F6DKPJI6CJL26TE6B62WRMJO4MYQNYLN7FPNXYMGFXR2G";
export const DEMO_ADDR = "GDGPCDOK57AM3VSX3GK4R67C6IAKG5GE2FJ6VD5UL2CZJFTPAUMSY2CX";
```

---

## 📡 Smart Contract Functions

* `post_notice`
* `edit_notice`
* `remove_notice`
* `pin_notice`
* `get_notice`
* `list_notices`
* `get_notice_count`

---

## 💡 How It Works

Connect Wallet → Perform Action → Sign via Freighter → Submit to Stellar → View Result

---

## 🏆 Why This Project Stands Out

* Fully **on-chain notice system**
* Decentralized **information publishing**
* Real-world **college / community use-case**
* Clean **UI + Web3 integration**

---

## 📄 License

MIT License
