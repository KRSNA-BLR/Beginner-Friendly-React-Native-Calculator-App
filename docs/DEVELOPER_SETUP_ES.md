<div align="center">

<img src="../assets/kbasesorias-logo-react-calculadora.png" alt="KB React Calculator Logo" width="100"/>

# 📙 Guía de Desarrollo

**KB React Calculator** - Entorno de Desarrollo

[🇺🇸 English](./DEVELOPER_SETUP.md) | [🇪🇸 Español](./DEVELOPER_SETUP_ES.md) | [⬅ Volver](../README_ES.md)

</div>

---

Esta guía te ayuda a configurar un entorno de desarrollo para el proyecto.

---

## 📋 Requisitos Previos

Asegúrate de que tu sistema cumpla con los siguientes requisitos:

- **Sistema Operativo**: Windows 10 o posterior, macOS o Linux.
- **Memoria**: Mínimo 4 GB de RAM.
- **Espacio en Disco**: Al menos 10 GB de espacio libre.

### Herramientas y Software

- [Node.js (versión LTS)](https://nodejs.org/) - Versión recomendada: **18.x**.
- [React Native CLI](https://reactnative.dev/docs/cli) - Para la gestión del proyecto.
- [Java Development Kit (JDK)](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html) - Versión **11** o **17**.
- [Android Studio](https://developer.android.com/studio) - Para el desarrollo y la emulación en Android.
- [Xcode (solo macOS)](https://developer.apple.com/xcode/) - Para el desarrollo en iOS.
- [Git](https://git-scm.com/) - Sistema de control de versiones.

---

## 🛠️ Pasos de Instalación

### 1. Instalar Node.js y npm

- Descarga el instalador desde el [sitio oficial de Node.js](https://nodejs.org/).
- Elige la versión **LTS** para mayor estabilidad.
- Después de instalar, verifica las versiones ejecutando en la terminal:
  ```bash
  node -v
  npm -v
  ```

### 2. Instalar React Native CLI

- Instala el CLI de React Native globalmente:
  ```bash
  npm install -g react-native-cli
  ```
- Verifica la instalación:
  ```bash
  react-native -v
  ```

### 3. Instalar Java Development Kit (JDK)

- Descarga e instala el JDK 11 o 17 desde [Oracle](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html).
- Verifica la instalación:
  ```bash
  java -version
  ```

### 4. Instalar Android Studio

- Descarga e instala Android Studio desde [aquí](https://developer.android.com/studio).
- Durante la instalación, selecciona los siguientes componentes:
  - Android SDK.
  - Android SDK Platform.
  - Android Virtual Device.

- Configura el Android SDK:
  - Abre **Android Studio** y ve a **More Actions > SDK Manager**.
  - En la pestaña **SDK Platforms**, selecciona **Android 12 (S)**.
  - En la pestaña **SDK Tools**, selecciona **Android SDK Build-Tools 31.0.0**.

- Agrega variables de entorno:
  - Configura `ANDROID_HOME` con la ruta del Android SDK.
  - Agrega las siguientes rutas a `Path`:
    ```
    %ANDROID_HOME%\platform-tools
    %ANDROID_HOME%\tools
    ```

### 5. Instalar Xcode (solo macOS)

- Descarga e instala Xcode desde la [Mac App Store](https://apps.apple.com/us/app/xcode/id497799835?mt=12).
- Instala las herramientas de línea de comandos de Xcode:
  ```bash
  xcode-select --install
  ```
- Abre Xcode y acepta la licencia.

### 6. Instalar Git

- Descarga Git desde [aquí](https://git-scm.com/).
- Verifica la instalación:
  ```bash
  git --version
  ```

---

## 🚀 Configuración del Proyecto

### 1. Clonar el Repositorio

- Usa Git para clonar el repositorio:
  ```bash
  git clone https://github.com/KRSNA-BLR/Beginner-Friendly-React-Native-Calculator-App.git
  cd Beginner-Friendly-React-Native-Calculator-App
  ```

### 2. Instalar Dependencias

- Ejecuta el siguiente comando para instalar todas las dependencias requeridas:
  ```bash
  npm install
  ```

### 3. Iniciar el Servidor Metro

- Lanza el servidor Metro:
  ```bash
  npx react-native start
  ```

### 4. Ejecutar la Aplicación

#### Android
- Asegúrate de que un emulador de Android esté en ejecución o conecta un dispositivo Android físico.
- Ejecuta la aplicación:
  ```bash
  npx react-native run-android
  ```

#### iOS (solo macOS)
- Abre un simulador de iOS o conecta un dispositivo iOS físico.
- Ejecuta la aplicación:
  ```bash
  npx react-native run-ios
  ```

---

## 🧰 Consejos Adicionales

### 1. Recarga Automática
- Guarda tus cambios en el editor de código para verlos reflejados al instante en la aplicación.

### 2. Limpiar Caché
- Si encuentras problemas con el Metro bundler, limpia la caché:
  ```bash
  npx react-native start --reset-cache
  ```

### 3. Actualizar Dependencias
- Para actualizar React Native y otras dependencias:
  ```bash
  npm update
  ```

---

<div align="center">

**KB React Calculator** © 2025 [KB Asesorías](https://www.linkedin.com/in/danilo-viteri-moreno/)

[⬆ Volver arriba](#-guía-de-desarrollo) | [📖 Docs](../docs/) | [🐛 Issues](https://github.com/KRSNA-BLR/Beginner-Friendly-React-Native-Calculator-App/issues)

</div>

¡Gracias por contribuir al proyecto! 🚀
