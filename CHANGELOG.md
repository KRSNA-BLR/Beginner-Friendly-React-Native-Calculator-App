<div align="center">

<img src="./assets/kbasesorias-logo-react-calculadora.png" alt="KB React Calculator Logo" width="100"/>

# 📋 Changelog

**KB React Calculator** - Historial de Versiones

[🇺🇸 English](./README.md) | [🇪🇸 Español](./README_ES.md)

</div>

---

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto adhiere a [Versionado Semántico](https://semver.org/lang/es/).

---

## [1.0.0] - 2025-12-27

### 🎯 Renombramiento del Proyecto

El proyecto ha sido renombrado completamente de `agendaAppCitas` a `KBReactCalculator`:

| Plataforma | Antes | Después |
|------------|-------|---------|
| **app.json** | `agendaAppCitas` | `KBReactCalculator` |
| **package.json** | `agendaAppCitas` | `kbreact-calculator` |
| **Android Package** | `com.agendaappcitas` | `com.kbasesorias.reactcalculator` |
| **Android App Name** | `agendaAppCitas` | `KB React Calculator` |
| **iOS Bundle** | `agendaAppCitas` | `KBReactCalculator` |
| **iOS Display Name** | `agendaAppCitas` | `KB React Calculator` |

### ✨ Añadido

#### Arquitectura
- Nueva estructura modular con carpeta `src/`
- Separación de componentes en `src/components/`
- Custom hooks en `src/hooks/`
- Utilidades en `src/utils/`
- Constantes en `src/constants/`
- Tipos TypeScript en `src/types/`

#### Componentes
- `CalculatorButton`: Botón reutilizable con animaciones y feedback háptico
- `Display`: Componente de visualización con soporte de tema
- `Header`: Encabezado con logo y soporte de tema
- `Calculator`: Componente principal con toggle de tema
- `ThemeProvider`: Contexto para manejo de temas

#### Hooks
- `useCalculator`: Lógica completa de la calculadora
- `useTheme`: Manejo de temas claro/oscuro con detección del sistema

#### Funcionalidades
- 🌓 Modo oscuro/claro con toggle dinámico
- 📳 Vibración háptica al presionar botones (Android)
- ✨ Animaciones suaves en botones con Animated API
- 🔢 Constantes matemáticas: π (Pi), e (Euler)
- 📐 Funciones adicionales: ln, factorial (!), abs, mod (%)
- ⌫ Botón de borrar último carácter
- 📜 Historial de operaciones en estado
- 🛡️ Evaluación segura con mathjs (reemplazo de eval())

#### Documentación
- README.md completamente renovado con:
  - Badges de tecnologías
  - Tabla de contenidos clickeable
  - Diagramas Mermaid de arquitectura
  - Diagrama de flujo de datos
  - Diagrama de componentes
  - Diagrama de estados del tema
  - Sección de FAQ
  - Roadmap del proyecto
- Archivo LICENSE (MIT)
- Archivo CODE_OF_CONDUCT.md bilingüe (ES/EN)
- CHANGELOG.md (este archivo)
- Documentación movida a carpeta `docs/`

### 🔄 Cambiado

#### Dependencias actualizadas
- React Native: 0.76.6 → 0.78.0
- React: 18.3.1 → 19.0.0
- TypeScript: 5.0.4 → 5.7.2
- Prettier: 2.8.8 → 3.4.2
- @types/react: 18.2.6 → 19.0.0
- Todas las dependencias de desarrollo actualizadas

#### Configuración
- `package.json`: Nombre corregido a "kbreact-calculator"
- `app.json`: Nombre actualizado a "KBReactCalculator", displayName a "KB React Calculator"
- Android: Package `com.kbasesorias.reactcalculator` con MainActivity y MainApplication actualizados
- iOS: Bundle ID, Podfile, xcodeproj y todos los archivos renombrados a `KBReactCalculator`
- Nuevos scripts: `lint:fix`, `test:coverage`, `clean`

### 🐛 Corregido

- Nombre del proyecto completamente renombrado de "agendaAppCitas" a "KBReactCalculator"
- Seguridad: Reemplazado `eval()` por `mathjs.evaluate()`
- Referencias a archivos inexistentes en documentación
- Estructura de carpetas iOS completamente reorganizada

### 🗑️ Eliminado

- Archivo `App.tsx` raíz (movido a `src/App.tsx`)

---

## Tipos de Cambios

| Icono | Tipo | Descripción |
|-------|------|-------------|
| ✨ | Añadido | Nuevas funcionalidades |
| 🔄 | Cambiado | Cambios en funcionalidades existentes |
| 🗑️ | Eliminado | Funcionalidades eliminadas |
| 🐛 | Corregido | Corrección de errores |
| 🔒 | Seguridad | Vulnerabilidades corregidas |

---

<div align="center">

**KB React Calculator** © 2025 [KB Asesorías](https://www.linkedin.com/in/danilo-viteri-moreno/)

[⬆ Volver arriba](#-changelog) | [📖 Docs](./docs/) | [🐛 Issues](https://github.com/KRSNA-BLR/Beginner-Friendly-React-Native-Calculator-App/issues)

</div>
