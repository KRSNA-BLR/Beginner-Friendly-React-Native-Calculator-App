# Developer Setup Guide for Beginner-Friendly React Native Calculator App

This document provides a step-by-step guide to setting up a development environment for the **Beginner-Friendly React Native Calculator App**. Follow these instructions to get your system ready for coding and contributing.

---

## 📋 Prerequisites

Ensure your system meets the following requirements:

- **Operating System**: Windows 10 or later, macOS, or Linux.
- **Memory**: Minimum 4 GB RAM.
- **Disk Space**: At least 10 GB of free space.

### Tools and Software

- [Node.js (LTS version)](https://nodejs.org/) - Recommended version: **18.x**
- [React Native CLI](https://reactnative.dev/docs/cli) - For project management.
- [Java Development Kit (JDK)](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html) - Version **11** or **17**.
- [Android Studio](https://developer.android.com/studio) - For Android development and emulation.
- [Xcode (macOS only)](https://developer.apple.com/xcode/) - For iOS development.
- [Git](https://git-scm.com/) - Version control system.

---

## 🛠️ Installation Steps

### 1. Install Node.js and npm

- Download the installer from the [Node.js official website](https://nodejs.org/).
- Choose the **LTS version** for stability.
- After installation, verify the versions:
  ```bash
  node -v
  npm -v
  ```

### 2. Install React Native CLI

- Install the React Native CLI globally:
  ```bash
  npm install -g react-native-cli
  ```
- Verify the installation:
  ```bash
  react-native -v
  ```

### 3. Install Java Development Kit (JDK)

- Download and install JDK 11 or 17 from [Oracle's website](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html).
- Verify the installation:
  ```bash
  java -version
  ```

### 4. Install Android Studio

- Download and install Android Studio from [here](https://developer.android.com/studio).
- During installation, ensure the following components are selected:
  - Android SDK
  - Android SDK Platform
  - Android Virtual Device

- Configure the Android SDK:
  - Open **Android Studio** and navigate to **More Actions > SDK Manager**.
  - Under the **SDK Platforms** tab, ensure **Android 12 (S)** is checked.
  - Under the **SDK Tools** tab, ensure **Android SDK Build-Tools 31.0.0** is selected.

- Add environment variables:
  - Set `ANDROID_HOME` to the Android SDK installation path.
  - Add the following to your `Path`:
    ```
    %ANDROID_HOME%\platform-tools
    %ANDROID_HOME%\tools
    ```

### 5. Install Xcode (macOS Only)

- Download and install Xcode from the [Mac App Store](https://apps.apple.com/us/app/xcode/id497799835?mt=12).
- Install the Xcode command-line tools:
  ```bash
  xcode-select --install
  ```
- Open Xcode and agree to the license.

### 6. Install Git

- Download Git from [here](https://git-scm.com/).
- Verify the installation:
  ```bash
  git --version
  ```

---

## 🚀 Setting Up the Project

### 1. Clone the Repository

- Use Git to clone the repository:
  ```bash
  git clone https://github.com/KRSNA-BLR/Beginner-Friendly-React-Native-Calculator-App.git
  cd Beginner-Friendly-React-Native-Calculator-App
  ```

### 2. Install Dependencies

- Run the following command to install all required dependencies:
  ```bash
  npm install
  ```

### 3. Start the Metro Server

- Launch the Metro server:
  ```bash
  npx react-native start
  ```

### 4. Run the Application

#### Android
- Ensure an Android emulator is running or connect a physical Android device.
- Run the app:
  ```bash
  npx react-native run-android
  ```

#### iOS (macOS Only)
- Open an iOS simulator or connect a physical iOS device.
- Run the app:
  ```bash
  npx react-native run-ios
  ```

---

## 🧰 Additional Tips

### 1. Hot Reloading
- Save your changes in the code editor to see them reflected instantly in the app.

### 2. Clearing Cache
- If you face issues with the Metro bundler, clear the cache:
  ```bash
  npx react-native start --reset-cache
  ```

### 3. Updating Dependencies
- To update React Native and other dependencies:
  ```bash
  npm update
  ```

---

## Need Help?

If you encounter any issues, feel free to reach out:

- **LinkedIn**: [Danilo Viteri](https://www.linkedin.com/in/danilo-viteri-moreno/)

For detailed troubleshooting, refer to the [official React Native documentation](https://reactnative.dev/docs/getting-started).

---

Thank you for contributing to the project! 🚀
