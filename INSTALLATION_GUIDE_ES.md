# Guía de Instalación para la "Aplicación de Calculadora en React Native para Principiantes"

¡Bienvenido! Esta guía proporciona instrucciones detalladas para configurar y ejecutar la **Aplicación de Calculadora en React Native para Principiantes** en un entorno Windows. Sigue estos pasos cuidadosamente para evitar problemas comunes relacionados con las versiones y configuraciones.

---

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener los siguientes componentes instalados:

- **Sistema Operativo**: Windows 10 o posterior.
- **RAM**: Mínimo de 4 GB.
- **Espacio en Disco**: Al menos 10 GB disponibles.
- **Navegador Web**: Chrome, Microsoft Edge, Firefox, etc.

---

## 🛠️ Instalación de Herramientas Requeridas

### 1. **Node.js y npm**

React Native requiere Node.js y npm (Node Package Manager).

- **Versión Recomendada**: Usa una versión LTS de Node.js, preferiblemente la versión 18.x.

- **Instalación**:
  - Descarga el instalador desde la [página oficial de Node.js](https://nodejs.org/).
  - Ejecuta el instalador y sigue las instrucciones.
  - Para verificar la instalación, abre una terminal y ejecuta:
    ```bash
    node -v
    npm -v
    ```
    Deberías ver las versiones instaladas de Node.js y npm.

### 2. **Administrador de Versiones de Node.js (nvm-windows)**

Si necesitas gestionar múltiples versiones de Node.js, se recomienda instalar nvm-windows.

- **Instalación**:
  - Descarga el instalador desde el [repositorio oficial de nvm-windows](https://github.com/coreybutler/nvm-windows/releases).
  - Ejecuta el instalador y sigue las instrucciones.
  - Para verificar la instalación, abre una terminal y ejecuta:
    ```bash
    nvm -v
    ```
    Deberías ver la versión instalada de nvm.

- **Uso**:
  - Para instalar una versión específica de Node.js:
    ```bash
    nvm install 18.16.0
    ```
  - Para usar una versión específica:
    ```bash
    nvm use 18.16.0
    ```

### 3. **React Native CLI**

El Command Line Interface (CLI) de React Native simplifica la creación y gestión de proyectos.

- **Instalación**:
  - Con npm instalado, ejecuta el siguiente comando en la terminal:
    ```bash
    npm install -g react-native-cli
    ```
  - Para verificar la instalación, ejecuta:
    ```bash
    react-native -v
    ```
    Deberías ver la versión instalada del CLI.

### 4. **Java SE Development Kit (JDK)**

React Native requiere el JDK para compilar y ejecutar aplicaciones Android.

- **Versión Recomendada**: JDK 11 o JDK 17.

- **Instalación**:
  - Descarga el instalador desde la [página oficial de Oracle](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html).
  - Ejecuta el instalador y sigue las instrucciones.
  - Para verificar la instalación, abre una terminal y ejecuta:
    ```bash
    java -version
    ```
    Deberías ver la versión instalada de Java.

### 5. **Android Studio**

Requerido para emular y probar aplicaciones Android.

- **Instalación**:
  - Descarga el instalador desde la [página oficial de Android Studio](https://developer.android.com/studio).
  - Ejecuta el instalador y sigue las instrucciones, asegurándote de incluir:
    - Android SDK
    - Android SDK Platform
    - Android Virtual Device

- **Configuración**:
  - Abre Android Studio y navega a **More Actions > SDK Manager**.
  - En la pestaña **SDK Platforms**, selecciona **Android 12 (S)**.
  - En la pestaña **SDK Tools**, asegúrate de seleccionar **Android SDK Build-Tools 31.0.0**.

- **Variables de Entorno**:
  - Agrega una nueva variable de entorno llamada `ANDROID_HOME` apuntando al directorio de instalación del Android SDK.
  - Modifica la variable `Path` para incluir:
    - `%ANDROID_HOME%\platform-tools`
    - `%ANDROID_HOME%\tools`

---

## 🚀 Creación y Ejecución del Proyecto

1. **Crear un Nuevo Proyecto**:
   - Abre una terminal y ejecuta:
     ```bash
     npx react-native init MyCalculatorApp
     ```
   - Este comando creará una nueva carpeta llamada `MyCalculatorApp` con todos los archivos iniciales de React Native.

2. **Navegar al Directorio del Proyecto**:
   ```bash
   cd MyCalculatorApp
   ```

3. **Iniciar el Servidor Metro**:
   ```bash
   npx react-native start
   ```

4. **Ejecutar la Aplicación en un Emulador o Dispositivo**:
   - **Android**:
     ```bash
     npx react-native run-android
     ```
   - **iOS** (solo en macOS):
     ```bash
     npx react-native run-ios
     ```

---

## 🔧 Solución de Problemas Comunes

1. **Error de Conexión con el Emulador**:
   - Asegúrate de que el emulador esté abierto antes de ejecutar `npx react-native run-android`.

2. **Error de Versión de Java**:
   - Verifica que tienes la versión correcta de JDK configurada en las variables de entorno.

3. **Problemas con el Metro Bundler**:
   - Si Metro no se inicia, intenta limpiar la caché:
     ```bash
     npx react-native start --reset-cache
     ```

---

¡Todo listo! Ahora deberías tener todo configurado para ejecutar y desarrollar el proyecto. Para obtener más ayuda, consulta la [documentación oficial de React Native](https://reactnative.dev/docs/getting-started).
