# 🦸 Lego Star Wars: The Complete Saga - Character Viewer

![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=flat-square&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)

Este proyecto nace de la pasión por el universo Star Wars y la necesidad de aplicar los conceptos de **Programación Web Avanzada** en un caso de uso real. Más que una simple visualización de personajes, el objetivo es demostrar capacidad de arquitectura e ingeniería de software, aplicando patrones y metodologías agiles utilizadas en la industria.

El foco está en la calidad del código, la modularización de la arquitectura y el uso de herramientas profesionales que permitan mostrar competencia técnica a reclutadores

## ¿Cómo se presenta este desafío técnico?

A diferencia de un proyecto académico simple, esta implementación sigue un flujo de ingeniería pensado para la escalabilidad y el mantenimiento a largo plazo

### 1. Setup e Infraestructura
Se utiliza Vite para un entorno de desarrollo ágil y TailwindCSS para un sistema de diseño basado en utilidades que garantiza coherencia visual y rendimiento

### 2. Arquitectura Modular y Escalable
El proyecto se organiza bajo una estructura de componentes. La lógica se separa de la interfaz mediante el uso de hooks personalizados y servicios dedicados para el consumo de datos

## Flujo de Trabajo (Workflow)
Para garantizar la integridad del código, se implementan metodologías ágiles y estándares de colaboración profesional:
- GitFlow: El desarrollo se gestiona mediante ramas feature/, asegurando que la rama principal siempre contenga una versión estable.
- Gestión Ágil: Uso de un tablero Kanban para el seguimiento preciso de tareas y objetivos

## Implementación de Features Críticas
Para profesionalizar la plataforma, se integran funcionalidades de alta complejidad técnica:
- Routing Avanzado: Navegación dinámica entre categorías y vistas de detalle.
- Internacionalización (i18n): Soporte multi-idioma para una audiencia global.
- Estado Global: Gestión de personajes favoritos mediante Context API.
- Optimización de Rendimiento: Implementación de Infinite Scroll para un manejo eficiente de grandes volúmenes de datos

## Tecnologías Utilizadas
- React: Biblioteca principal para la interfaz de usuario.
- Vite: Herramienta de construcción de última generación.
- TailwindCSS: Framework de estilos para un diseño moderno

## Estructura del proyecto

```bash
├── public/              # Recursos estáticos públicos
├── src/
│   ├── assets/          # Imágenes, fuentes y recursos estáticos
│   ├── components/      # Componentes React reutilizables
│   ├── hooks/           # Custom hooks reutilizables
│   ├── services/        # Lógica de negocio y llamadas a APIs
│   ├── pages/           # Vistas/páginas de la aplicación
│   ├── utils/           # Funciones utilitarias
│   ├── App.jsx          # Componente principal
│   ├── main.jsx         # Punto de entrada
│   └── index.css        # Estilos globales
├── .gitignore           # Archivos excluidos de Git
├── .eslint.config.js    # Reglas de calidad de código
├── index.html           # Punto de entrada de la app
├── package-lock.json    # Historial de versiones instaladas
├── package.json         # Scripts y dependencias
├── README.md            # Documentación técnica
└── vite.config.js       # Configuración del entorno
```

## Instalación y ejecución

1. Clonar el repositorio:
   ```bash
   git clone <url-del-repositorio>
   cd LegoStarWarsTheCompleteSaga_Frontend
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```

La aplicación estará disponible en:
```
http://localhost:5173
```

## Scripts disponibles

- `npm run dev`: Inicia el servidor de desarrollo
- `npm run build`: Construye la aplicación para producción

---

<p align="center">
  <b>Benjamin de la fuente</b><br>
  <i>Estudiante en Desarrollo Web | Frontend Developer en formación</i><br><br>
  <a href="https://www.linkedin.com/in/benjamin-de-la-fuente/">
    <img src="https://img.shields.io/badge/LinkedIn-blue?logo=linkedin&logoColor=white" alt="LinkedIn"/>
  </a>
  <a href="https://github.com/BenjaminDeLaFuente">
    <img src="https://img.shields.io/badge/GitHub-black?logo=github&logoColor=white" alt="GitHub"/>
  </a>
</p>
