# JSX Rules (JSX Normas)

JSX (JavaScript XML) es una extensión de JavaScript que permite escribir estructuras similares a HTML en archivos JavaScript. Es uno de los conceptos clave en React, y tiene ciertas reglas que debes seguir para escribir un código limpio y sin errores. A continuación, te presento las principales normas y mejores prácticas al usar JSX.

### **1. Solo un Elemento Principal**

Cada componente JSX debe retornar un solo elemento principal. Si necesitas devolver múltiples elementos, puedes envolverlos en un contenedor como un `div` o usar `React.Fragment` (o su versión abreviada `<>`).

**Correcto:**

```jsx
function MyComponent() {
  return (
    <div>
      <h1>Title</h1>
      <p>Description</p>
    </div>
  );
}
```

**Con Fragmento:**

```jsx
function MyComponent() {
  return (
    <>
      <h1>Title</h1>
      <p>Description</p>
    </>
  );
}
```

**Incorrecto:**

```jsx
function MyComponent() {
  return (
    <h1>Title</h1>
    <p>Description</p>
  );
}
```

### **2. Las Etiquetas Deben Cerrarse**

En JSX, todas las etiquetas deben cerrarse, incluso las etiquetas que en HTML son auto-contenidas, como `<img />`, `<input />`, `<br />`, etc.

**Correcto:**

```jsx
function MyComponent() {
  return (
    <div>
      <img src="image.jpg" alt="example" />
      <input type="text" />
      <br />
    </div>
  );
}
```

**Incorrecto:**

```jsx
function MyComponent() {
  return (
    <div>
      <img src="image.jpg" alt="example">
      <input type="text">
      <br>
    </div>
  );
}
```

### **3. Los Atributos se Escriben en CamelCase**

En JSX, los atributos que normalmente se escriben en minúsculas en HTML, se escriben en `camelCase`. Por ejemplo, `class` se convierte en `className`, y `onclick` se convierte en `onClick`.

**Correcto:**

```jsx
function MyComponent() {
  return (
    <button className="btn" onClick={handleClick}>
      Click me
    </button>
  );
}
```

**Incorrecto:**

```jsx
function MyComponent() {
  return (
    <button class="btn" onclick={handleClick}>
      Click me
    </button>
  );
}
```

### **4. `className` en Lugar de `class`**

Dado que `class` es una palabra reservada en JavaScript, en JSX se usa `className` para asignar clases CSS.

**Correcto:**

```jsx
function MyComponent() {
  return (
    <div className="container">
      <h1 className="title">Welcome</h1>
    </div>
  );
}
```

**Incorrecto:**

```jsx
function MyComponent() {
  return (
    <div class="container">
      <h1 class="title">Welcome</h1>
    </div>
  );
}
```

### **5. Expresiones en JSX**

Puedes incluir expresiones de JavaScript dentro de JSX usando llaves `{}`. Esto es útil para mostrar variables, llamar funciones o realizar operaciones.

**Correcto:**

```jsx
function MyComponent({ name }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>{2 + 2}</p>
      <p>{name.length > 5 ? "Long name" : "Short name"}</p>
    </div>
  );
}
```

**Incorrecto:**

```jsx
function MyComponent({ name }) {
  return (
    <div>
      <h1>Hello, name!</h1>
      <p>2 + 2</p>
      <p>{name.length > 5 ? "Long name" : "Short name"}</p>
    </div>
  );
}
```

### **6. Propiedades Booleanas**

En JSX, si un atributo es booleano (como `disabled`, `checked`, `readOnly`), no necesitas asignarle `true`. Simplemente escribe el nombre del atributo.

**Correcto:**

```jsx
function MyComponent() {
  return <input type="checkbox" checked />;
}
```

**Incorrecto:**

```jsx
function MyComponent() {
  return <input type="checkbox" checked="true" />;
}
```

### **7. Estilos Inline**

En JSX, los estilos inline se pasan como un objeto, donde los nombres de las propiedades CSS están en `camelCase`.

**Correcto:**

```jsx
function MyComponent() {
  const style = {
    backgroundColor: "blue",
    color: "white",
  };
  return <div style={style}>Styled Component</div>;
}
```

**Incorrecto:**

```jsx
function MyComponent() {
  return (
    <div style="background-color: blue; color: white;">Styled Component</div>
  );
}
```

### **8. Evitar la Inyección de HTML**

Aunque puedes usar `dangerouslySetInnerHTML` para inyectar HTML directamente en JSX, esto es peligroso y debe evitarse a menos que sea absolutamente necesario.

**Uso con Precaución:**

```jsx
function MyComponent() {
  return <div dangerouslySetInnerHTML={{ __html: "<p>Injected HTML</p>" }} />;
}
```

**Evitar cuando sea posible:**
En lugar de inyectar HTML, intenta crear elementos JSX directamente.

### **9. Nombres de Componentes con Mayúscula Inicial**

Los nombres de los componentes en JSX deben comenzar con una letra mayúscula. Esto diferencia a los componentes personalizados de los elementos HTML nativos.

**Correcto:**

```jsx
function MyComponent() {
  return <div>Content</div>;
}

function App() {
  return <MyComponent />;
}
```

**Incorrecto:**

```jsx
function myComponent() {
  return <div>Content</div>;
}

function App() {
  return <myComponent />;
}
```

### **10. Comentarios en JSX**

Puedes añadir comentarios en JSX usando llaves `{}` y `/* comentario */`.

**Ejemplo:**

```jsx
function MyComponent() {
  return (
    <div>
      {/* Este es un comentario en JSX */}
      <h1>Hello, World!</h1>
    </div>
  );
}
```

### **Conclusión**

Estas normas de JSX te ayudarán a escribir código React de manera más efectiva y a evitar errores comunes. JSX hace que la creación de interfaces de usuario en React sea más intuitiva, pero es esencial seguir estas reglas para asegurarte de que tu código sea limpio y fácil de mantener.
