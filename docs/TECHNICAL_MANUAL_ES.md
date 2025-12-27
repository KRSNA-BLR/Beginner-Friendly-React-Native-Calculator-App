<div align="center">

<img src="../assets/kbasesorias-logo-react-calculadora.png" alt="KB React Calculator Logo" width="100"/>

# 📘 Manual Técnico

**KB React Calculator** - Documentación Técnica

[🇺🇸 English](./TECHNICAL_MANUAL.md) | [🇪🇸 Español](./TECHNICAL_MANUAL_ES.md) | [⬅ Volver](../README_ES.md)

</div>

---

Este manual proporciona información detallada sobre la arquitectura y componentes del proyecto.

---

## 📂 Estructura del Proyecto

El proyecto está estructurado de la siguiente manera:

```
KBReactCalculator/
├── 📁 src/                    # Código fuente principal
│   ├── 📄 App.tsx             # Componente raíz con ThemeProvider
│   ├── 📁 components/         # Componentes de UI
│   │   ├── 📁 Button/         # Botón reutilizable con animaciones
│   │   ├── 📁 Calculator/     # Componente principal
│   │   ├── 📁 Display/        # Pantalla de resultados
│   │   └── 📁 Header/         # Encabezado con logo
│   ├── 📁 hooks/              # Custom hooks
│   │   ├── 📄 useCalculator.ts
│   │   └── 📄 useTheme.tsx
│   ├── 📁 utils/              # Utilidades matemáticas (mathjs)
│   ├── 📁 constants/          # Temas y configuración de botones
│   └── 📁 types/              # Tipos TypeScript
├── 📁 docs/                   # Documentación
├── 📁 __tests__/              # Tests (72 tests, 4 suites)
├── 📁 android/                # Android (com.kbasesorias.reactcalculator)
├── 📁 ios/                    # iOS (KBReactCalculator)
└── 📁 assets/                 # Imágenes y recursos
```

---

## 🛠️ Tecnologías Clave Utilizadas

### 1. **React Native**
- Framework para construir aplicaciones móviles multiplataforma.
- Características principales:
  - **Flexbox** para diseño de interfaz de usuario responsivo.
  - **Gestión de Estado** utilizando hooks de React.
  - **Código Específico para Plataformas** para Android e iOS.

### 2. **TypeScript**
- Superconjunto de JavaScript para programación con tipado estático.
- Mejora la legibilidad del código y reduce errores en tiempo de ejecución.

### 3. **Metro Bundler**
- Bundler rápido y eficiente optimizado para proyectos de React Native.

### 4. **Pruebas con Jest**
- Framework de pruebas unitarias integrado en el proyecto.
- Los archivos de prueba se encuentran en el directorio `__tests__/`.

### 5. **Estilos**
- Utiliza el `StyleSheet` integrado de React Native para la estilización de componentes.
- Garantiza consistencia en diferentes tamaños y resoluciones de pantalla.

---

## 🖥️ Flujo de Trabajo de Desarrollo

### 1. **Configuración del Entorno de Desarrollo**
Consulta la [Guía de Configuración para Desarrolladores](./DEVELOPER_SETUP_ES.md) para obtener instrucciones detalladas sobre cómo configurar tu entorno local.

### 2. **Ejecución de la Aplicación**
- Inicia el servidor Metro:
  ```bash
  npx react-native start
  ```
- Ejecuta la aplicación en Android:
  ```bash
  npx react-native run-android
  ```
- Ejecuta la aplicación en iOS (solo en macOS):
  ```bash
  npx react-native run-ios
  ```

### 3. **Depuración**
- Utiliza **React Developer Tools** para inspeccionar la jerarquía de componentes y el estado.
- Habilita **Depuración Remota** en el menú de desarrolladores para depurar JavaScript usando las DevTools de Chrome.

---

## 🧩 Desglose de Componentes

### 1. **App.tsx**
- Punto de entrada de la aplicación.
- Administra el estado principal de la calculadora, incluyendo:
  - **Campo de Entrada**: Muestra el texto ingresado.
  - **Campo de Resultado**: Muestra el resultado del cálculo.
  - **Botones**: Representa las teclas numéricas y operativas.

### 2. **Componentes Personalizados**
- **Componente de Botón**:
  - Reutilizable para botones numéricos y de operaciones.
  - Maneja los eventos de pulsación de botones.
- **Componente de Pantalla**:
  - Muestra los campos de entrada y resultado.

---

## ⚙️ Archivos de Configuración

### 1. **babel.config.js**
- Configura Babel para transpilar código JavaScript y TypeScript.

### 2. **tsconfig.json**
- Opciones del compilador de TypeScript, incluyendo:
  - `target`: Especifica la versión de ECMAScript.
  - `strict`: Habilita reglas de tipado más estrictas.

### 3. **metro.config.js**
- Personaliza el bundler Metro.
- Incluye configuraciones para la gestión de recursos y optimización del rendimiento.

---

## 📊 Optimización de Rendimiento

- **Reducción del Tamaño del Bundle**:
  - Utiliza división de código para cargar solo los componentes necesarios.
  - Minimiza el tamaño de los recursos para una carga más rápida.
- **Actualizaciones Eficientes del Estado**:
  - Implementa hooks de React como `useState` y `useEffect` de manera eficiente.

---

## 📄 Guía de Pruebas

1. **Pruebas Unitarias**:
   - Ubicadas en el directorio `__tests__/`.
   - Ejecuta las pruebas utilizando:
     ```bash
     npm test
     ```
2. **Añadiendo Nuevas Pruebas**:
   - Escribe casos de prueba para nuevas características o correcciones de errores.
   - Sigue la estructura de pruebas existente para mantener la consistencia.

---

## 🔄 Actualización de Dependencias

- Revisa las dependencias desactualizadas:
  ```bash
  npm outdated
  ```
- Actualiza todas las dependencias:
  ```bash
  npm update
  ```
- Actualiza React Native a la última versión:
  ```bash
  npx react-native upgrade
  ```

---

<div align="center">

**KB React Calculator** © 2025 [KB Asesorías](https://www.linkedin.com/in/danilo-viteri-moreno/)

[⬆ Volver arriba](#-manual-técnico) | [📖 Docs](../docs/) | [🐛 Issues](https://github.com/KRSNA-BLR/Beginner-Friendly-React-Native-Calculator-App/issues)

</div>
