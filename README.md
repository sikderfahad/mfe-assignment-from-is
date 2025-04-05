# Micro Frontend Project — Assignment from IS

This project is a Micro Frontend architecture using **Vite**, **Yarn Berry (v4.6.0)**, **Module Federation**, and **React**. It includes a `host` app, a remote `user` app, and a shared `AuthProvider`.

---

## 📁 Project Structure

```
root/
├── package.json               # Yarn Berry workspace config
├── shared/
│   └── AuthProvider.jsx       # Shared authentication logic
├── host/
│   ├── package.json
│   └── ...                    # Host application
└── remotes/
    └── user/
        ├── package.json
        └── ...                # Remote user application
```

---

## 🧑‍💻 Getting Started Locally

### 1. Clone the Repository

```bash
git clone https://github.com/sikderfahad/mfe-assignment-from-is.git
cd mfe-assignment-from-is
```

### 2. Install Dependencies (Yarn Berry v4.6.0)

Make sure you're using **Yarn Berry (v4.6.0)**.

```bash
yarn set version berry
yarn --version  # should output 4.6.0
```

Then install all dependencies from the root:

```bash
yarn install
```

This will install for:

- root
- host
- remotes/user
- shared

---

## 🚀 Running the Project

### Option 1: Run Everything at Once (Recommended)

From root directory:

```bash
yarn all
```

> Make sure you have a script called `all` in your root `package.json` to run both host and remote apps.

### Option 2: Run Host and Remote Individually

```bash
# Run host
cd host
yarn dev

# Run remote (user)
cd ../remotes/user
yarn dev
```

---

## 🔄 Rebuilding Remote After Changes

If you make changes in the remote app (user), rebuild it before running again:

```bash
cd remotes/user
yarn build
yarn dev
```

---

## 🛠 Tech Stack

- 🧹 Micro Frontends (Module Federation)
- ⚡ Vite
- 🧶 Yarn Monorepo (Berry v4.6.0)
- ⚛️ React
