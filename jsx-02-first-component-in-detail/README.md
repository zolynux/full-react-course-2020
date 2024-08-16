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
