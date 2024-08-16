# Proyecto de minilibro en React

Crear un proyecto de "minilibro" en React es una excelente manera de poner en práctica tus conocimientos y habilidades en React, especialmente en cuanto a la estructura de componentes, manejo de estado, y navegación. A continuación, te guiaré a través de un ejemplo básico de cómo podrías estructurar y desarrollar este proyecto.

### **1. Estructura del Proyecto**

Antes de empezar, es útil tener una visión clara de la estructura de tu proyecto y los componentes que vas a necesitar.

#### **Estructura de Componentes**

- **App.js**: Componente principal donde se manejará la lógica de la aplicación.
- **Header.js**: Componente para el encabezado del libro.
- **TableOfContents.js**: Componente para mostrar el índice del libro.
- **Chapter.js**: Componente para mostrar el contenido de un capítulo.
- **Footer.js**: Componente para la navegación entre capítulos y otras acciones.

#### **Estructura de Carpetas**

Puedes organizar tu proyecto de la siguiente manera:

```
src/
├── components/
│   ├── Header.js
│   ├── TableOfContents.js
│   ├── Chapter.js
│   └── Footer.js
├── data/
│   └── chapters.js
├── App.js
└── index.js
```

### **2. Inicializar el Proyecto**

Primero, crea tu proyecto de React utilizando `Create React App`.

```bash
npx create-react-app minilibro
cd minilibro
```

### **3. Crear los Componentes**

#### **a. `Header.js`**

Este componente mostrará el título del libro.

```jsx
import React from "react";

function Header() {
  return (
    <header>
      <h1>Mi Minilibro React</h1>
    </header>
  );
}

export default Header;
```

#### **b. `TableOfContents.js`**

Este componente mostrará una lista de capítulos.

```jsx
import React from "react";

function TableOfContents({ chapters, onSelectChapter }) {
  return (
    <nav>
      <h2>Índice</h2>
      <ul>
        {chapters.map((chapter, index) => (
          <li key={index} onClick={() => onSelectChapter(index)}>
            {chapter.title}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default TableOfContents;
```

#### **c. `Chapter.js`**

Este componente mostrará el contenido del capítulo seleccionado.

```jsx
import React from "react";

function Chapter({ chapter }) {
  return (
    <div>
      <h2>{chapter.title}</h2>
      <p>{chapter.content}</p>
    </div>
  );
}

export default Chapter;
```

#### **d. `Footer.js`**

Este componente manejará la navegación entre capítulos.

```jsx
import React from "react";

function Footer({ currentChapter, totalChapters, onPrev, onNext }) {
  return (
    <footer>
      <button onClick={onPrev} disabled={currentChapter === 0}>
        Capítulo Anterior
      </button>
      <button onClick={onNext} disabled={currentChapter === totalChapters - 1}>
        Capítulo Siguiente
      </button>
    </footer>
  );
}

export default Footer;
```

### **4. Crear los Datos del Libro**

Crea un archivo `chapters.js` en la carpeta `data/` para almacenar los datos del libro.

```jsx
export const chapters = [
  {
    title: "Capítulo 1: Introducción a React",
    content:
      "React es una biblioteca de JavaScript para construir interfaces de usuario...",
  },
  {
    title: "Capítulo 2: Componentes",
    content:
      "En React, un componente es una pieza reutilizable de la interfaz de usuario...",
  },
  {
    title: "Capítulo 3: Estado y Props",
    content:
      "El estado y las props son conceptos clave para manejar datos en React...",
  },
];
```

### **5. Integrar Todo en `App.js`**

En `App.js`, integra todos los componentes y maneja la lógica del estado y la navegación entre capítulos.

```jsx
import React, { useState } from "react";
import Header from "./components/Header";
import TableOfContents from "./components/TableOfContents";
import Chapter from "./components/Chapter";
import Footer from "./components/Footer";
import { chapters } from "./data/chapters";

function App() {
  const [currentChapter, setCurrentChapter] = useState(0);

  const handleSelectChapter = (index) => {
    setCurrentChapter(index);
  };

  const handlePrevChapter = () => {
    setCurrentChapter((prev) => Math.max(prev - 1, 0));
  };

  const handleNextChapter = () => {
    setCurrentChapter((prev) => Math.min(prev + 1, chapters.length - 1));
  };

  return (
    <div className="App">
      <Header />
      <TableOfContents
        chapters={chapters}
        onSelectChapter={handleSelectChapter}
      />
      <Chapter chapter={chapters[currentChapter]} />
      <Footer
        currentChapter={currentChapter}
        totalChapters={chapters.length}
        onPrev={handlePrevChapter}
        onNext={handleNextChapter}
      />
    </div>
  );
}

export default App;
```

### **6. Ejecutar la Aplicación**

Finalmente, ejecuta tu aplicación:

```bash
npm start
```

Tu navegador debería abrir `http://localhost:3000/` y mostrar tu minilibro con un título, un índice, y la capacidad de navegar entre capítulos.

### **7. Mejoras Opcionales**

- **Estilos CSS**: Añade estilos para mejorar la apariencia del libro.
- **Animaciones**: Usa librerías como `react-transition-group` para añadir transiciones suaves entre capítulos.
- **LocalStorage**: Guarda el progreso del lector usando `localStorage`, para que al recargar la página, el lector vuelva al último capítulo leído.
- **Comentarios y Notas**: Permite que el lector agregue notas o comentarios en cada capítulo.

### **Conclusión**

Este proyecto de minilibro es un ejemplo práctico que te ayudará a aplicar los conceptos fundamentales de React, como el manejo de estado, la composición de componentes, y la navegación. A medida que te sientas más cómodo, puedes expandir la funcionalidad y agregar características más avanzadas.
