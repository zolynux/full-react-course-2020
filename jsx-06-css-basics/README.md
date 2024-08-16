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
