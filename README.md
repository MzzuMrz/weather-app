Weather Dashboard
Weather Dashboard es una aplicación desarrollada con React y Vite que permite a los usuarios buscar ciudades y visualizar el clima actual y un pronóstico del tiempo para los próximos cinco días. La aplicación es responsiva y está estilizada con SASS y la metodología BEM. Además, está desplegada en Vercel para un despliegue continuo y sin complicaciones.

Características
Búsqueda de ciudades: Permite a los usuarios buscar información meteorológica de cualquier ciudad.
Visualización del clima: Muestra el clima actual y el pronóstico para los próximos cinco días.
Diseño responsivo: Adaptado para verse bien en dispositivos de todos los tamaños.
Estilización avanzada: Utiliza SASS para los estilos y la metodología BEM para una estructura clara y mantenible.
Despliegue continuo: Integración con Vercel para despliegues automáticos.
Tecnologías Utilizadas
React
Vite
SASS
BEM
API de OpenWeatherMap
Vercel
Instalación
Clona el repositorio:

git clone https://github.com/tu-usuario/weather-app.git
cd weather-app

Instala las dependencias:

npm install

Configura las variables de entorno:

Crea un archivo .env en la raíz del proyecto y añade tu clave de la API de OpenWeatherMap:

VITE_OPENWEATHERMAP_API_KEY=tu_api_key

Inicia el servidor de desarrollo:

npm run dev

Despliegue
El proyecto está configurado para el despliegue continuo en Vercel. Cada vez que se hace un push a la rama main, Vercel despliega automáticamente la última versión de la aplicación.

Configuración de Vercel
Enlace del repositorio: Asegúrate de que tu repositorio de GitHub esté enlazado a tu proyecto en Vercel.
Variables de entorno: Configura las siguientes variables de entorno en el panel de configuración de tu proyecto en Vercel:
VERCEL_TOKEN: El token de acceso de Vercel.
VERCEL_ORG_ID: El ID de tu organización en Vercel (team_yO1O8koI13FKoQGkXqqrbita).
VERCEL_PROJECT_ID: El ID de tu proyecto en Vercel (mocGkB9c3IhI1ctX8ggagMmL).
VITE_OPENWEATHERMAP_API_KEY: La clave de la API de OpenWeatherMap.
