# Respuestas del Examen 

## 1. Componente Funcional Greeting
esta en `src/components/Greeting.tsx`. Recibe un prop `name` y muestra "Hola, [nombre]".

## 2. Botón Toggle con useState
esta en `src/components/ToggleButton.tsx`. Alterna entre "Encendido" y "Apagado".

## 3. Navegación con React Router
esta en `src/App.tsx` con rutas para Home y About Us.

## 4. Ubicación del Componente Card
El Card esta ubicado en `src/components/Card.tsx`.

**Justificación:**
- Se coloca en la carpeta `components` porque es un componente reutilizable que puede ser usado en múltiples páginas o secciones de la aplicacion
- Esta estructura sigue las mejores prácticas de organización en React, para haci separar los componentes de las páginas y manteniendo el codigo modular y fácil de mantener
- Permite importar el componente fácilmente desde cualquier parte de la aplicación, como se hace en `src/pages/Home.tsx`

## 5. Esquema de Carpetas del Proyecto React
```
examen-react/
├── public/
│   ├── vite.svg
│   └── (otros archivos estáticos)
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── Card.tsx
│   │   ├── Greeting.tsx
│   │   └── ToggleButton.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   └── About.tsx
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

Esta estructura organiza el código de manera lógica:
- `public/`: Archivos estáticos accesibles públicamente.
- `src/`: Código fuente de la aplicación.
  - `components/`: Componentes reutilizables.
  - `pages/`: Componentes que representan páginas completas.
  - `assets/`: Recursos como imágenes o iconos.
- Archivos de configuración en la raíz.

## 6. Versionado con Git y Subida a GitHub
El proyecto está versionado con Git y subido a GitHub. Enlace del repositorio: https://github.com/JairoParisaca/Examen-React
