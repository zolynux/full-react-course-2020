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

# Primer componente en detalle

Crear tu primer componente en React es un paso fundamental para empezar a construir aplicaciones interactivas. Vamos a desglosar el proceso paso a paso, detallando cada aspecto del componente.

### **1. ¿Qué es un Componente en React?**

En React, un componente es una pieza reutilizable de la interfaz de usuario. Puede ser tan simple como un botón o tan complejo como una página entera. Los componentes en React se pueden definir como funciones o clases, pero la tendencia actual es utilizar **componentes funcionales** debido a su simplicidad y la integración con **React Hooks**.

### **2. Crear un Componente Funcional Simple**

Vamos a crear un componente funcional llamado `HelloWorld` que muestra un mensaje de bienvenida.

#### **a. Paso 1: Crear el Archivo del Componente**

Primero, dentro de la carpeta `src/components/`, crea un nuevo archivo llamado `HelloWorld.js`. Esto ayuda a mantener tu proyecto organizado y hace que sea fácil encontrar y reutilizar componentes.

#### **b. Paso 2: Escribir el Componente**

En el archivo `HelloWorld.js`, vamos a escribir un componente React. Un componente funcional es básicamente una función de JavaScript que retorna un elemento React (que se parece a HTML pero es JSX).

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

**Desglose del Código:**

- **`import React from 'react';`**: Importa la librería de React. Esto es necesario porque JSX se transforma en llamadas a `React.createElement()`, y para ello necesitas React en el ámbito.
- **`function HelloWorld()`**: Define una función JavaScript estándar. Este es el componente en sí. Los componentes en React siempre deben empezar con mayúscula para diferenciarlos de los elementos HTML nativos.
- **`return (...)`**: Todo lo que esta función retorna es lo que se renderizará en la interfaz de usuario. En este caso, el componente retorna un `div` que contiene un título (`h1`) y un párrafo (`p`).
- **`export default HelloWorld;`**: Exporta el componente para que pueda ser importado y utilizado en otros archivos.

#### **c. Paso 3: Importar y Usar el Componente en `App.js`**

Ahora que hemos creado el componente, necesitamos usarlo en nuestra aplicación principal.

1. Abre `App.js`, que se encuentra en la carpeta `src/`.

2. Importa el componente `HelloWorld` en la parte superior del archivo:

   ```jsx
   import React from "react";
   import HelloWorld from "./components/HelloWorld";
   ```

3. Usa el componente dentro de la función `App`:

   ```jsx
   function App() {
     return (
       <div className="App">
         <HelloWorld />
       </div>
     );
   }

   export default App;
   ```

**Explicación:**

- **`<HelloWorld />`**: Esta es la sintaxis JSX para incluir tu componente `HelloWorld` dentro de la salida de la función `App`. Cuando React renderiza tu aplicación, reemplazará esta línea con el contenido del componente `HelloWorld`.

#### **d. Paso 4: Ejecutar la Aplicación**

- Asegúrate de que tu servidor de desarrollo esté corriendo (puedes iniciarlo con `npm start`).
- Abre tu navegador y ve a `http://localhost:3000/`.
- Deberías ver el mensaje "Hello, World!" seguido de "This is my first React component!".

### **3. Personalizar y Expandir el Componente**

Ahora que tienes un componente básico, puedes personalizarlo y expandirlo. Aquí hay algunas ideas:

- **Añadir Props**: Las props (abreviatura de "properties") permiten pasar datos a los componentes para hacerlos más dinámicos.

  ```jsx
  // src/components/HelloWorld.js
  function HelloWorld({ name }) {
    return (
      <div>
        <h1>Hello, {name}!</h1>
        <p>This is my first React component!</p>
      </div>
    );
  }

  export default HelloWorld;
  ```

  Ahora puedes pasar una prop llamada `name` cuando uses el componente:

  ```jsx
  // src/App.js
  function App() {
    return (
      <div className="App">
        <HelloWorld name="John Doe" />
      </div>
    );
  }
  ```

  Esto mostrará "Hello, John Doe!" en la pantalla.

- **Añadir Estilos**: Puedes añadir estilos directamente en el componente, utilizando clases CSS o incluso `inline styles`.

### **4. Conceptos Clave del Componente**

- **JSX**: Permite escribir HTML dentro de JavaScript. Aunque parece HTML, es sintaxis JSX, que se convierte en llamadas a `React.createElement`.
- **Props**: Son los argumentos que se pasan a los componentes. Permiten que un componente sea reutilizable y personalizado.
- **Export/Import**: Permiten que los componentes sean modulares y reutilizables. `export default` permite exportar un solo valor (en este caso, el componente `HelloWorld`), mientras que `import` trae ese componente a otro archivo.

### **Conclusión**

¡Felicidades! Has creado tu primer componente en React, lo has importado en tu aplicación principal, y has visto cómo hacerlo más dinámico con props. Esto es solo el comienzo, pero dominar estos conceptos te preparará para crear aplicaciones React más complejas y poderosas.

---

# JSX Rules (JSX Normas)

JSX (JavaScript XML) es una extensión de JavaScript que permite escribir estructuras similares a HTML en archivos JavaScript. Es uno de los conceptos clave en React, y tiene ciertas reglas que debes seguir para escribir un código limpio y sin errores. A continuación, te presento las principales normas y mejores prácticas al usar JSX.

### **1. Solo un Elemento Principal**

Cada componente JSX debe retornar un solo elemento principal. Si necesitas devolver múltiples elementos, puedes envolverlos en un contenedor como un `div` o usar `React.Fragment` (o su versión abreviada `<>`).

**Correcto:**

```jsx
function MyComponent() {
  return (
    <div>
      <h1>Title</h1>
      <p>Description</p>
    </div>
  );
}
```

**Con Fragmento:**

```jsx
function MyComponent() {
  return (
    <>
      <h1>Title</h1>
      <p>Description</p>
    </>
  );
}
```

**Incorrecto:**

```jsx
function MyComponent() {
  return (
    <h1>Title</h1>
    <p>Description</p>
  );
}
```

### **2. Las Etiquetas Deben Cerrarse**

En JSX, todas las etiquetas deben cerrarse, incluso las etiquetas que en HTML son auto-contenidas, como `<img />`, `<input />`, `<br />`, etc.

**Correcto:**

```jsx
function MyComponent() {
  return (
    <div>
      <img src="image.jpg" alt="example" />
      <input type="text" />
      <br />
    </div>
  );
}
```

**Incorrecto:**

```jsx
function MyComponent() {
  return (
    <div>
      <img src="image.jpg" alt="example">
      <input type="text">
      <br>
    </div>
  );
}
```

### **3. Los Atributos se Escriben en CamelCase**

En JSX, los atributos que normalmente se escriben en minúsculas en HTML, se escriben en `camelCase`. Por ejemplo, `class` se convierte en `className`, y `onclick` se convierte en `onClick`.

**Correcto:**

```jsx
function MyComponent() {
  return (
    <button className="btn" onClick={handleClick}>
      Click me
    </button>
  );
}
```

**Incorrecto:**

```jsx
function MyComponent() {
  return (
    <button class="btn" onclick={handleClick}>
      Click me
    </button>
  );
}
```

### **4. `className` en Lugar de `class`**

Dado que `class` es una palabra reservada en JavaScript, en JSX se usa `className` para asignar clases CSS.

**Correcto:**

```jsx
function MyComponent() {
  return (
    <div className="container">
      <h1 className="title">Welcome</h1>
    </div>
  );
}
```

**Incorrecto:**

```jsx
function MyComponent() {
  return (
    <div class="container">
      <h1 class="title">Welcome</h1>
    </div>
  );
}
```

### **5. Expresiones en JSX**

Puedes incluir expresiones de JavaScript dentro de JSX usando llaves `{}`. Esto es útil para mostrar variables, llamar funciones o realizar operaciones.

**Correcto:**

```jsx
function MyComponent({ name }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>{2 + 2}</p>
      <p>{name.length > 5 ? "Long name" : "Short name"}</p>
    </div>
  );
}
```

**Incorrecto:**

```jsx
function MyComponent({ name }) {
  return (
    <div>
      <h1>Hello, name!</h1>
      <p>2 + 2</p>
      <p>{name.length > 5 ? "Long name" : "Short name"}</p>
    </div>
  );
}
```

### **6. Propiedades Booleanas**

En JSX, si un atributo es booleano (como `disabled`, `checked`, `readOnly`), no necesitas asignarle `true`. Simplemente escribe el nombre del atributo.

**Correcto:**

```jsx
function MyComponent() {
  return <input type="checkbox" checked />;
}
```

**Incorrecto:**

```jsx
function MyComponent() {
  return <input type="checkbox" checked="true" />;
}
```

### **7. Estilos Inline**

En JSX, los estilos inline se pasan como un objeto, donde los nombres de las propiedades CSS están en `camelCase`.

**Correcto:**

```jsx
function MyComponent() {
  const style = {
    backgroundColor: "blue",
    color: "white",
  };
  return <div style={style}>Styled Component</div>;
}
```

**Incorrecto:**

```jsx
function MyComponent() {
  return (
    <div style="background-color: blue; color: white;">Styled Component</div>
  );
}
```

### **8. Evitar la Inyección de HTML**

Aunque puedes usar `dangerouslySetInnerHTML` para inyectar HTML directamente en JSX, esto es peligroso y debe evitarse a menos que sea absolutamente necesario.

**Uso con Precaución:**

```jsx
function MyComponent() {
  return <div dangerouslySetInnerHTML={{ __html: "<p>Injected HTML</p>" }} />;
}
```

**Evitar cuando sea posible:**
En lugar de inyectar HTML, intenta crear elementos JSX directamente.

### **9. Nombres de Componentes con Mayúscula Inicial**

Los nombres de los componentes en JSX deben comenzar con una letra mayúscula. Esto diferencia a los componentes personalizados de los elementos HTML nativos.

**Correcto:**

```jsx
function MyComponent() {
  return <div>Content</div>;
}

function App() {
  return <MyComponent />;
}
```

**Incorrecto:**

```jsx
function myComponent() {
  return <div>Content</div>;
}

function App() {
  return <myComponent />;
}
```

### **10. Comentarios en JSX**

Puedes añadir comentarios en JSX usando llaves `{}` y `/* comentario */`.

**Ejemplo:**

```jsx
function MyComponent() {
  return (
    <div>
      {/* Este es un comentario en JSX */}
      <h1>Hello, World!</h1>
    </div>
  );
}
```

### **Conclusión**

Estas normas de JSX te ayudarán a escribir código React de manera más efectiva y a evitar errores comunes. JSX hace que la creación de interfaces de usuario en React sea más intuitiva, pero es esencial seguir estas reglas para asegurarte de que tu código sea limpio y fácil de mantener.

---

# Componentes anidados, herramientas React

### **Componentes Anidados en React**

Los componentes anidados son fundamentales en React para construir interfaces de usuario complejas y organizadas. La idea es descomponer una interfaz grande en pequeños componentes reutilizables que se pueden combinar y anidar dentro de otros componentes.

#### **1. Concepto de Componentes Anidados**

Un componente anidado es simplemente un componente que se renderiza dentro de otro componente. Por ejemplo, puedes tener un componente principal como `App`, y dentro de `App`, puedes anidar componentes más pequeños como `Header`, `Footer`, y `MainContent`.

#### **2. Ejemplo Básico de Componentes Anidados**

Supongamos que tienes una aplicación simple con un encabezado, un contenido principal y un pie de página. Puedes estructurar tu aplicación usando componentes anidados.

1. **Crear los Componentes Individuales**

   - **`Header.js`**:

     ```jsx
     import React from "react";

     function Header() {
       return (
         <header>
           <h1>My Website</h1>
           <nav>
             <ul>
               <li>Home</li>
               <li>About</li>
               <li>Contact</li>
             </ul>
           </nav>
         </header>
       );
     }

     export default Header;
     ```

   - **`MainContent.js`**:

     ```jsx
     import React from "react";

     function MainContent() {
       return (
         <main>
           <h2>Welcome to my website</h2>
           <p>This is where the main content goes.</p>
         </main>
       );
     }

     export default MainContent;
     ```

   - **`Footer.js`**:

     ```jsx
     import React from "react";

     function Footer() {
       return (
         <footer>
           <p>&copy; 2024 My Website</p>
         </footer>
       );
     }

     export default Footer;
     ```

2. **Anidar los Componentes en `App.js`**

   Ahora, importa y utiliza estos componentes dentro de `App.js`:

   ```jsx
   import React from "react";
   import Header from "./components/Header";
   import MainContent from "./components/MainContent";
   import Footer from "./components/Footer";

   function App() {
     return (
       <div className="App">
         <Header />
         <MainContent />
         <Footer />
       </div>
     );
   }

   export default App;
   ```

3. **Estructura de la Carpeta**

   La estructura de carpetas podría ser algo así:

   ```
   src/
   ├── components/
   │   ├── Header.js
   │   ├── MainContent.js
   │   └── Footer.js
   ├── App.js
   └── index.js
   ```

4. **Resultado**

   Cuando corras la aplicación (`npm start`), verás que la página muestra un encabezado, un contenido principal y un pie de página, todos organizados como componentes anidados.

#### **3. Comunicación entre Componentes**

Cuando tienes componentes anidados, es común que necesiten comunicarse entre ellos. Esto se puede hacer a través de **props**:

- **Pasar Datos desde un Componente Padre a un Componente Hijo**:

  ```jsx
  function ParentComponent() {
    const data = "Hello from Parent";

    return (
      <div>
        <ChildComponent message={data} />
      </div>
    );
  }

  function ChildComponent({ message }) {
    return <p>{message}</p>;
  }
  ```

- **Pasar Funciones desde el Padre al Hijo** para manejar eventos:

  ```jsx
  function ParentComponent() {
    const handleClick = () => {
      alert("Button clicked!");
    };

    return (
      <div>
        <ChildComponent onClick={handleClick} />
      </div>
    );
  }

  function ChildComponent({ onClick }) {
    return <button onClick={onClick}>Click Me</button>;
  }
  ```

### **Herramientas para Desarrollar en React**

Para ser eficiente en el desarrollo de aplicaciones React, hay varias herramientas y extensiones que pueden facilitarte la vida:

#### **1. Create React App**

- **Create React App** es la herramienta más común para iniciar un nuevo proyecto React sin configurar manualmente Webpack, Babel, etc.
- Ejecuta el siguiente comando para crear una nueva aplicación React:
  ```bash
  npx create-react-app my-app
  cd my-app
  npm start
  ```

#### **2. React Developer Tools**

- Una extensión de navegador que te permite inspeccionar la jerarquía de componentes de tu aplicación React, ver el estado y las props de cada componente, y realizar un debug más efectivo.
- **Instalación**:
  - [Chrome Extension](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
  - [Firefox Add-on](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)

#### **3. ESLint y Prettier**

- **ESLint**: Linter para JavaScript que te ayuda a mantener un código consistente y libre de errores comunes. Configura ESLint para React con el siguiente comando:

  ```bash
  npx eslint --init
  ```

  Luego selecciona la opción que se adapte a tu proyecto React.

- **Prettier**: Herramienta para formatear automáticamente tu código, asegurando que sigue un estilo consistente.
  - Instala Prettier:
    ```bash
    npm install --save-dev prettier
    ```
  - Integra con ESLint para un flujo de trabajo sin fisuras.

#### **4. Redux DevTools**

- Si estás usando Redux para la gestión del estado, **Redux DevTools** es una herramienta esencial para depurar y seguir el estado de la aplicación.
- [Redux DevTools Extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)

#### **5. Visual Studio Code (VS Code)**

- **Visual Studio Code** es uno de los editores más populares para desarrollar en React. Tiene soporte para JSX, integración con Git, y una gran cantidad de extensiones útiles.
- **Extensiones Recomendadas para React en VS Code**:
  - **ES7+ React/Redux/React-Native snippets**: Proporciona snippets de código para React y Redux.
  - **Prettier - Code formatter**: Para formatear automáticamente tu código.
  - **Bracket Pair Colorizer**: Para una mejor visualización de los corchetes y paréntesis anidados.
  - **React PropTypes Intellisense**: Proporciona sugerencias de autocompletado para PropTypes en React.

#### **6. React Testing Library**

- Para realizar pruebas en tus componentes React, **React Testing Library** es una herramienta que promueve buenas prácticas, como probar la UI de la manera en que un usuario la utilizaría.
- Instala la biblioteca:
  ```bash
  npm install --save-dev @testing-library/react
  ```

#### **7. Styled Components**

- **Styled Components** permite escribir estilos CSS dentro de tus componentes React utilizando una sintaxis JavaScript. Esto facilita la creación de componentes estilizados y la gestión de estilos.
- Instala Styled Components:
  ```bash
  npm install --save styled-components
  ```

### **Conclusión**

Los componentes anidados te permiten construir aplicaciones React de manera modular y organizada, mientras que las herramientas adecuadas facilitan el proceso de desarrollo, depuración, y mantenimiento de la aplicación. Integrar estas prácticas y herramientas en tu flujo de trabajo hará que desarrollar en React sea más eficiente y agradable.

---

# Proyecto de minilibro en React

Crear un proyecto de "minilibro" en React es una excelente manera de poner en práctica tus conocimientos y habilidades en React, especialmente en cuanto a la estructura de componentes, manejo de estado, y navegación. A continuación, te guiaré a través de un ejemplo básico de cómo podrías estructurar y desarrollar este proyecto.

### **1. Estructura del Proyecto**

Antes de empezar, es útil tener una visión clara de la estructura de tu proyecto y los componentes que vas a necesitar.

#### **Estructura de Componentes**

- **App.js**: Componente principal donde se manejará la lógica de la aplicación.
- **Header.js**: Componente para el encabezado del libro.
- **TableOfContents.js**: Componente para mostrar el índice del libro.
- **Chapter.js**: Componente para mostrar el contenido de un capítulo.
- **Footer.js**: Componente para la navegación entre capítulos y otras acciones.

#### **Estructura de Carpetas**

Puedes organizar tu proyecto de la siguiente manera:

```
src/
├── components/
│   ├── Header.js
│   ├── TableOfContents.js
│   ├── Chapter.js
│   └── Footer.js
├── data/
│   └── chapters.js
├── App.js
└── index.js
```

### **2. Inicializar el Proyecto**

Primero, crea tu proyecto de React utilizando `Create React App`.

```bash
npx create-react-app minilibro
cd minilibro
```

### **3. Crear los Componentes**

#### **a. `Header.js`**

Este componente mostrará el título del libro.

```jsx
import React from "react";

function Header() {
  return (
    <header>
      <h1>Mi Minilibro React</h1>
    </header>
  );
}

export default Header;
```

#### **b. `TableOfContents.js`**

Este componente mostrará una lista de capítulos.

```jsx
import React from "react";

function TableOfContents({ chapters, onSelectChapter }) {
  return (
    <nav>
      <h2>Índice</h2>
      <ul>
        {chapters.map((chapter, index) => (
          <li key={index} onClick={() => onSelectChapter(index)}>
            {chapter.title}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default TableOfContents;
```

#### **c. `Chapter.js`**

Este componente mostrará el contenido del capítulo seleccionado.

```jsx
import React from "react";

function Chapter({ chapter }) {
  return (
    <div>
      <h2>{chapter.title}</h2>
      <p>{chapter.content}</p>
    </div>
  );
}

export default Chapter;
```

#### **d. `Footer.js`**

Este componente manejará la navegación entre capítulos.

```jsx
import React from "react";

function Footer({ currentChapter, totalChapters, onPrev, onNext }) {
  return (
    <footer>
      <button onClick={onPrev} disabled={currentChapter === 0}>
        Capítulo Anterior
      </button>
      <button onClick={onNext} disabled={currentChapter === totalChapters - 1}>
        Capítulo Siguiente
      </button>
    </footer>
  );
}

export default Footer;
```

### **4. Crear los Datos del Libro**

Crea un archivo `chapters.js` en la carpeta `data/` para almacenar los datos del libro.

```jsx
export const chapters = [
  {
    title: "Capítulo 1: Introducción a React",
    content:
      "React es una biblioteca de JavaScript para construir interfaces de usuario...",
  },
  {
    title: "Capítulo 2: Componentes",
    content:
      "En React, un componente es una pieza reutilizable de la interfaz de usuario...",
  },
  {
    title: "Capítulo 3: Estado y Props",
    content:
      "El estado y las props son conceptos clave para manejar datos en React...",
  },
];
```

### **5. Integrar Todo en `App.js`**

En `App.js`, integra todos los componentes y maneja la lógica del estado y la navegación entre capítulos.

```jsx
import React, { useState } from "react";
import Header from "./components/Header";
import TableOfContents from "./components/TableOfContents";
import Chapter from "./components/Chapter";
import Footer from "./components/Footer";
import { chapters } from "./data/chapters";

function App() {
  const [currentChapter, setCurrentChapter] = useState(0);

  const handleSelectChapter = (index) => {
    setCurrentChapter(index);
  };

  const handlePrevChapter = () => {
    setCurrentChapter((prev) => Math.max(prev - 1, 0));
  };

  const handleNextChapter = () => {
    setCurrentChapter((prev) => Math.min(prev + 1, chapters.length - 1));
  };

  return (
    <div className="App">
      <Header />
      <TableOfContents
        chapters={chapters}
        onSelectChapter={handleSelectChapter}
      />
      <Chapter chapter={chapters[currentChapter]} />
      <Footer
        currentChapter={currentChapter}
        totalChapters={chapters.length}
        onPrev={handlePrevChapter}
        onNext={handleNextChapter}
      />
    </div>
  );
}

export default App;
```

### **6. Ejecutar la Aplicación**

Finalmente, ejecuta tu aplicación:

```bash
npm start
```

Tu navegador debería abrir `http://localhost:3000/` y mostrar tu minilibro con un título, un índice, y la capacidad de navegar entre capítulos.

### **7. Mejoras Opcionales**

- **Estilos CSS**: Añade estilos para mejorar la apariencia del libro.
- **Animaciones**: Usa librerías como `react-transition-group` para añadir transiciones suaves entre capítulos.
- **LocalStorage**: Guarda el progreso del lector usando `localStorage`, para que al recargar la página, el lector vuelva al último capítulo leído.
- **Comentarios y Notas**: Permite que el lector agregue notas o comentarios en cada capítulo.

### **Conclusión**

Este proyecto de minilibro es un ejemplo práctico que te ayudará a aplicar los conceptos fundamentales de React, como el manejo de estado, la composición de componentes, y la navegación. A medida que te sientas más cómodo, puedes expandir la funcionalidad y agregar características más avanzadas.

---

# CSS Básicos en React

Aplicar CSS en React es esencial para estilizar tus componentes y hacer que tu aplicación luzca bien. A continuación, te explico los conceptos básicos de CSS en React y las diferentes maneras en las que puedes aplicar estilos a tus componentes.

### **1. Estilos en Línea (Inline Styles)**

En React, puedes aplicar estilos directamente a un elemento usando la propiedad `style`. Este enfoque es útil para estilos rápidos o dinámicos.

- **Ejemplo**:

  ```jsx
  import React from "react";

  function InlineStyleExample() {
    const divStyle = {
      color: "blue",
      backgroundColor: "lightgray",
      padding: "10px",
      borderRadius: "5px",
    };

    return <div style={divStyle}>Este div está estilizado en línea.</div>;
  }

  export default InlineStyleExample;
  ```

- **Nota**: Las propiedades CSS en React se escriben en camelCase en lugar de kebab-case (`backgroundColor` en lugar de `background-color`).

### **2. Archivos CSS Separados**

Otra forma común de aplicar estilos en React es mediante archivos CSS externos. Este enfoque es similar al desarrollo web tradicional.

- **Paso 1**: Crea un archivo CSS.

  - **`styles.css`**:

    ```css
    .container {
      color: white;
      background-color: navy;
      padding: 20px;
      border-radius: 10px;
    }

    .title {
      font-size: 24px;
      margin-bottom: 10px;
    }

    .paragraph {
      font-size: 16px;
    }
    ```

- **Paso 2**: Importa y utiliza el archivo CSS en tu componente.

  - **Componente**:

    ```jsx
    import React from "react";
    import "./styles.css";

    function CSSFileExample() {
      return (
        <div className="container">
          <h1 className="title">Título Estilizado</h1>
          <p className="paragraph">
            Este es un párrafo estilizado usando un archivo CSS externo.
          </p>
        </div>
      );
    }

    export default CSSFileExample;
    ```

### **3. CSS Modules**

Los CSS Modules son una forma más avanzada de aplicar estilos en React. Este enfoque te permite usar estilos a nivel de componente sin preocuparte por los conflictos de nombres de clases, ya que cada clase es automáticamente escoped (limitada al componente).

- **Paso 1**: Crea un archivo CSS con el sufijo `.module.css`.

  - **`Button.module.css`**:

    ```css
    .button {
      background-color: green;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    .button:hover {
      background-color: darkgreen;
    }
    ```

- **Paso 2**: Importa y utiliza las clases del CSS Module en tu componente.

  - **Componente**:

    ```jsx
    import React from "react";
    import styles from "./Button.module.css";

    function Button() {
      return <button className={styles.button}>Hacer clic</button>;
    }

    export default Button;
    ```

- **Nota**: Al usar CSS Modules, las clases CSS se convierten en propiedades del objeto `styles`, y puedes acceder a ellas usando `styles.className`.

### **4. Styled Components**

Styled Components es una librería que te permite escribir CSS dentro de tus componentes usando una sintaxis especial de JavaScript. Este enfoque es muy popular en la comunidad React por su capacidad de manejar estilos dinámicos y su integración con la lógica del componente.

- **Instalación**:

  ```bash
  npm install styled-components
  ```

- **Ejemplo**:

  ```jsx
  import React from "react";
  import styled from "styled-components";

  const Button = styled.button`
    background-color: green;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: darkgreen;
    }
  `;

  function StyledComponentExample() {
    return <Button>Hacer clic</Button>;
  }

  export default StyledComponentExample;
  ```

- **Ventajas**:
  - Estilos dinámicos basados en props.
  - No hay riesgo de conflictos de nombres de clases.
  - Estilos encapsulados en el componente.

### **5. Usar Preprocesadores CSS (Sass, Less)**

Si prefieres usar preprocesadores CSS como Sass o Less, React también los soporta. `Create React App` tiene soporte integrado para Sass, por lo que puedes usarlo sin configuración adicional.

- **Instalación de Sass**:

  ```bash
  npm install sass
  ```

- **Ejemplo usando Sass**:

  - **`styles.scss`**:

    ```scss
    $primary-color: navy;
    $secondary-color: lightgray;

    .container {
      background-color: $primary-color;
      color: $secondary-color;
      padding: 20px;
      border-radius: 10px;

      h1 {
        font-size: 24px;
      }

      p {
        font-size: 16px;
      }
    }
    ```

  - **Componente**:

    ```jsx
    import React from "react";
    import "./styles.scss";

    function SassExample() {
      return (
        <div className="container">
          <h1>Título con Sass</h1>
          <p>Este es un párrafo estilizado usando Sass.</p>
        </div>
      );
    }

    export default SassExample;
    ```

### **Conclusión**

Cada uno de estos métodos para aplicar CSS en React tiene sus propias ventajas y casos de uso. Para pequeños proyectos, los estilos en línea o los archivos CSS pueden ser suficientes, mientras que para aplicaciones más grandes, los CSS Modules o Styled Components pueden ofrecer una mayor flexibilidad y modularidad.

---

# JSX CSS

En React, JSX es la sintaxis que te permite escribir HTML dentro de JavaScript. Aunque no es una extensión directa de CSS, JSX facilita la inclusión de estilos CSS en tus componentes. Aquí te explico cómo puedes usar CSS con JSX en React, destacando las diferentes maneras de aplicar estilos.

### **1. Estilos en Línea (Inline Styles) en JSX**

Con JSX, puedes aplicar estilos en línea directamente a los elementos HTML utilizando la propiedad `style`. Estos estilos se pasan como un objeto de JavaScript.

#### **Ejemplo**:

```jsx
import React from "react";

function InlineStyleExample() {
  const divStyle = {
    color: "white",
    backgroundColor: "blue",
    padding: "20px",
    borderRadius: "8px",
  };

  return (
    <div style={divStyle}>Este div está estilizado en línea usando JSX.</div>
  );
}

export default InlineStyleExample;
```

#### **Características**:

- **Propiedades CSS en camelCase**: Las propiedades CSS que normalmente se escriben en kebab-case (`background-color`) se escriben en camelCase (`backgroundColor`) cuando se usan en objetos de estilo en línea.
- **Valores como cadenas**: Los valores numéricos (excepto para `z-index`, opacidad, etc.) se interpretan como píxeles, pero debes escribir otros valores como cadenas (`"10px"`, `"2rem"`).

### **2. Clases CSS en JSX**

Una forma común de aplicar estilos es usar clases CSS que definiste en un archivo CSS separado. JSX utiliza la propiedad `className` (en lugar de `class`, que es una palabra reservada en JavaScript) para asignar clases CSS a un elemento.

#### **Ejemplo**:

1. **Archivo CSS** (`styles.css`):

```css
.container {
  color: white;
  background-color: blue;
  padding: 20px;
  border-radius: 8px;
}

.title {
  font-size: 24px;
  font-weight: bold;
}
```

2. **Componente React** (`App.js`):

```jsx
import React from "react";
import "./styles.css";

function ClassNameExample() {
  return (
    <div className="container">
      <h1 className="title">Título Estilizado con CSS</h1>
      <p>Este párrafo está estilizado usando una clase CSS.</p>
    </div>
  );
}

export default ClassNameExample;
```

#### **Características**:

- **`className` en lugar de `class`**: Usa `className` en JSX para asignar una clase CSS a un elemento.
- **Importación de archivos CSS**: Asegúrate de importar el archivo CSS correspondiente en el componente donde lo necesites.

### **3. Estilos Dinámicos con Condiciones**

Puedes cambiar las clases o los estilos en línea dinámicamente usando expresiones dentro de JSX. Esto es útil cuando necesitas aplicar estilos condicionales.

#### **Ejemplo usando `className` dinámico**:

```jsx
import React, { useState } from "react";
import "./styles.css";

function DynamicClassNameExample() {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <button onClick={toggleActive}>
        {isActive ? "Desactivar" : "Activar"} Estilo
      </button>
      <div className={isActive ? "container active" : "container"}>
        Este div cambia su clase CSS dinámicamente.
      </div>
    </div>
  );
}

export default DynamicClassNameExample;
```

- **Archivo CSS** (`styles.css`):

  ```css
  .container {
    color: white;
    background-color: blue;
    padding: 20px;
    border-radius: 8px;
    transition: background-color 0.3s;
  }

  .active {
    background-color: green;
  }
  ```

#### **Características**:

- **Expresiones de JavaScript en JSX**: Puedes usar expresiones de JavaScript (como operadores ternarios) para definir clases CSS dinámicamente.
- **Concatenación de clases**: Puedes concatenar múltiples clases usando template literals o la librería `classnames`.

### **4. CSS Modules**

Los CSS Modules permiten definir estilos que están scoped localmente al componente, evitando conflictos de nombres de clases.

#### **Ejemplo**:

1. **Archivo CSS Module** (`Button.module.css`):

```css
.button {
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.button:hover {
  background-color: darkblue;
}
```

2. **Componente React** (`Button.js`):

```jsx
import React from "react";
import styles from "./Button.module.css";

function Button() {
  return <button className={styles.button}>Hacer clic</button>;
}

export default Button;
```

#### **Características**:

- **Scope de clases**: Las clases definidas en un CSS Module son locales por defecto. No afectan ni son afectadas por otras clases en la aplicación.
- **Importación como objeto**: Cuando importas un CSS Module, las clases se convierten en propiedades del objeto `styles`, lo que facilita el acceso a ellas sin preocuparte por los conflictos de nombres.

### **5. Styled Components**

Styled Components te permiten escribir CSS directamente dentro de tus componentes usando JavaScript. Este enfoque es ideal para estilos dinámicos y encapsulados.

#### **Ejemplo**:

```jsx
import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) => (props.primary ? "blue" : "gray")};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.primary ? "darkblue" : "darkgray")};
  }
`;

function StyledComponentsExample() {
  return (
    <div>
      <Button primary>Botón Primario</Button>
      <Button>Botón Secundario</Button>
    </div>
  );
}

export default StyledComponentsExample;
```

#### **Características**:

- **Estilos dinámicos**: Puedes cambiar los estilos basados en las props que reciban los componentes.
- **Encapsulamiento**: Los estilos están encapsulados dentro de los componentes, lo que reduce los riesgos de conflictos de nombres y facilita el mantenimiento del código.

### **Conclusión**

JSX en React ofrece múltiples maneras de aplicar CSS, desde estilos en línea hasta técnicas más avanzadas como CSS Modules y Styled Components. Cada enfoque tiene sus propias ventajas dependiendo del contexto y las necesidades del proyecto.

---
