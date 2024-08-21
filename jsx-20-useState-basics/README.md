# useState Basics

El hook `useState` es uno de los más básicos y esenciales en React, ya que permite a los componentes funcionales manejar su propio estado interno. Antes de la introducción de hooks, el estado solo podía ser manejado por componentes de clase, pero con `useState`, los componentes funcionales también pueden gestionar el estado, lo que hace que el código sea más sencillo y fácil de leer.

### **¿Qué es el Estado?**

El **estado** en React es un objeto que contiene información sobre cómo debería comportarse y renderizarse un componente. Cuando el estado cambia, React vuelve a renderizar el componente para reflejar esos cambios en la interfaz de usuario.

### **`useState`: Introducción Básica**

`useState` es un hook que permite agregar estado a un componente funcional. Se utiliza para declarar una variable de estado y una función para actualizarla.

#### **Sintaxis Básica**:

```javascript
const [state, setState] = useState(initialState);
```

- **`state`**: Es el valor actual del estado.
- **`setState`**: Es la función que se utiliza para actualizar el valor del estado.
- **`initialState`**: Es el valor inicial del estado cuando el componente se monta por primera vez.

### **Ejemplo Básico de `useState`**

Vamos a ver un ejemplo sencillo donde utilizamos `useState` para manejar un contador que incrementa cada vez que se presiona un botón.

```jsx
import React, { useState } from "react";

function Counter() {
  // Declaración del estado "count" con un valor inicial de 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Has clickeado {count} veces</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
}

export default Counter;
```

#### **Cómo Funciona el Ejemplo:**

1. **`useState(0)`**: Inicializa el estado `count` en `0`.
2. **`count`**: Es el valor actual del estado. Se renderiza en el párrafo `<p>Has clickeado {count} veces</p>`.
3. **`setCount(count + 1)`**: Actualiza el valor del estado cada vez que se hace clic en el botón, incrementando `count` en `1`.
4. **Re-renderizado**: Cada vez que se actualiza el estado con `setCount`, el componente se vuelve a renderizar con el nuevo valor de `count`.

### **Manejo de Estado Complejo**

Aunque el ejemplo anterior es muy básico, `useState` también se puede utilizar para manejar estados más complejos, como objetos o arreglos.

#### **Ejemplo con un Objeto como Estado**:

```jsx
import React, { useState } from "react";

function UserProfile() {
  // Estado inicial con un objeto que contiene varias propiedades
  const [user, setUser] = useState({ name: "Juan", age: 30 });

  const updateName = () => {
    setUser({ ...user, name: "Carlos" }); // Actualiza solo el nombre
  };

  return (
    <div>
      <p>Nombre: {user.name}</p>
      <p>Edad: {user.age}</p>
      <button onClick={updateName}>Actualizar Nombre</button>
    </div>
  );
}

export default UserProfile;
```

- **`{ ...user, name: 'Carlos' }`**: Se usa el operador de propagación (`...`) para copiar el estado actual del objeto `user` y luego actualizar solo la propiedad `name` sin modificar `age`.

### **Reglas para Usar `useState`**

- **Solo en Componentes Funcionales**: `useState` solo puede usarse dentro de componentes funcionales o dentro de otros hooks personalizados.
- **Orden de Llamada Consistente**: Los hooks deben ser llamados en el mismo orden en cada render. No deben ser usados dentro de condicionales, bucles, o funciones anidadas.

### **Conclusión**

`useState` es fundamental para manejar el estado en componentes funcionales de React. Permite crear aplicaciones dinámicas y reactivas, donde los cambios en el estado se reflejan automáticamente en la interfaz de usuario. A medida que te sientas más cómodo con `useState`, podrás explorar otros hooks como `useEffect` para manejar efectos secundarios, o `useReducer` para manejar estados más complejos.
