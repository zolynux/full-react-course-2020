# Props 

En React, **props** (abreviatura de "properties") son uno de los conceptos fundamentales para crear componentes dinámicos y reutilizables. Las props permiten que un componente reciba datos y comportamientos desde su componente padre, lo que facilita la creación de interfaces de usuario modulares y escalables.

### **1. ¿Qué son las Props?**

Las props son un mecanismo para pasar datos desde un componente padre a un componente hijo. Son de solo lectura, lo que significa que no puedes modificar las props directamente dentro del componente hijo; solo pueden ser utilizadas para leer valores o ejecutar funciones pasadas desde el padre.

### **2. Cómo se Usan las Props**

#### **a. Pasar Props desde el Componente Padre**

Puedes pasar props a un componente hijo como atributos en la etiqueta del componente. Cada atributo se convierte en una prop dentro del componente hijo.

```jsx
import React from 'react';

function App() {
  return (
    <div>
      <Greeting name="Juan" />
    </div>
  );
}

function Greeting({ name }) {
  return <h1>Hola, {name}!</h1>;
}

export default App;
```

- **Explicación**: En este ejemplo, el componente `Greeting` recibe una prop llamada `name` con el valor `"Juan"`. Dentro del componente `Greeting`, se accede a `name` y se utiliza para mostrar el mensaje.

#### **b. Acceder a las Props en el Componente Hijo**

Dentro del componente hijo, puedes acceder a las props mediante el objeto `props`. Esto puede hacerse de dos maneras:

1. **Usando `props` directamente**:

   ```jsx
   function Greeting(props) {
     return <h1>Hola, {props.name}!</h1>;
   }
   ```

2. **Usando destructuring**:

   ```jsx
   function Greeting({ name }) {
     return <h1>Hola, {name}!</h1>;
   }
   ```

- **Destructuring**: Es una forma concisa y clara de extraer valores de un objeto, en este caso, de las props.

### **3. Props por Defecto (Default Props)**

Puedes definir valores por defecto para las props en caso de que no se pasen desde el componente padre. Esto es útil para asegurarse de que un componente siempre tenga un valor para una prop específica.

#### **Ejemplo**:

```jsx
import React from 'react';

function Greeting({ name = 'Invitado' }) {
  return <h1>Hola, {name}!</h1>;
}

export default Greeting;
```

- **Explicación**: En este caso, si `name` no se pasa como prop, el componente `Greeting` usará `"Invitado"` como valor por defecto.

### **4. Props como Funciones**

Las props no solo se limitan a valores como cadenas o números; también puedes pasar funciones como props. Esto es especialmente útil para manejar eventos y comunicar interacciones del componente hijo al componente padre.

#### **Ejemplo**:

```jsx
import React from 'react';

function App() {
  const handleClick = () => {
    alert('Botón clickeado!');
  };

  return <Button onClick={handleClick} />;
}

function Button({ onClick }) {
  return <button onClick={onClick}>Haz clic aquí</button>;
}

export default App;
```

- **Explicación**: Aquí, la función `handleClick` se pasa al componente `Button` como prop `onClick`. Cuando el botón es clickeado, `handleClick` se ejecuta, mostrando una alerta.

### **5. Props para Renderizado Condicional**

Puedes usar props para condicionar qué y cómo se renderiza algo en tu componente. Esto permite que un solo componente sea más flexible y reutilizable en diferentes contextos.

#### **Ejemplo**:

```jsx
import React from 'react';

function Alert({ type, message }) {
  const alertStyle = type === 'success' ? 'green' : 'red';

  return (
    <div style={{ color: alertStyle }}>
      {message}
    </div>
  );
}

function App() {
  return (
    <div>
      <Alert type="success" message="Operación exitosa!" />
      <Alert type="error" message="Ha ocurrido un error!" />
    </div>
  );
}

export default App;
```

- **Explicación**: El componente `Alert` cambia su estilo de color basado en el valor de la prop `type`. Esto permite que el mismo componente maneje diferentes tipos de alertas.

### **6. Children Props**

`props.children` es una prop especial que se usa para renderizar los elementos que se encuentran dentro de la etiqueta de apertura y cierre de un componente.

#### **Ejemplo**:

```jsx
import React from 'react';

function Container({ children }) {
  return <div className="container">{children}</div>;
}

function App() {
  return (
    <Container>
      <h1>Bienvenido</h1>
      <p>Este es un párrafo dentro del contenedor.</p>
    </Container>
  );
}

export default App;
```

- **Explicación**: En este ejemplo, el contenido entre `<Container>` y `</Container>` se pasa como `props.children` y se renderiza dentro del `div` del contenedor.

### **7. PropTypes: Validación de Props**

Para asegurarte de que tus componentes reciben las props correctas, puedes usar `PropTypes`. Esto permite definir qué tipo de datos deben recibir las props y si son requeridas o no.

#### **Instalación**:

```bash
npm install prop-types
```

#### **Ejemplo**:

```jsx
import React from 'react';
import PropTypes from 'prop-types';

function Greeting({ name, age }) {
  return (
    <div>
      <h1>Hola, {name}!</h1>
      <p>Tienes {age} años.</p>
    </div>
  );
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

export default Greeting;
```

- **Explicación**: Aquí, `Greeting` espera recibir una prop `name` que sea una cadena de texto (`string`) y una prop `age` que sea un número (`number`). Ambas props son requeridas (`isRequired`).

### **8. Composición vs Herencia con Props**

React enfatiza el uso de la composición sobre la herencia para construir componentes. Usar props permite que los componentes sean altamente componibles, facilitando la reutilización y el mantenimiento del código.

#### **Ejemplo de Composición**:

```jsx
import React from 'react';

function Button({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}

function IconButton({ icon, label, onClick }) {
  return (
    <Button onClick={onClick}>
      <span>{icon}</span> {label}
    </Button>
  );
}

export default function App() {
  return (
    <div>
      <IconButton icon="⭐" label="Favorito" onClick={() => alert('Añadido a favoritos!')} />
    </div>
  );
}
```

- **Explicación**: `IconButton` compone `Button` y añade un icono y una etiqueta, mostrando cómo los componentes pueden reutilizar otros componentes a través de props.

### **Conclusión**

Las props son esenciales para el flujo de datos y la construcción de componentes reutilizables en React. Te permiten personalizar y controlar la renderización de componentes, creando interfaces dinámicas y modulares. Con una comprensión sólida de las props, puedes diseñar aplicaciones React más robustas y escalables.

