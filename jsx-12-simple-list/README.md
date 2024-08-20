# Simple List en React

Crear una "Simple List" en React es una excelente manera de practicar la renderización de listas y el manejo de componentes. A continuación te muestro un ejemplo básico de cómo podrías crear una lista simple usando React.

### **1. Estructura Básica de una Simple List**

En este ejemplo, crearemos un componente que recibe un array de elementos como prop y los renderiza en una lista.

#### **Paso 1: Crear el Componente de Lista**

Primero, definimos un componente `SimpleList` que recibirá los elementos de la lista como una prop llamada `items` y los mostrará en un elemento HTML `<ul>`.

```jsx
import React from 'react';

function SimpleList({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default SimpleList;
```

- **Explicación**:
  - `items.map((item, index) => ...)` recorre cada elemento en el array `items`.
  - Para cada `item`, se crea un elemento `<li>` con el contenido del `item`.
  - Se utiliza `index` como la `key` para cada elemento de la lista (aunque en aplicaciones reales, se recomienda usar un identificador único si está disponible en lugar del índice).

#### **Paso 2: Usar el Componente en la Aplicación**

Ahora podemos utilizar `SimpleList` en nuestra aplicación, pasando un array de elementos.

```jsx
import React from 'react';
import SimpleList from './SimpleList';

function App() {
  const fruits = ['Manzana', 'Banana', 'Naranja', 'Uva'];

  return (
    <div>
      <h1>Lista de Frutas</h1>
      <SimpleList items={fruits} />
    </div>
  );
}

export default App;
```

- **Explicación**:
  - En este ejemplo, pasamos un array de frutas (`fruits`) como prop `items` al componente `SimpleList`.
  - `SimpleList` renderiza cada fruta en un elemento de lista `<li>`.

### **2. Manejo de Listas Dinámicas**

Si quisieras que la lista fuera dinámica, podrías agregar un input y un botón para permitir al usuario agregar nuevos elementos a la lista.

#### **Ejemplo con Lista Dinámica**:

```jsx
import React, { useState } from 'react';

function SimpleList({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

function App() {
  const [fruits, setFruits] = useState(['Manzana', 'Banana', 'Naranja', 'Uva']);
  const [newFruit, setNewFruit] = useState('');

  const addFruit = () => {
    if (newFruit.trim() !== '') {
      setFruits([...fruits, newFruit]);
      setNewFruit('');
    }
  };

  return (
    <div>
      <h1>Lista de Frutas</h1>
      <SimpleList items={fruits} />
      <input
        type="text"
        value={newFruit}
        onChange={(e) => setNewFruit(e.target.value)}
        placeholder="Nueva Fruta"
      />
      <button onClick={addFruit}>Agregar Fruta</button>
    </div>
  );
}

export default App;
```

- **Explicación**:
  - Usamos `useState` para mantener el estado de la lista de frutas (`fruits`) y el valor del input (`newFruit`).
  - La función `addFruit` se encarga de agregar una nueva fruta al array cuando se hace clic en el botón "Agregar Fruta".
  - La lista se actualiza automáticamente cuando se agrega un nuevo elemento.

### **Conclusión**

Esta "Simple List" es un buen punto de partida para trabajar con listas en React. Puedes expandir este concepto para manejar listas más complejas, como listas con objetos, listas filtradas, o listas que se obtienen de una API.
