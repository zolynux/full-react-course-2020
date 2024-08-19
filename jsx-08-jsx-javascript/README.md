# JSX JavaScript

JSX es una extensión de sintaxis para JavaScript que permite escribir HTML directamente dentro de JavaScript. En React, JSX es la base para crear interfaces de usuario. Lo poderoso de JSX es que no solo permite mezclar HTML con JavaScript, sino que también facilita la inclusión de lógica directamente dentro de la estructura del componente. Aquí te explico cómo usar JavaScript dentro de JSX en React.

### **1. Expresiones de JavaScript en JSX**

En JSX, puedes incluir expresiones de JavaScript dentro de llaves `{}`. Estas expresiones se evaluarán y su resultado se renderizará en la UI.

#### **Ejemplo básico**:

```jsx
import React from 'react';

function Greeting() {
  const name = 'Juan';
  return <h1>Hola, {name}!</h1>;
}

export default Greeting;
```

- **Descripción**: Aquí, `{name}` es una expresión de JavaScript que se evalúa y el valor de `name` se inserta en el JSX.

### **2. Condicionales en JSX**

Aunque JSX no soporta directamente las estructuras de control como `if` o `for`, puedes usar expresiones ternarias y operadores lógicos para realizar operaciones condicionales.

#### **a. Operador Ternario**:

El operador ternario es útil para renderizar contenido condicionalmente.

```jsx
import React from 'react';

function UserGreeting({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <h1>Bienvenido de nuevo!</h1> : <h1>Por favor, inicia sesión.</h1>}
    </div>
  );
}

export default UserGreeting;
```

- **Descripción**: Aquí, si `isLoggedIn` es verdadero, se muestra el mensaje de bienvenida. Si no, se pide al usuario que inicie sesión.

#### **b. Operador Lógico `&&`**:

Puedes usar el operador lógico `&&` para renderizar un elemento solo si una condición es verdadera.

```jsx
import React from 'react';

function Notification({ hasUnreadMessages }) {
  return (
    <div>
      {hasUnreadMessages && <p>Tienes mensajes sin leer.</p>}
    </div>
  );
}

export default Notification;
```

- **Descripción**: Si `hasUnreadMessages` es verdadero, se muestra el mensaje. Si no, no se renderiza nada.

### **3. Bucles en JSX**

Aunque no puedes usar `for` directamente en JSX, puedes utilizar métodos de arreglos como `map()` para iterar sobre colecciones y renderizar elementos dinámicamente.

#### **Ejemplo con `map()`**:

```jsx
import React from 'react';

function ItemList({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default ItemList;
```

- **Descripción**: `map()` se usa para iterar sobre la lista de `items`, creando un `<li>` para cada elemento en la lista.

### **4. Funciones dentro de JSX**

Puedes llamar a funciones dentro de JSX para realizar cálculos o manejar lógica más compleja.

#### **Ejemplo**:

```jsx
import React from 'react';

function formatDate(date) {
  return date.toLocaleDateString();
}

function DateDisplay({ date }) {
  return <p>La fecha de hoy es {formatDate(date)}.</p>;
}

export default DateDisplay;
```

- **Descripción**: La función `formatDate` se llama dentro de JSX para dar formato a la fecha antes de renderizarla.

### **5. Eventos en JSX**

Puedes usar eventos de JavaScript (como `onClick`, `onChange`, etc.) en JSX para manejar interacciones del usuario.

#### **Ejemplo de `onClick`**:

```jsx
import React from 'react';

function Button() {
  const handleClick = () => {
    alert('¡Botón clickeado!');
  };

  return <button onClick={handleClick}>Haz clic aquí</button>;
}

export default Button;
```

- **Descripción**: Cuando el botón es clickeado, la función `handleClick` se ejecuta, mostrando una alerta.

### **6. Props y Estado en JSX**

Puedes utilizar props y el estado dentro de JSX para renderizar dinámicamente contenido basado en los datos del componente.

#### **Ejemplo con Props**:

```jsx
import React from 'react';

function Welcome({ user }) {
  return <h1>Hola, {user.name}!</h1>;
}

export default Welcome;
```

- **Descripción**: Aquí, `user.name` es una prop que se pasa al componente y se muestra en el saludo.

#### **Ejemplo con Estado**:

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
}

export default Counter;
```

- **Descripción**: El estado `count` se muestra en el párrafo, y se actualiza cada vez que se hace clic en el botón.

### **7. Renderizado Condicional Avanzado**

Puedes combinar diferentes técnicas de renderizado condicional para crear UIs más complejas.

#### **Ejemplo**:

```jsx
import React from 'react';

function StatusMessage({ status }) {
  return (
    <div>
      {status === 'loading' && <p>Cargando...</p>}
      {status === 'error' && <p>Error al cargar datos.</p>}
      {status === 'success' && <p>Datos cargados exitosamente.</p>}
    </div>
  );
}

export default StatusMessage;
```

- **Descripción**: Dependiendo del valor de `status`, se renderiza un mensaje diferente.

### **Conclusión**

JSX es extremadamente flexible y permite integrar JavaScript de manera fluida dentro del HTML, lo que hace que React sea una herramienta poderosa para construir interfaces de usuario dinámicas. Puedes usar expresiones, condiciones, bucles, funciones, y más para controlar cómo se renderiza tu componente basado en la lógica de tu aplicación.

