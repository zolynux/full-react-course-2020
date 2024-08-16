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
