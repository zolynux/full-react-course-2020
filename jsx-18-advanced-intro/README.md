# Advanced Intro React

Estos conceptos forman parte de temas avanzados en React y son esenciales para construir aplicaciones complejas y bien estructuradas. Vamos a explorar cada uno de ellos.

### **1. `useState`**

El hook `useState` es una función que te permite añadir **estado** a los componentes funcionales en React. Antes de los hooks, solo los componentes de clase podían manejar el estado.

#### **Ejemplo Básico**:

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // useState inicializa el estado en 0

  return (
    <div>
      <p>Has clickeado {count} veces</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
}

export default Counter;
```

- **`useState(0)`**: Inicializa el estado `count` en `0`.
- **`setCount`**: Es la función que actualiza el estado.

### **2. `useEffect`**

El hook `useEffect` se utiliza para manejar **efectos secundarios** en los componentes funcionales, como peticiones de datos, suscripciones o manipulación del DOM. Es el equivalente a `componentDidMount`, `componentDidUpdate`, y `componentWillUnmount` en componentes de clase.

#### **Ejemplo Básico**:

```jsx
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;

    return () => {
      console.log('Cleanup function'); // Se ejecuta al desmontar o actualizar
    };
  }, [count]); // Solo se ejecuta cuando `count` cambia

  return (
    <div>
      <p>Has clickeado {count} veces</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
}

export default Example;
```

- **`useEffect(() => {...}, [count])`**: El efecto se ejecuta cuando `count` cambia.
- **`return () => {...}`**: Se ejecuta como limpieza antes de desmontar o antes de ejecutar el próximo efecto.

### **3. Conditional Rendering**

El **renderizado condicional** es cómo puedes decidir qué componentes o elementos renderizar según ciertas condiciones. En React, se hace usando operadores condicionales como `if`, `ternarios` (`? :`), o `&&`.

#### **Ejemplo Básico**:

```jsx
import React, { useState } from 'react';

function Greeting() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? <h1>Bienvenido de nuevo!</h1> : <h1>Por favor, inicia sesión.</h1>}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Cerrar sesión' : 'Iniciar sesión'}
      </button>
    </div>
  );
}

export default Greeting;
```

- **`isLoggedIn ? <ComponenteA /> : <ComponenteB />`**: Renderiza diferentes componentes dependiendo del estado.

### **4. Forms**

El manejo de **formularios** en React implica capturar y procesar entradas del usuario. Utilizas el estado (`useState`) para almacenar los valores de los campos del formulario.

#### **Ejemplo Básico**:

```jsx
import React, { useState } from 'react';

function MyForm() {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Nombre enviado: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default MyForm;
```

- **`onChange={(e) => setName(e.target.value)}`**: Actualiza el estado cada vez que el usuario escribe en el campo.
- **`onSubmit`**: Maneja el envío del formulario.

### **5. `useRef`**

El hook `useRef` es una forma de acceder directamente a un elemento DOM en un componente funcional de React. Es útil para manipulación directa del DOM, manejo de temporizadores, o para mantener un valor persistente que no causa re-renderizados cuando cambia.

#### **Ejemplo Básico**:

```jsx
import React, { useRef } from 'react';

function TextInputWithFocusButton() {
  const inputEl = useRef(null);

  const onButtonClick = () => {
    inputEl.current.focus(); // Enfoca el input al hacer clic
  };

  return (
    <div>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Enfocar input</button>
    </div>
  );
}

export default TextInputWithFocusButton;
```

- **`ref={inputEl}`**: Asigna una referencia al elemento input.
- **`inputEl.current.focus()`**: Accede directamente al DOM para enfocar el input.

### **6. `useReducer`**

El hook `useReducer` es una alternativa a `useState` para manejar el estado en componentes que requieren lógica más compleja o múltiple. Es similar al patrón de reducción en Redux.

#### **Ejemplo Básico**:

```jsx
import React, { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Contador: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Incrementar</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrementar</button>
    </div>
  );
}

export default Counter;
```

- **`useReducer(reducer, { count: 0 })`**: Inicializa el estado y configura el reducer.
- **`dispatch({ type: 'increment' })`**: Despacha acciones para cambiar el estado.

### **7. Prop Drilling**

El **prop drilling** se refiere al proceso de pasar datos de un componente padre a un componente hijo, y luego a un nieto, y así sucesivamente, a través de props. Puede volverse complicado y difícil de manejar si los datos deben pasar por muchos niveles de componentes.

#### **Ejemplo Básico**:

```jsx
function Grandparent() {
  const name = 'Juan';
  return <Parent name={name} />;
}

function Parent({ name }) {
  return <Child name={name} />;
}

function Child({ name }) {
  return <p>Hola, {name}</p>;
}
```

- **`<Parent name={name} />`**: La prop `name` se pasa desde el abuelo al padre y luego al hijo.

### **8. Context API / `useContext`**

La **Context API** de React es una solución para evitar el prop drilling. Permite compartir datos entre componentes sin tener que pasar props manualmente a través de cada nivel del árbol de componentes.

#### **Ejemplo Básico**:

```jsx
import React, { useContext, createContext } from 'react';

const NameContext = createContext();

function Grandparent() {
  const name = 'Juan';
  return (
    <NameContext.Provider value={name}>
      <Parent />
    </NameContext.Provider>
  );
}

function Parent() {
  return <Child />;
}

function Child() {
  const name = useContext(NameContext);
  return <p>Hola, {name}</p>;
}
```

- **`NameContext.Provider`**: Provee el valor `name` a todos los componentes hijos.
- **`useContext(NameContext)`**: Consume el valor de `NameContext` en cualquier componente sin necesidad de prop drilling.

### **Conclusión**

Estos conceptos avanzados de React son cruciales para manejar estados, efectos, formularios, renderizado condicional y la gestión del flujo de datos en una aplicación. Entender y dominar estos elementos te permitirá construir aplicaciones React más robustas y mantenibles.

