# Import and Export Statements

Las declaraciones **import** y **export** en JavaScript (y por extensión, en React) son fundamentales para organizar y reutilizar el código en diferentes archivos y módulos. Estas declaraciones permiten dividir tu aplicación en módulos que pueden ser importados y exportados según sea necesario, lo que facilita el mantenimiento y la escalabilidad del código.

### **1. Export: Cómo Exportar Código**

Para que una parte de tu código (como una función, una variable, un componente, etc.) esté disponible para ser utilizada en otros archivos, primero debes **exportarla**.

#### **Tipos de Exportaciones**

1. **Exportación Nombrada (`named export`)**:
   - Puedes exportar múltiples elementos desde un solo archivo.
   - Cada elemento debe ser importado usando su nombre exacto.

   **Ejemplo: Exportación Nombrada**

   ```javascript
   // utils.js
   export const PI = 3.14;

   export function calculateArea(radius) {
     return PI * radius * radius;
   }

   export const author = 'Juan Pérez';
   ```

   - Aquí, `PI`, `calculateArea`, y `author` son exportaciones nombradas.
   - Se exportan con `export` delante de la declaración.

2. **Exportación por Defecto (`default export`)**:
   - Cada archivo puede tener solo una exportación por defecto.
   - El elemento exportado por defecto puede ser importado con cualquier nombre.

   **Ejemplo: Exportación por Defecto**

   ```javascript
   // math.js
   export default function calculateCircumference(diameter) {
     return PI * diameter;
   }
   ```

   - Aquí, `calculateCircumference` es la exportación por defecto del archivo.

### **2. Import: Cómo Importar Código**

Una vez que has exportado algo, puedes **importarlo** en otro archivo para usarlo.

#### **Tipos de Importaciones**

1. **Importación de Exportaciones Nombradas**:
   - Se importan usando el mismo nombre con el que fueron exportadas.
   - Puedes importar una o varias exportaciones nombradas de un archivo.

   **Ejemplo: Importando Exportaciones Nombradas**

   ```javascript
   // app.js
   import { PI, calculateArea, author } from './utils';

   console.log(`El área es: ${calculateArea(5)}`);
   console.log(`Autor: ${author}`);
   ```

   - Aquí, `PI`, `calculateArea`, y `author` se importan desde `utils.js`.
   - Debes usar el mismo nombre que en la exportación.

2. **Importación de la Exportación por Defecto**:
   - Puedes importar la exportación por defecto con cualquier nombre.

   **Ejemplo: Importando la Exportación por Defecto**

   ```javascript
   // main.js
   import calculateCircumference from './math';

   console.log(`La circunferencia es: ${calculateCircumference(10)}`);
   ```

   - Aquí, `calculateCircumference` se importa desde `math.js` y se puede nombrar como desees.

3. **Importaciones Combinadas**:
   - Puedes combinar la importación de exportaciones nombradas y la exportación por defecto en una sola línea.

   **Ejemplo: Importaciones Combinadas**

   ```javascript
   // combined.js
   import calculateCircumference, { PI, author } from './utils';

   console.log(`PI es: ${PI}`);
   console.log(`Circunferencia: ${calculateCircumference(10)}`);
   console.log(`Autor: ${author}`);
   ```

   - En este caso, `calculateCircumference` es la exportación por defecto, y `PI` y `author` son exportaciones nombradas.

### **3. Renombrar Importaciones**

Puedes renombrar las exportaciones nombradas durante la importación utilizando la palabra clave `as`.

#### **Ejemplo: Renombrar una Importación**

```javascript
// app.js
import { calculateArea as calcArea, author as writer } from './utils';

console.log(`El área es: ${calcArea(5)}`);
console.log(`Escrito por: ${writer}`);
```

- Aquí, `calculateArea` se importa como `calcArea` y `author` se importa como `writer`.

### **4. Exportar Todo de una Vez**

Puedes exportar todo el contenido de un archivo a otro utilizando el `export * from '...';`. Esto es útil si quieres re-exportar todo desde un archivo intermedio.

#### **Ejemplo: Re-exportar Todo**

```javascript
// allUtils.js
export * from './utils';
```

- Esto re-exporta todo lo que está en `utils.js` desde `allUtils.js`.

### **Conclusión**

Las declaraciones `import` y `export` son esenciales para manejar el código modular en JavaScript y React. Permiten organizar tu código en piezas reutilizables, haciéndolo más limpio, mantenible y fácil de entender. Dominarlas es crucial para desarrollar aplicaciones complejas y bien estructuradas.
