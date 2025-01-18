# Technical Manual for Beginner-Friendly React Native Calculator App

This technical manual provides in-depth information about the structure, components, and technologies used in the **Beginner-Friendly React Native Calculator App**. This document is aimed at developers who want to understand the project at a deeper level.

---

## 📂 Project Structure

The project is structured as follows:

```
Beginner-Friendly-React-Native-Calculator-App/
├── .bundle/               # Bundler configurations
├── __tests__/             # Test files
├── android/               # Android-specific files
├── assets/                # Images and other assets
├── ios/                   # iOS-specific files
├── .eslintrc.js           # ESLint configuration
├── .gitignore             # Files and folders ignored by Git
├── .prettierrc.js         # Prettier configuration for code formatting
├── .watchmanconfig        # Watchman configuration
├── App.tsx                # Main application component
├── Gemfile                # Ruby dependencies
├── README.md              # Project overview and setup guide
├── app.json               # Application configuration
├── babel.config.js        # Babel configuration for JavaScript compilation
├── index.js               # Entry point of the app
├── jest.config.js         # Jest configuration for testing
├── metro.config.js        # Metro bundler configuration
├── package-lock.json      # npm lockfile
├── package.json           # Project dependencies and metadata
├── tsconfig.json          # TypeScript configuration
```

---

## 🛠️ Key Technologies Used

### 1. **React Native**
- Framework for building cross-platform mobile applications.
- Core features include:
  - **Flexbox** for responsive UI design.
  - **State Management** using React hooks.
  - **Platform-Specific Code** for Android and iOS.

### 2. **TypeScript**
- Superset of JavaScript for type-safe programming.
- Improves code readability and reduces runtime errors.

### 3. **Metro Bundler**
- Fast and efficient JavaScript bundler optimized for React Native projects.

### 4. **Testing with Jest**
- Unit testing framework integrated into the project.
- Test files are located in the `__tests__/` directory.

### 5. **Styling**
- Uses React Native's built-in `StyleSheet` for component styling.
- Ensures consistency across different screen sizes and resolutions.

---

## 🖥️ Development Workflow

### 1. **Setting Up the Development Environment**
Refer to the [Developer Setup Guide](./DEVELOPER_SETUP.md) for detailed instructions on setting up your local environment.

### 2. **Running the App**
- Start the Metro server:
  ```bash
  npx react-native start
  ```
- Run the app on Android:
  ```bash
  npx react-native run-android
  ```
- Run the app on iOS (macOS only):
  ```bash
  npx react-native run-ios
  ```

### 3. **Debugging**
- Use **React Developer Tools** to inspect the component hierarchy and state.
- Enable **Remote Debugging** in the developer menu to debug JavaScript using Chrome DevTools.

---

## 🧩 Component Breakdown

### 1. **App.tsx**
- Entry point of the application.
- Manages the main state of the calculator, including:
  - **Input Field**: Displays the current input.
  - **Result Field**: Displays the calculation result.
  - **Buttons**: Represents numeric and operator keys.

### 2. **Custom Components**
- **Button Component**:
  - Reusable for numeric and operator buttons.
  - Handles button press events.
- **Display Component**:
  - Displays the input and result fields.

---

## ⚙️ Configuration Files

### 1. **babel.config.js**
- Configures Babel for transpiling JavaScript and TypeScript code.

### 2. **tsconfig.json**
- TypeScript compiler options, including:
  - `target`: Specifies ECMAScript version.
  - `strict`: Enforces stricter type-checking rules.

### 3. **metro.config.js**
- Customizes the Metro bundler.
- Includes configurations for asset handling and performance optimization.

---

## 📊 Performance Optimization

- **Bundle Size Reduction**:
  - Uses code-splitting to load only required components.
  - Minimizes asset sizes for faster loading.
- **Efficient State Updates**:
  - Implements React hooks like `useState` and `useEffect` efficiently.

---

## 📄 Testing Guide

1. **Unit Tests**:
   - Located in the `__tests__/` directory.
   - Run tests using:
     ```bash
     npm test
     ```
2. **Adding New Tests**:
   - Write test cases for new features or bug fixes.
   - Follow the existing test structure for consistency.

---

## 🔄 Updating Dependencies

- Check outdated dependencies:
  ```bash
  npm outdated
  ```
- Update all dependencies:
  ```bash
  npm update
  ```
- Upgrade React Native to the latest version:
  ```bash
  npx react-native upgrade
  ```

---

## 📞 Support

For technical support or further assistance:

- **LinkedIn**: [Danilo Viteri](https://www.linkedin.com/in/danilo-viteri-moreno/)

Refer to the [official React Native documentation](https://reactnative.dev/docs/getting-started) for additional resources.

---

Thank you for exploring the technical details of the **Beginner-Friendly React Native Calculator App**. We hope this manual enhances your understanding of the project and its capabilities. 🚀
