# Proper List

Una "Proper List" en React se refiere a una lista más estructurada y probablemente más compleja que una "Simple List". A menudo, esto implica trabajar con datos más ricos (por ejemplo, objetos con múltiples propiedades) y puede incluir características adicionales como eventos de interacción, filtrado, ordenación, y más.

### **1. Estructura Básica de una Proper List**

Supongamos que quieres crear una lista de usuarios, donde cada usuario tiene un nombre, una edad y un correo electrónico. Vamos a crear un componente `UserList` que se encargará de renderizar esta lista.

#### **Paso 1: Crear el Componente de Lista de Usuarios**

Primero, definimos un componente `UserList` que recibe un array de objetos de usuarios y los renderiza en un `<ul>`.

```jsx
import React from "react";

function UserList({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <h3>{user.name}</h3>
          <p>Edad: {user.age}</p>
          <p>Email: {user.email}</p>
        </li>
      ))}
    </ul>
  );
}

export default UserList;
```

- **Explicación**:
  - `users.map((user) => ...)` recorre cada objeto `user` en el array `users`.
  - Cada `user` tiene un `id`, `name`, `age`, y `email`, que se muestran en la lista.
  - El `key` en cada `<li>` es único por usuario, asegurando que React maneje eficientemente la lista.

#### **Paso 2: Usar el Componente en la Aplicación**

Ahora, puedes usar `UserList` en tu aplicación principal, pasando un array de objetos de usuarios.

```jsx
import React from "react";
import UserList from "./UserList";

function App() {
  const users = [
    { id: 1, name: "Juan Pérez", age: 25, email: "juan@example.com" },
    { id: 2, name: "María López", age: 30, email: "maria@example.com" },
    { id: 3, name: "Carlos García", age: 28, email: "carlos@example.com" },
  ];

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <UserList users={users} />
    </div>
  );
}

export default App;
```

- **Explicación**:
  - Pasamos un array de objetos `users` al componente `UserList`.
  - `UserList` renderiza la lista de usuarios, mostrando sus nombres, edades, y correos electrónicos.

### **2. Añadir Funcionalidades Avanzadas**

#### **a. Ordenar la Lista**

Puedes agregar la funcionalidad de ordenar la lista por nombre o edad.

```jsx
import React, { useState } from "react";

function UserList({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <h3>{user.name}</h3>
          <p>Edad: {user.age}</p>
          <p>Email: {user.email}</p>
        </li>
      ))}
    </ul>
  );
}

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "Juan Pérez", age: 25, email: "juan@example.com" },
    { id: 2, name: "María López", age: 30, email: "maria@example.com" },
    { id: 3, name: "Carlos García", age: 28, email: "carlos@example.com" },
  ]);

  const sortByName = () => {
    const sortedUsers = [...users].sort((a, b) => a.name.localeCompare(b.name));
    setUsers(sortedUsers);
  };

  const sortByAge = () => {
    const sortedUsers = [...users].sort((a, b) => a.age - b.age);
    setUsers(sortedUsers);
  };

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <button onClick={sortByName}>Ordenar por Nombre</button>
      <button onClick={sortByAge}>Ordenar por Edad</button>
      <UserList users={users} />
    </div>
  );
}

export default App;
```

- **Explicación**:
  - `sortByName` ordena los usuarios alfabéticamente por nombre.
  - `sortByAge` ordena los usuarios por edad.
  - Ambos métodos actualizan el estado `users`, lo que desencadena un re-render de `UserList`.

#### **b. Filtrar la Lista**

Puedes agregar un input para filtrar la lista por nombre.

```jsx
import React, { useState } from "react";

function UserList({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <h3>{user.name}</h3>
          <p>Edad: {user.age}</p>
          <p>Email: {user.email}</p>
        </li>
      ))}
    </ul>
  );
}

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "Juan Pérez", age: 25, email: "juan@example.com" },
    { id: 2, name: "María López", age: 30, email: "maria@example.com" },
    { id: 3, name: "Carlos García", age: 28, email: "carlos@example.com" },
  ]);

  const [filter, setFilter] = useState("");

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <input
        type="text"
        placeholder="Buscar por nombre"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <UserList users={filteredUsers} />
    </div>
  );
}

export default App;
```

- **Explicación**:
  - `filter` mantiene el estado del texto de búsqueda.
  - `filteredUsers` es un array de usuarios que coinciden con el texto de búsqueda.
  - `UserList` renderiza solo los usuarios que cumplen con el criterio de búsqueda.

### **3. Manejo de Eventos en la Lista**

Puedes agregar funcionalidad para manejar eventos, como hacer clic en un usuario para mostrar detalles adicionales.

```jsx
import React, { useState } from "react";

function UserList({ users, onUserClick }) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id} onClick={() => onUserClick(user)}>
          <h3>{user.name}</h3>
          <p>Edad: {user.age}</p>
          <p>Email: {user.email}</p>
        </li>
      ))}
    </ul>
  );
}

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "Juan Pérez", age: 25, email: "juan@example.com" },
    { id: 2, name: "María López", age: 30, email: "maria@example.com" },
    { id: 3, name: "Carlos García", age: 28, email: "carlos@example.com" },
  ]);

  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <UserList users={users} onUserClick={handleUserClick} />
      {selectedUser && (
        <div>
          <h2>Detalles del Usuario</h2>
          <p>Nombre: {selectedUser.name}</p>
          <p>Edad: {selectedUser.age}</p>
          <p>Email: {selectedUser.email}</p>
        </div>
      )}
    </div>
  );
}

export default App;
```

- **Explicación**:
  - `onUserClick` es una función que se pasa como prop a `UserList`. Se ejecuta cuando se hace clic en un usuario.
  - `handleUserClick` establece el usuario seleccionado en el estado `selectedUser`.
  - Si un usuario está seleccionado, se muestran detalles adicionales en la interfaz.

### **Conclusión**

Una "Proper List" en React no solo muestra datos, sino que también puede incluir características avanzadas como ordenación, filtrado, y manejo de eventos. Este tipo de lista es común en aplicaciones reales donde se trabaja con conjuntos de datos más complejos.
