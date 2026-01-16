# 🌤️ Clima Aplicación

Una aplicación moderna y responsiva de pronóstico del tiempo construida con **React**, **TypeScript** y **Vite**. Proporciona información detallada del clima en tiempo real y pronósticos para múltiples días.

---

## 📋 Características Principales

✅ **Búsqueda de ubicaciones** - Busca el clima de cualquier ciudad del mundo  
✅ **Pronóstico detallado** - Visualiza el clima por horas y días  
✅ **Interfaz moderna** - Diseño atractivo con animaciones fluidas  
✅ **Datos en tiempo real** - Integración con API de clima  
✅ **Gestión de estado** - Manejo eficiente con Zustand  
✅ **Totalmente responsivo** - Se adapta a cualquier dispositivo  
✅ **Notificaciones** - Sistema de feedback con Sonner

---

## 🛠️ Stack Tecnológico

| Categoría              | Tecnología                 |
| ---------------------- | -------------------------- |
| **Frontend Framework** | React 19.2.0               |
| **Lenguaje**           | TypeScript 5.9.3           |
| **Build Tool**         | Vite 7.2.4                 |
| **Ruteo**              | React Router DOM 7.12.0    |
| **Gestión de Estado**  | Zustand 5.0.10             |
| **Estilos**            | Tailwind CSS 4.1.18        |
| **Animaciones**        | Framer Motion 12.25.0      |
| **Iconos**             | React Icons 5.5.0          |
| **Notificaciones**     | Sonner 2.0.7               |
| **Linting**            | ESLint + TypeScript ESLint |
| **Formato**            | Prettier                   |

---

## 📁 Estructura del Proyecto

```
src/
├── components/              # Componentes reutilizables
│   ├── Atomos/             # Componentes atómicos (CardClima, Loading, Search)
│   ├── ClimaPage/          # Componentes de la página de clima
│   │   └── Sections/       # Secciones específicas (ClimaActual, CardsClimas)
│   └── Home/               # Componentes de página de inicio
│
├── pages/                  # Páginas principales
│   ├── Home.tsx           # Página de inicio
│   └── LugarClima.tsx     # Página de detalle del clima
│
├── hooks/                 # Hooks personalizados
│   ├── useClima.ts        # Hook para datos de clima
│   ├── useClimaDay.ts     # Hook para clima diario
│   └── useSearch.ts       # Hook para búsqueda
│
├── services/              # Servicios de API
│   └── climaService.ts    # Conexión con API de clima
│
├── store/                 # Gestión de estado global
│   └── climaStore.ts      # Store de Zustand para datos de clima
│
├── types/                 # Definiciones de tipos TypeScript
│   ├── dataClima.d.ts    # Tipos de datos climáticos
│   ├── componentes.d.ts  # Tipos de componentes
│   └── animaciones.d.ts  # Tipos de animaciones
│
├── utils/                # Funciones auxiliares
│   ├── errores.ts        # Manejo de errores
│   ├── fechas.ts         # Utilidades de fechas
│   └── traductor.ts      # Traductor de textos
│
├── constants/            # Constantes de la aplicación
│   └── animaciones.ts    # Configuración de animaciones
│
├── routes/               # Configuración de ruteo
│   └── routes.tsx        # Definición de rutas
│
├── App.tsx              # Componente raíz
├── main.tsx             # Punto de entrada
└── index.css            # Estilos globales
```

---

## 🚀 Comenzar

### Requisitos Previos

- Node.js 16+
- npm o yarn

### Instalación

1. **Clonar el repositorio**

```bash
git clone <repository-url>
cd clima-aplicacion
```

2. **Instalar dependencias**

```bash
npm install
```

3. **Configurar variables de entorno**

```bash
# Crear archivo .env
echo "VITE_API=<tu_api_url>" > .env
```

4. **Iniciar el servidor de desarrollo**

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

---

## 📦 Scripts Disponibles

| Comando           | Descripción                                    |
| ----------------- | ---------------------------------------------- |
| `npm run dev`     | Inicia el servidor de desarrollo con HMR       |
| `npm run build`   | Compila el proyecto para producción            |
| `npm run lint`    | Ejecuta ESLint para validar el código          |
| `npm run preview` | Previsualiza la build de producción localmente |

---

## 🏗️ Arquitectura

### Flujo de Datos

```
User Input (Search)
    ↓
useSearch Hook
    ↓
climaStore (Zustand)
    ↓
climaService (API Call)
    ↓
Components Rendering
    ↓
UI Update
```

### Gestión de Estado con Zustand

El estado global se maneja mediante `climaStore` que incluye:

- `dataClima` - Datos meteorológicos actuales
- `ciudad` - Ciudad actualmente seleccionada
- `dias` - Número de días para el pronóstico
- `error` - Manejo de errores
- Métodos para actualizar estado y obtener datos de API

### Componentes Clave

#### **Componentes Atómicos** (`Atomos/`)

- `CardClima.tsx` - Tarjeta individual de clima
- `Search.tsx` - Barra de búsqueda
- `Loading.tsx` - Indicador de carga
- `LinkButton.tsx` - Botón con navegación

#### **Componentes de Clima** (`ClimaPage/`)

- `ClimaActual.tsx` - Muestra el clima actual
- `ClimaHorasDayActual.tsx` - Clima por horas del día
- `ClimasDays.tsx` - Pronóstico de varios días
- `DataLocation.tsx` - Información de ubicación

---

## 🎨 Estilos y Diseño

- **Tailwind CSS** para utilidades de estilos
- **Framer Motion** para animaciones suaves
- **Diseño responsive** que funciona en móvil, tablet y desktop
- **Tema moderno** con colores azules y efectos de glassmorphism

---

## 🔌 API Integration

La aplicación se conecta a una API de clima externa. La configuración se realiza mediante:

```typescript
// climaService.ts
export async function ServiceWetherApi(lugar: string, days: number) {
    const url = `${import.meta.env.VITE_API}/${lugar}?days=${days + 1}`;
    const response = await fetch(url);
    return response.json();
}
```

---

## 📱 Rutas

| Ruta      | Componente | Descripción                        |
| --------- | ---------- | ---------------------------------- |
| `/`       | HomePage   | Página de inicio con búsqueda      |
| `/:lugar` | LugarClima | Detalle del clima de una ubicación |

---

## 🎯 Características Adicionales

### Notificaciones

Implementadas con **Sonner** para mostrar mensajes de éxito, error e información

### Animaciones

Componentes como `ContenedorScrollAnimado` proporcionan experiencias visuales atractivas

### Manejo de Errores

Sistema robusto de manejo de errores con mensajes útiles al usuario

### Internacionalización

Funciones de traducción para adaptar textos según idioma

---

## 📧 Contacto y Soporte

Para reportar problemas o sugerencias, por favor crear un issue en el repositorio.

---

## 📄 Licencia

Este proyecto está disponible bajo la licencia MIT.

---

**Desenvolvido con ❤️ usando React, TypeScript y Vite**
