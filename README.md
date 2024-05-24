# Weather Dashboard

Este proyecto es una aplicación de Weather Dashboard desarrollada con React y Vite. Permite a los usuarios buscar ciudades y mostrar el clima actual y un pronóstico del tiempo para los próximos cinco días. La aplicación es responsiva y utiliza componentes funcionales de React, hooks, y la API de OpenWeatherMap. Además, incluye estilo con SASS y BEM, y está desplegada en Vercel.

## Características

- Búsqueda de ciudades para obtener información meteorológica.
- Visualización del clima actual y del pronóstico para los próximos cinco días.
- Diseño responsivo.
- Estilos utilizando SASS y metodología BEM.
- Despliegue continuo en Vercel.

## Tecnologías Utilizadas

- React
- Vite
- SASS
- BEM
- API de OpenWeatherMap
- Vercel

## Instalación

1. Clona el repositorio:

   ```sh
   git clone https://github.com/tu-usuario/weather-app.git
   cd weather-app
   Instala las dependencias:
   ```


npm install
Crea un archivo .env en la raíz del proyecto y añade tu clave de la API de OpenWeatherMap:
VITE_OPENWEATHERMAP_API_KEY=756f76e3274361e12e4bce97e68e5c1d

Inicia el servidor de desarrollo:
npm run dev

Despliegue
El proyecto está configurado para el despliegue continuo en Vercel. Cada vez que se hace un push a la rama main, Vercel automáticamente despliega la última versión de la aplicación.

Configuración de Vercel
Enlace del repositorio: Asegúrate de que tu repositorio de GitHub esté enlazado a tu proyecto en Vercel.
Variables de entorno: Configura las siguientes variables de entorno en el panel de configuración de tu proyecto en Vercel:
VERCEL_TOKEN: El token de acceso de Vercel.
VERCEL_ORG_ID: El ID de tu organización en Vercel (team_yO1O8koI13FKoQGkXqqrbita).
VERCEL_PROJECT_ID: El ID de tu proyecto en Vercel (mocGkB9c3IhI1ctX8ggagMmL).
VITE_OPENWEATHERMAP_API_KEY: La clave de la API de OpenWeatherMap.
Estructura del Proyecto

La estructura del proyecto es la siguiente:

weather-app/
│
├── public/
│ └── index.html
│
├── src/
│ ├── components/
│ │ └── SearchBar.jsx
│ ├── hooks/
│ │ └── useDebounce.js
│ ├── styles/
│ │ └── components/
│ │ └── searchBar.scss
│ ├── App.jsx
│ ├── index.jsx
│ └── ...
│
├── .env
├── package.json
├── README.md
└── ...
