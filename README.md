# 🛍️ Nero Clothing – React E-Commerce App

A modern clothing shop built with **React** and **Redux**, designed to provide a smooth and stylish shopping experience. This project showcases dynamic product listings, cart functionality, and a sleek UI for an online fashion store.

## 🚀 Features

- 🧥 Browse a clothing products
- 🛒 Add to cart / remove from cart
- 🔐 User authentication with Firebase
- ☁️ Product data stored and fetched from Firestore
- 💳 Secure Checkout with Stripe

## 🛠️ Tech Stack

- **Frontend**: React, React Router, Redux
- **Styling**:  Styled Components / SCSS
- **Backend/Database**: Firebase Authentication, Firestore (NoSQL database)
- **Payments**: Stripe Checkout Integration

## 📦 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/clothing-shop.git
cd clothing-shop
```
### 2. Install dependencies

```bash
npm install
```

### 3. Set up Firebase

Create a Firebase project at Firebase Console, enable Authentication (e.g. Email/Password), and Firestore.

Add your Firebase config to the project (in a firebase.utils.ts file):

```
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export default app;

```
### 4. Run the app
```
npm start
```
The app will be available at http://localhost:3000.

### 🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.
