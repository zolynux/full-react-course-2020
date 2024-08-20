# Event Basics

Los **eventos** en React son una parte fundamental de cómo los componentes interactúan con los usuarios. Los eventos permiten que los componentes reaccionen a las acciones del usuario, como clics, cambios en formularios, envíos de formularios, y más.

### **1. Manejo Básico de Eventos**

En React, los eventos funcionan de manera similar a los eventos en JavaScript, pero con algunas diferencias importantes:

- Los eventos en React están escritos en camelCase (por ejemplo, `onClick` en lugar de `onclick`).
- En lugar de pasar una cadena de texto, se pasa una función como el manejador del evento.

#### **Ejemplo Básico: onClick**

El evento `onClick` es uno de los eventos más comunes. Se activa cuando el usuario hace clic en un elemento.

```jsx
import React from "react";

function App() {
  const handleClick = () => {
    alert("¡Botón clickeado!");
  };

  return (
    <div>
      <button onClick={handleClick}>Haz clic aquí</button>
    </div>
  );
}

export default App;
```

- **Explicación**:
  - `onClick={handleClick}`: Vincula el evento `onClick` del botón a la función `handleClick`.
  - Cuando el usuario hace clic en el botón, se dispara la alerta.

#### **Ejemplo Básico: onChange**

El evento `onChange` se utiliza comúnmente con formularios, como inputs y selects. Se dispara cuando el valor de un campo cambia.

```jsx
import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <p>El texto ingresado es: {text}</p>
    </div>
  );
}

export default App;
```

- **Explicación**:
  - `onChange={handleChange}`: Vincula el evento `onChange` del input a la función `handleChange`.
  - `event.target.value` contiene el valor actual del input, y `setText` actualiza el estado con ese valor.

### **2. Event Object en React**

Cuando se maneja un evento en React, se pasa un objeto de evento (similar al objeto `event` en JavaScript puro) al manejador de eventos. Este objeto contiene información útil sobre el evento que ocurrió.

#### **Ejemplo: Usando el Event Object**

```jsx
import React from "react";

function App() {
  const handleClick = (event) => {
    console.log("Tipo de evento:", event.type);
    console.log("Elemento clickeado:", event.target);
  };

  return (
    <div>
      <button onClick={handleClick}>Haz clic aquí</button>
    </div>
  );
}

export default App;
```

- **Explicación**:
  - `event.type` devuelve el tipo de evento (por ejemplo, `"click"`).
  - `event.target` devuelve el elemento que disparó el evento (en este caso, el botón).

### **3. Previniendo Comportamientos Predeterminados**

En algunos casos, querrás prevenir el comportamiento predeterminado de un evento, como cuando un formulario intenta enviar datos y recargar la página. Para ello, se usa `event.preventDefault()`.

#### **Ejemplo: Prevenir el Envío de un Formulario**

```jsx
import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Previene el envío del formulario
    alert(`Formulario enviado con el texto: ${text}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
```

- **Explicación**:
  - `event.preventDefault()`: Previene el comportamiento predeterminado del envío del formulario, que sería recargar la página.
  - El formulario no se envía de manera tradicional, y en su lugar se ejecuta la lógica dentro de `handleSubmit`.

### **4. Pasando Parámetros a los Manejadores de Eventos**

A veces necesitas pasar parámetros adicionales a los manejadores de eventos. Puedes hacerlo envolviendo la función en una función flecha.

#### **Ejemplo: Pasando Parámetros a un Manejador de Eventos**

```jsx
import React from "react";

function App() {
  const handleClick = (name) => {
    alert(`¡Hola, ${name}!`);
  };

  return (
    <div>
      <button onClick={() => handleClick("Juan")}>Saludar a Juan</button>
      <button onClick={() => handleClick("María")}>Saludar a María</button>
    </div>
  );
}

export default App;
```

- **Explicación**:
  - `onClick={() => handleClick('Juan')}`: Pasa `'Juan'` como parámetro a la función `handleClick`.
  - Cada botón llama a `handleClick` con un parámetro diferente, mostrando un saludo personalizado.

### **5. Manejo de Eventos en Componentes de Clase**

Aunque la mayoría de los desarrollos modernos en React utilizan componentes funcionales, es útil conocer cómo se manejan los eventos en componentes de clase.

#### **Ejemplo: Manejo de Eventos en un Componente de Clase**

```jsx
import React, { Component } from "react";

class App extends Component {
  handleClick = () => {
    alert("¡Botón clickeado en un componente de clase!");
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Haz clic aquí</button>
      </div>
    );
  }
}

export default App;
```

- **Explicación**:
  - `handleClick` es un método de la clase, pero se escribe como una propiedad de clase con una función flecha para asegurar que `this` esté correctamente enlazado.
  - En el método `render`, `this.handleClick` se usa como el manejador del evento `onClick`.

### **Conclusión**

Los eventos en React son similares a los eventos en JavaScript, pero están adaptados para el flujo de trabajo de React. Saber cómo manejar eventos es crucial para crear aplicaciones interactivas. Los puntos clave incluyen cómo vincular eventos, el uso del objeto de evento, la prevención de comportamientos predeterminados y el manejo de eventos en componentes de clase y funcionales.
