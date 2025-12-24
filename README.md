📱 Users Explorer App

A simple, production-style mobile application built using React Native CLI and TypeScript, demonstrating real-world app architecture and performance considerations.

🚀 App Functionality

Home Screen

Entry screen with a button to navigate to users list

Users Screen

Loads a large list of users from a public API (randomuser.me)

Search functionality (by name, email, city)

Infinite scrolling / pagination

Smooth list performance using FlatList

User Details Screen

Displays detailed information about the selected user

Offline Support

User data is stored locally using AsyncStorage

Data is restored after app restart (killed state)

🛠 Tech Stack

React Native (CLI)

TypeScript

Redux Toolkit (state management)

React Navigation (native stack)

AsyncStorage (local persistence)

Functional components with React Hooks

No third-party UI libraries (only React Native components)

▶️ How to Run the Project
1️⃣ Install dependencies
npm install

2️⃣ Start Metro bundler
npx react-native start

3️⃣ Run on Android
npx react-native run-android

4️⃣ Run on iOS (macOS only)
npx react-native run-ios

🧠 Key Technical Decisions

Redux Toolkit for predictable and scalable state management

AsyncStorage to persist API data and handle app lifecycle scenarios

Local search filtering for better performance (no repeated API calls)

Infinite scrolling to handle large datasets efficiently

TypeScript for better type safety and maintainability

Clean folder structure to support scalability

🔧 Improvements With More Time

Add unit tests for Redux reducers and async actions

Implement pull-to-refresh

Add better error retry handling

Improve accessibility (screen reader support)

Introduce caching strategies for API pagination

Add animations for screen transitions

✅ Summary

This app focuses on clean architecture, performance, and real-world usage scenarios rather than UI polish, making it a strong demonstration of production-ready React Native development.
