# 🚀 React User Display App

[![Vercel](https://vercel.com/button)](https://vercel.com)  
🔗 **Live Demo**: [https://react-user-display.vercel.app/](https://react-user-display.vercel.app/)

A modern, clean, and scalable **React** application that dynamically fetches and displays user data from an API. This project showcases **modular architecture**, uses **Axios** for API requests, and implements React best practices such as **state management**, **props handling**, and **object restructuring**.

## ✨ Features
- ⚡ **Axios for API Requests**: Replacing the Fetch API with Axios for cleaner and more efficient requests.
- 🗂️ **Scalable Project Structure**: Organized with separation of concerns (API services, components, styles).
- 🖼️ **Responsive Design**: Adaptive UI that looks great across devices.
- 🎨 **Dark Theme**: Modern dark-themed user interface.
- 🛠️ **Reusable Components**: Well-structured, reusable React components.

## 📚 What Did I Learn?
- **Axios for API Calls**: Axios simplifies API requests, making it easier to manage responses and handle errors.
- **Modular Code**: Structuring the app with clearly defined services and components enhances scalability and maintainability.
- **State Management**: Handling state using React's `useState` for dynamic data updates based on user interaction.
- **Props Handling**: Passing and rendering data effectively between parent and child components.
- **Object Restructuring**: Frequently used ES6 object destructuring to write clean, concise code.
- **Dark Theme Implementation**: Created a cohesive dark theme UI using CSS, focusing on readability and user experience.


## 🎨 Screenshots

![image](https://github.com/user-attachments/assets/774c4f57-3510-4686-9460-6d8f7a887d91)


## 🚀 How to Run Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/app-crio-takehome-mern1.git
   cd app-crio-takehome-mern1
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

4. **Access the app**:  
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ API Details

This app fetches user data from the [Reqres API](https://reqres.in/) and displays the user’s avatar, email, and name based on the button clicked.

Example API call:
```js
axios.get('https://reqres.in/api/users/1');
```
---

Made with ❤️ and React.
