# **Crear tu Primer Componente en React**

Un componente en React es básicamente una función o clase que devuelve un elemento React que describe cómo debería verse una parte de la interfaz de usuario.

#### **Ejemplo de un Componente Funcional Simple**:

1. **Crear un archivo para el componente**:

   - Dentro de la carpeta `src/components/`, crea un archivo llamado `HelloWorld.js`.

2. **Escribir el componente**:

   ```jsx
   // src/components/HelloWorld.js
   import React from "react";

   function HelloWorld() {
     return (
       <div>
         <h1>Hello, World!</h1>
         <p>This is my first React component!</p>
       </div>
     );
   }

   export default HelloWorld;
   ```

3. **Usar el componente en `App.js`**:

   - Ahora, importa y usa tu componente en `App.js`:

   ```jsx
   // src/App.js
   import React from "react";
   import HelloWorld from "./components/HelloWorld";

   function App() {
     return (
       <div className="App">
         <HelloWorld />
       </div>
     );
   }

   export default App;
   ```

4. **Ver el resultado**:
   - Guarda todo y asegúrate de que tu servidor de desarrollo esté corriendo (`npm start`). Deberías ver "Hello, World!" en la pantalla.

### **Conclusión**

Con esta estructura de carpetas, prácticas de código limpio, y tu primer componente funcional, estás listo para empezar a construir tu aplicación en React de manera organizada y eficiente.
