# Installation Guide for the "Beginner-Friendly React Native Calculator App"

Welcome! This guide provides detailed instructions to set up and run the **Beginner-Friendly React Native Calculator App** on a Windows environment. Follow these steps carefully to avoid common issues related to versions and configurations.

---

## 📋 Prerequisites

Before you begin, ensure you have the following components installed:

- **Operating System**: Windows 10 or later.
- **RAM**: Minimum of 4 GB.
- **Disk Space**: At least 10 GB available.
- **Web Browser**: Chrome, Microsoft Edge, Firefox, etc.

---

## 🛠️ Required Tools Installation

### 1. **Node.js and npm**

React Native requires Node.js and npm (Node Package Manager).

- **Recommended Version**: Use an LTS version of Node.js, preferably version 18.x.

- **Installation**:
  - Download the installer from the [official Node.js website](https://nodejs.org/).
  - Run the installer and follow the instructions.
  - To verify the installation, open a terminal and run:
    ```bash
    node -v
    npm -v
    ```
    You should see the installed versions of Node.js and npm.

### 2. **Node.js Version Manager (nvm-windows)**

If you need to manage multiple versions of Node.js, it is recommended to install nvm-windows.

- **Installation**:
  - Download the installer from the [official nvm-windows repository](https://github.com/coreybutler/nvm-windows/releases).
  - Run the installer and follow the instructions.
  - To verify the installation, open a terminal and run:
    ```bash
    nvm -v
    ```
    You should see the installed version of nvm.

- **Usage**:
  - To install a specific Node.js version:
    ```bash
    nvm install 18.16.0
    ```
  - To use a specific version:
    ```bash
    nvm use 18.16.0
    ```

### 3. **React Native CLI**

The React Native Command Line Interface (CLI) simplifies the creation and management of projects.

- **Installation**:
  - With npm installed, run the following command in the terminal:
    ```bash
    npm install -g react-native-cli
    ```
  - To verify the installation, run:
    ```bash
    react-native -v
    ```
    You should see the installed version of the CLI.

### 4. **Java SE Development Kit (JDK)**

React Native requires the JDK to compile and run Android applications.

- **Recommended Version**: JDK 11 or JDK 17.

- **Installation**:
  - Download the installer from the [official Oracle website](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html).
  - Run the installer and follow the instructions.
  - To verify the installation, open a terminal and run:
    ```bash
    java -version
    ```
    You should see the installed Java version.

### 5. **Android Studio**

Required for emulating and testing Android applications.

- **Installation**:
  - Download the installer from the [official Android Studio website](https://developer.android.com/studio).
  - Run the installer and follow the instructions, ensuring you include:
    - Android SDK
    - Android SDK Platform
    - Android Virtual Device

- **Configuration**:
  - Open Android Studio and navigate to **More Actions** > **SDK Manager**.
  - In the **SDK Platforms** tab, select **Android 12 (S)**.
  - In the **SDK Tools** tab, ensure **Android SDK Build-Tools 31.0.0** is selected.

- **Environment Variables**:
  - Add a new environment variable called `ANDROID_HOME` pointing to your Android SDK installation directory.
  - Modify the `Path` variable to include:
    - `%ANDROID_HOME%\platform-tools`
    - `%ANDROID_HOME%\tools`

---

## 🚀 Creating and Running the Project

1. **Create a New Project**:
   - Open a terminal and run:
     ```bash
     npx react-native init MyCalculatorApp
     ```
   - This command will create a new folder called `MyCalculatorApp` with all the initial React Native files.

2. **Navigate to the Project Directory**:
   ```bash
   cd MyCalculatorApp
   ```

3. **Start the Metro Server**:
   ```bash
   npx react-native start
   ```

4. **Run the Application on an Emulator or Device**:
   - **Android**:
     ```bash
     npx react-native run-android
     ```
   - **iOS** (MacOS only):
     ```bash
     npx react-native run-ios
     ```

---

## 🔧 Troubleshooting Common Issues

1. **Connection Error with Emulator**:
   - Ensure the emulator is open before running `npx react-native run-android`.

2. **Java Version Error**:
   - Verify that you have the correct JDK version configured in the environment variables.

3. **Metro Bundler Issues**:
   - If Metro fails to start, try clearing the cache:
     ```bash
     npx react-native start --reset-cache
     ```

---

You're all set! Now you should have everything configured to run and develop the project. For further assistance, refer to the [official React Native documentation](https://reactnative.dev/docs/getting-started).
