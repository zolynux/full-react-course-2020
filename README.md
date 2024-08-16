# Curso de React Completo 2020

---

# Introducción al React.js

React.js es una biblioteca de JavaScript creada por Facebook que se utiliza para construir interfaces de usuario, especialmente en aplicaciones web de una sola página. React es conocida por su enfoque en la creación de componentes reutilizables, lo que facilita la construcción y mantenimiento de aplicaciones complejas.

### Principales características de React.js:

1. **Componentes**:

   - React se basa en componentes, que son bloques de construcción de la interfaz de usuario. Cada componente es una pieza independiente de la UI que puede ser reutilizada en diferentes partes de la aplicación.

2. **JSX (JavaScript XML)**:

   - JSX es una extensión de sintaxis que se utiliza en React para describir cómo debería verse la interfaz de usuario. Parece HTML, pero se utiliza dentro de archivos JavaScript.

3. **Virtual DOM**:

   - React utiliza un árbol de objetos en memoria llamado Virtual DOM. Cuando el estado de la aplicación cambia, React actualiza eficientemente el DOM real comparando las diferencias entre el DOM virtual y el real.

4. **Unidireccionalidad del flujo de datos**:

   - En React, los datos fluyen en una sola dirección, de los componentes padres a los componentes hijos. Esto hace que el estado de la aplicación sea más predecible y fácil de depurar.

5. **Gestión del Estado**:
   - React gestiona el estado de los componentes para determinar cómo deben comportarse y qué deben renderizar. Con el tiempo, el manejo de estado ha evolucionado con herramientas como Redux o el API de Contexto de React para manejar estados globales.

### ¿Por qué aprender React?

- **Popularidad y demanda**: React es una de las bibliotecas más populares en el desarrollo web moderno. Empresas grandes y pequeñas lo usan para construir aplicaciones web dinámicas.
- **Ecosistema robusto**: React tiene un ecosistema amplio con muchas herramientas y bibliotecas complementarias que pueden ayudarte a desarrollar aplicaciones complejas.

- **Comunidad activa**: Al ser tan popular, hay una gran cantidad de recursos, tutoriales y foros donde puedes obtener ayuda o aprender nuevas técnicas.

- **Desarrollo de aplicaciones móviles**: React Native, una extensión de React, te permite desarrollar aplicaciones móviles nativas para iOS y Android utilizando la misma base de conocimientos de React.

### Ejemplo básico en React

Aquí tienes un ejemplo básico de un componente en React que muestra "Hola, Mundo":

```jsx
import React from "react";

function HolaMundo() {
  return <h1>Hola, Mundo!</h1>;
}

export default HolaMundo;
```

Este es un componente funcional simple que renderiza un encabezado con el texto "Hola, Mundo!". Para renderizar este componente en una aplicación React, se usa el siguiente código en el archivo `index.js`:

```jsx
import React from "react";
import ReactDOM from "react-dom";
import HolaMundo from "./HolaMundo";

ReactDOM.render(<HolaMundo />, document.getElementById("root"));
```

### Conclusión

React.js es una herramienta poderosa para desarrollar interfaces de usuario modernas. Aprender React puede abrirte muchas puertas en el desarrollo web, dado su uso extensivo en la industria.

---

# Acerca de React.js

React.js es una de las bibliotecas de JavaScript más populares y ampliamente utilizadas para el desarrollo de interfaces de usuario en aplicaciones web. Fue desarrollada originalmente por Facebook en 2013 y ha crecido rápidamente en adopción debido a su enfoque en la eficiencia, la modularidad y la facilidad de uso.

### Principales características de React.js:

1. **Componentes**:

   - **Modularidad**: React se basa en la creación de componentes, que son bloques de construcción reutilizables. Cada componente puede ser un pequeño fragmento de la interfaz de usuario, como un botón, o tan complejo como un formulario o una lista. Estos componentes se pueden anidar, componer y reutilizar a lo largo de la aplicación.
   - **Componentes Funcionales y de Clase**: React permite la creación de componentes tanto como funciones como clases. Los componentes funcionales son más simples y se recomiendan para la mayoría de los casos de uso modernos.

2. **JSX (JavaScript XML)**:

   - **Sintaxis Declarativa**: JSX es una extensión de sintaxis que permite escribir código que se asemeja a HTML dentro de archivos JavaScript. Esto hace que el código sea más legible y expresivo. Aunque no es obligatorio, JSX se ha convertido en el estándar de facto para escribir componentes React.

3. **Virtual DOM**:

   - **Eficiencia en la Actualización del DOM**: React utiliza un Virtual DOM, que es una representación ligera del DOM real. Cuando el estado de un componente cambia, React crea un nuevo Virtual DOM y lo compara con el anterior para identificar las diferencias. Solo las partes que han cambiado se actualizan en el DOM real, lo que mejora significativamente el rendimiento.

4. **Unidireccionalidad del Flujo de Datos**:

   - **Flujo de Datos Controlado**: En React, los datos fluyen en una sola dirección, desde los componentes padres hacia los componentes hijos. Esto hace que el seguimiento de los cambios de estado y la depuración sean más fáciles y predecibles.
   - **Estados y Props**: El estado es un objeto que almacena datos que pueden cambiar durante la vida útil de un componente. Las props (propiedades) son datos que se pasan de un componente padre a un componente hijo y no se pueden modificar dentro del hijo.

5. **Ecosistema y Herramientas**:

   - **React Router**: Permite la navegación entre diferentes vistas de una aplicación React.
   - **Redux y Context API**: Estas herramientas se utilizan para gestionar el estado global de una aplicación, facilitando la compartición de datos entre componentes sin necesidad de pasar props a través de múltiples niveles de componentes.
   - **Hooks**: Introducidos en React 16.8, los hooks permiten el uso de estado y otras características de React en componentes funcionales.

6. **Comunidad y Soporte**:
   - **Amplia Comunidad**: React cuenta con una comunidad activa y en crecimiento. Hay numerosos recursos educativos, bibliotecas de terceros y herramientas que complementan y extienden las capacidades de React.
   - **Actualizaciones Frecuentes**: El equipo de React, respaldado por Meta (anteriormente Facebook), lanza actualizaciones regulares que mejoran la funcionalidad, rendimiento y facilidad de uso de la biblioteca.

### Casos de Uso de React.js:

- **Aplicaciones Web de Una Sola Página (SPA)**: React es ideal para construir aplicaciones que cargan una sola página HTML y actualizan dinámicamente el contenido sin necesidad de recargar toda la página.
- **Aplicaciones Web Progresivas (PWA)**: React puede ser utilizado para crear PWAs, que son aplicaciones web con características similares a las de las aplicaciones móviles.
- **Desarrollo Móvil con React Native**: Aunque React se centra en el desarrollo web, su filosofía y componentes pueden ser aplicados en el desarrollo móvil a través de React Native, lo que permite crear aplicaciones nativas para iOS y Android utilizando la misma base de código.

### Conclusión:

React.js ha transformado el desarrollo de interfaces de usuario, permitiendo a los desarrolladores construir aplicaciones web complejas de manera más eficiente y organizada. Su enfoque en la modularidad, la eficiencia y la reutilización de componentes lo convierte en una herramienta esencial en el desarrollo web moderno.

---

# Metas

- Cómodo
- Aplicar la teoría
- Desarrollar tus propios proyectos

### 1. **Sentirse Cómodo con React**

- **Estudia los Fundamentos**: Asegúrate de comprender bien los conceptos básicos como componentes, JSX, props, estado, y el ciclo de vida de los componentes.
- **Práctica Regular**: Dedica tiempo cada día a escribir código en React, incluso si son pequeñas aplicaciones o ejemplos. La práctica constante es clave para la comodidad.
- **Explora la Documentación**: La documentación oficial de React es un recurso invaluable. Familiarízate con ella para resolver dudas y aprender buenas prácticas.

### 2. **Aplicar la Teoría**

- **Proyectos Prácticos**: Comienza con proyectos pequeños para aplicar lo que has aprendido. Por ejemplo, crea una lista de tareas, un contador o una simple aplicación de notas.
- **Desafíos de Programación**: Participa en desafíos o ejercicios de React en plataformas como [Frontend Mentor](https://www.frontendmentor.io/) o [Codewars](https://www.codewars.com/). Estos sitios te permiten practicar la teoría en un entorno controlado.
- **Colabora en Proyectos de Código Abierto**: Contribuir a proyectos de código abierto es una excelente manera de aplicar la teoría en un entorno real.

### 3. **Desarrollar tus Propios Proyectos**

- **Idea y Planifica**: Piensa en un proyecto personal que te apasione, algo que resuelva un problema o sea útil para ti. Planifica las funcionalidades, el diseño y las tecnologías que vas a usar.
- **Itera y Mejora**: Empieza por una versión básica del proyecto, y luego agrega funcionalidades y mejoras con el tiempo. Esto te ayudará a mantener la motivación y aprender de manera progresiva.
- **Publica tu Trabajo**: Comparte tus proyectos en plataformas como GitHub y crea un portafolio en línea. Esto no solo te permitirá mostrar tu trabajo, sino que también te ayudará a recibir retroalimentación.

Si sigues este plan, lograrás alcanzar tus metas en React y estarás bien preparado para enfrentar desafíos más complejos en el desarrollo web. ¿Te gustaría empezar con un proyecto específico o profundizar en algún tema?

---

# Estructura

- Entorno de desarrollo
- Tutorial
- Proyectos
- Redux

Aquí te dejo una estructura para aprender React, abarcando desde la configuración del entorno de desarrollo hasta el uso de Redux:

### 1. **Entorno de Desarrollo**

- **Configuración Inicial**:
  - Instala [Node.js](https://nodejs.org/) y [npm](https://www.npmjs.com/).
  - Utiliza [Create React App](https://reactjs.org/docs/create-a-new-react-app.html) para configurar rápidamente un proyecto React:
    ```bash
    npx create-react-app my-app
    cd my-app
    npm start
    ```
- **Editor de Código**:
  - Usa [Visual Studio Code](https://code.visualstudio.com/). Instala extensiones útiles como **ESLint**, **Prettier** y **React Developer Tools**.
- **Control de Versiones**:
  - Configura un repositorio en GitHub para tu proyecto. Aprende a utilizar `git` para manejar el versionado.

### 2. **Tutorial**

- **Tutoriales Básicos**:
  - Sigue el [tutorial oficial de React](https://reactjs.org/tutorial/tutorial.html) para construir una aplicación sencilla de un juego de tres en raya (tic-tac-toe).
- **Videos y Cursos**:
  - Completa un curso completo de React en plataformas como [Udemy](https://www.udemy.com/), [Coursera](https://www.coursera.org/), o [freeCodeCamp](https://www.freecodecamp.org/learn/front-end-development-libraries/#react).
- **Documentación**:
  - Profundiza en la [documentación oficial de React](https://reactjs.org/docs/getting-started.html) para entender conceptos avanzados como Hooks, Context API y el manejo de formularios.

### 3. **Proyectos**

- **Proyecto 1: Lista de Tareas (To-Do List)**:
  - Crea una aplicación de lista de tareas para practicar componentes, estado y props.
- **Proyecto 2: Aplicación de Notas**:
  - Desarrolla una aplicación de notas con funcionalidades de CRUD (crear, leer, actualizar, eliminar).
- **Proyecto 3: Consumir API**:
  - Conecta tu aplicación a una API pública (por ejemplo, de clima o noticias) para practicar el manejo de datos asíncronos con `fetch` o `axios`.
- **Proyecto 4: Portafolio Personal**:
  - Diseña y desarrolla un portafolio personal usando React para mostrar tus proyectos y habilidades.

### 4. **Redux**

- **Conceptos Básicos**:
  - Aprende los fundamentos de Redux, incluyendo `store`, `actions`, `reducers`, y `dispatch`.
- **Integración con React**:
  - Aprende a conectar Redux con React usando `react-redux` para manejar el estado global de tu aplicación.
- **Tutoriales y Práctica**:
  - Sigue un tutorial práctico de Redux y aplica lo aprendido en un proyecto existente o nuevo.
- **Middleware y Herramientas Avanzadas**:
  - Explora middleware como `redux-thunk` o `redux-saga` para manejar operaciones asíncronas en Redux.

### **Siguientes Pasos**:

- Después de dominar estos temas, puedes explorar temas avanzados como testing con `Jest` y `React Testing Library`, optimización de rendimiento, y patrones avanzados de diseño en React.

Este plan te dará una base sólida en React, desde la configuración del entorno de desarrollo hasta el manejo avanzado del estado con Redux.

---

# Requisitos

- HTML
- CSS
- Javascript (ES6)
- Coding Addict - Javascript Nuggets

Dado que ya tienes conocimientos en HTML, CSS, y JavaScript (ES6), además de los recursos de _Coding Addict - JavaScript Nuggets_, estás bien preparado para adentrarte en React.

### Cómo tus conocimientos previos se relacionan con React:

1. **HTML y JSX**:

   - En React, utilizarás **JSX**, que es una extensión de JavaScript que permite escribir código similar a HTML dentro de tus archivos JavaScript. Tu conocimiento de HTML te ayudará a escribir y entender JSX fácilmente.

2. **CSS**:

   - React no cambia la forma en que se escribe CSS, pero te permite aplicar estilos de manera modular y específica a componentes. Puedes usar tu conocimiento de CSS para estilizar componentes o aprender a utilizar técnicas avanzadas como **CSS Modules** o **Styled Components**.

3. **JavaScript (ES6)**:

   - Con ES6, conceptos como **arrow functions**, **destructuring**, **spread/rest operators**, y **classes** son fundamentales en React. Tu conocimiento de ES6 te permitirá comprender mejor cómo se estructuran y funcionan los componentes en React.
   - React también se apoya en el uso de **promesas** y **async/await** para manejar operaciones asíncronas, como la obtención de datos desde una API.

4. **Coding Addict - JavaScript Nuggets**:
   - Este recurso es excelente para reforzar conceptos clave de JavaScript que son muy utilizados en React. Asegúrate de revisar módulos como funciones, arrays, objetos, y asíncronía, ya que son temas que usarás constantemente al construir aplicaciones React.

### Próximos Pasos:

Con estos requisitos bien dominados, puedes pasar directamente a configurar tu entorno de desarrollo y comenzar a trabajar en los tutoriales y proyectos en React. Si alguna vez te sientes bloqueado en un concepto de React, tu base sólida en JavaScript te ayudará a resolver esos problemas.

---

Para comenzar con React, la configuración adecuada del entorno de desarrollo es crucial. Aquí tienes una guía paso a paso para configurar todo lo necesario:

# **Configuración del Entorno de Desarrollo**

#### **a. Instalación de Node.js y npm**

- **Node.js**: Es necesario para ejecutar React y otras herramientas de desarrollo. Incluye `npm` (Node Package Manager), que se usa para instalar bibliotecas y herramientas.
- **Instalación**:
  1. Ve al sitio oficial de [Node.js](https://nodejs.org/) y descarga la versión LTS (Long Term Support).
  2. Sigue las instrucciones de instalación según tu sistema operativo.
  3. Verifica la instalación abriendo una terminal y ejecutando:
     ```bash
     node -v
     npm -v
     ```
     Esto mostrará las versiones instaladas de Node.js y npm.

#### **b. Configuración del Editor de Texto**

- **Visual Studio Code (VS Code)**: Es uno de los editores más populares para desarrollar en React.
  - **Instalación**: Descárgalo desde [Visual Studio Code](https://code.visualstudio.com/).
  - **Extensiones recomendadas**:
    - **ESLint**: Para mantener el código limpio y libre de errores.
    - **Prettier**: Para formatear automáticamente el código según las convenciones de estilo.
    - **Reactjs code snippets**: Proporciona fragmentos de código que facilitan la escritura de componentes y otros elementos de React.
    - **Live Server**: Si trabajas con HTML y CSS, esta extensión te permite ver cambios en tiempo real.

---

# **Conceptos Básicos de la Línea de Comandos**

- **Navegación en Directorios**:

  - `cd nombre-del-directorio`: Cambia al directorio especificado.
  - `ls` (macOS/Linux) o `dir` (Windows): Muestra una lista de archivos y directorios en el directorio actual.
  - `mkdir nombre-del-directorio`: Crea un nuevo directorio.

- **Manipulación de Archivos**:

  - `touch nombre-del-archivo`: Crea un nuevo archivo vacío (macOS/Linux).
  - `echo "" > nombre-del-archivo`: Crea un nuevo archivo vacío (Windows).
  - `rm nombre-del-archivo`: Elimina un archivo.

- **Ejecutar Scripts**:
  - Para ejecutar scripts Node.js o comandos npm, simplemente escribe `node nombre-del-script.js` o `npm run nombre-del-script`.

---

# **Conceptos Básicos de NPM**

- **`package.json`**:

  - Es el archivo que contiene la información sobre tu proyecto, incluidas las dependencias y los scripts que puedes ejecutar.
  - Puedes crear un `package.json` para un proyecto con el comando:
    ```bash
    npm init
    ```
    Este comando te guiará a través de un asistente para configurar el archivo.

- **Instalación de Paquetes**:

  - Para instalar una dependencia para tu proyecto, utiliza:
    ```bash
    npm install nombre-del-paquete
    ```
  - Para instalar una dependencia globalmente (disponible en todo el sistema):
    ```bash
    npm install -g nombre-del-paquete
    ```

- **Scripts**:
  - Puedes definir scripts en el `package.json` que se ejecutan con `npm run nombre-del-script`. Ejemplo:
    ```json
    {
      "scripts": {
        "start": "react-scripts start",
        "build": "react-scripts build"
      }
    }
    ```

---

# **Create-React-App**

**Create React App** es una herramienta que te permite configurar rápidamente un proyecto React sin necesidad de preocuparte por la configuración inicial.

#### **Instalación de Create-React-App**

- Para instalar Create React App globalmente en tu sistema, ejecuta:
  ```bash
  npm install -g create-react-app
  ```

#### **Crear un Proyecto React**

- Después de instalar `create-react-app`, puedes crear un nuevo proyecto React ejecutando:
  ```bash
  npx create-react-app nombre-del-proyecto
  ```
  - `npx` es una herramienta que ejecuta paquetes de npm sin necesidad de instalarlos globalmente.
  - Esto generará una estructura de carpetas y archivos listos para empezar a desarrollar en React.

#### **Ejecutar el Proyecto**

- Una vez creado el proyecto, navega al directorio del proyecto:
  ```bash
  cd nombre-del-proyecto
  ```
- Inicia el servidor de desarrollo con:
  ```bash
  npm start
  ```
  Esto abrirá automáticamente tu proyecto en el navegador en `http://localhost:3000/`.

### Resumen

Ahora tienes todo lo que necesitas para comenzar a trabajar con React. Si sigues estos pasos, estarás bien encaminado para crear y desarrollar aplicaciones React.

---

Vamos a ver cómo estructurar las carpetas en un proyecto React, cómo mantener un texto estándar limpio en tu código, y cómo crear tu primer componente en React.

---

# **Estructura de Carpetas en un Proyecto React**

Cuando creas un proyecto con **Create React App**, obtienes una estructura de carpetas predeterminada como esta:

```
my-app/
├── node_modules/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── ...
├── src/
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   └── ...
├── .gitignore
├── package.json
└── README.md
```

#### **Explicación de Carpetas y Archivos Importantes**:

- **`node_modules/`**: Contiene todas las dependencias de npm instaladas para tu proyecto.
- **`public/`**:
  - **`index.html`**: El archivo HTML principal. Todo tu proyecto React se inyecta en este archivo. Aquí es donde React renderiza la aplicación.
  - **`favicon.ico`**: El ícono de la página web que aparece en la pestaña del navegador.
- **`src/`**:
  - **`index.js`**: El punto de entrada principal de la aplicación React. Aquí es donde se renderiza el componente `App` dentro del elemento con el ID `root` en `index.html`.
  - **`App.js`**: El componente principal de la aplicación, donde puedes empezar a agregar tus propios componentes.
  - **`App.css`**: Estilos asociados al componente `App.js`.
  - **`index.css`**: Estilos globales para tu aplicación.

#### **Estructura de Carpetas Mejorada**:

A medida que tu aplicación crece, puedes optar por organizar mejor tu código. Aquí hay una estructura de carpetas mejorada:

```
src/
├── assets/           # Imágenes, fuentes, etc.
│   ├── images/
│   └── fonts/
├── components/       # Componentes reutilizables
│   ├── Header.js
│   ├── Footer.js
│   └── Button.js
├── pages/            # Componentes que representan páginas enteras
│   ├── Home.js
│   └── About.js
├── styles/           # Archivos CSS o Sass
│   ├── App.css
│   ├── Header.css
│   └── variables.css
├── utils/            # Funciones o utilidades
│   ├── helpers.js
│   └── api.js
├── App.js
├── index.js
└── index.css
```

Esta estructura te ayudará a mantener tu código organizado y escalable a medida que tu aplicación crece.

---

# **Texto Estándar Limpio**

Mantener un código limpio y legible es crucial en cualquier proyecto de desarrollo. Aquí hay algunas prácticas recomendadas:

- **Consistencia en el Formato**:

  - Usa una herramienta como **Prettier** para formatear tu código automáticamente según las convenciones de estilo.
  - Configura tu editor de texto para formatear automáticamente al guardar.

- **Comentarios**:

  - Usa comentarios para explicar el **por qué** de las decisiones de código, no el **cómo**. Mantén los comentarios cortos y relevantes.

- **Nombres Significativos**:

  - Usa nombres claros y descriptivos para tus variables, funciones y componentes. Por ejemplo, en lugar de `handleClick`, usa `handleUserLogin`.

- **Descomponer Componentes**:

  - Si un componente se vuelve demasiado grande o complejo, divídelo en componentes más pequeños y reutilizables.

- **ESLint**:
  - Configura **ESLint** para identificar errores y mantener la calidad del código.

---

# **Crear tu Primer Componente en React**

Un componente en React es básicamente una función o clase que devuelve un elemento React que describe cómo debería verse una parte de la interfaz de usuario.

#### **Ejemplo de un Componente Funcional Simple**:

1. **Crear un archivo para el componente**:

   - Dentro de la carpeta `src/components/`, crea un archivo llamado `HelloWorld.js`.

2. **Escribir el componente**:

   ```jsx
   // src/components/HelloWorld.js
   import React from "react";

   function HelloWorld() {
     return (
       <div>
         <h1>Hello, World!</h1>
         <p>This is my first React component!</p>
       </div>
     );
   }

   export default HelloWorld;
   ```

3. **Usar el componente en `App.js`**:

   - Ahora, importa y usa tu componente en `App.js`:

   ```jsx
   // src/App.js
   import React from "react";
   import HelloWorld from "./components/HelloWorld";

   function App() {
     return (
       <div className="App">
         <HelloWorld />
       </div>
     );
   }

   export default App;
   ```

4. **Ver el resultado**:
   - Guarda todo y asegúrate de que tu servidor de desarrollo esté corriendo (`npm start`). Deberías ver "Hello, World!" en la pantalla.

### **Conclusión**

Con esta estructura de carpetas, prácticas de código limpio, y tu primer componente funcional, estás listo para empezar a construir tu aplicación en React de manera organizada y eficiente.

---
