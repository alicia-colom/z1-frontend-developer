# Z1 FrontEnd Developer

## Prueba técnica para puesto de **Front-end Developer** en **[Z1.digital](https://z1.digital/)**

### *By Alicia Colom* 👋

------------

## 🔎 **OBJETIVO**
Se trata de una webapp consistente en un escaner de documentos de identidad.

El funcionamiento es el siguiente: la app captura una fotografía usando la cámara del usuario, y la envía conectando con una **API REST**.
La API devuelve una respuesta, que mostraremos al usuario por pantalla:
Si la respuesta es de aceptación, finaliza la ejecución.
Si por el contrario, es rechazada, el usuario podrá volver a inicializar el proceso.

Todo esto, siguiendo el diseño del prototipo dado en **InVision** y desarrollado en **React** usando **TypeScript**

------------

## 🛠️ **STACK TECNOLÓGICO:**

| React | TypeScript | JSX | API REST |
| -- | -- | -- | -- |

| HTML5 | CSS3 | Sass | React-Webcam |
| -- | -- | -- | -- |

| Jest | Enzyme | Git + GitHub | npm |
| -- | -- | -- | -- |

------------

## 🗃️ **Estructura del proyecto**

<details>
<summary>Desplegar para ver estructura del proyecto</summary>


```
src
 ├─ public
 |  ├─ index.hmtl
 |  ├─ favicon.ico
 |  └─ ...
 |
 ├─ components
 |  ├─ App.tsx
 |  └─ layout
 |     ├─ Header.tsx
 |     ├─ Home.tsx
 |     ├─ CardFrame.tsx
 |     └─ CamView.tsx
 |
 ├─ services
 |  └─ Api.ts
 |
 ├─ stylesheets
 |  ├─ App.scss
 |  ├─ core
 |  |  ├─ _reset.scss_
 |  |  └─ _variables.scss_
 |  └─ layout
 |     ├─ Header.scss
 |     ├─ Home.scss
 |     ├─ CardFrame.scss
 |     └─ CamView.scss
 |
 ├─ tests
 |  ├─ Home.test.tsx
 |  ├─ CardFrame.test.tsx
 |  ├─ CamView.test.tsx
 |  └─ ...
 |
 ├─ images
 |  └─ ...
 |
 ├─ index.tsx
 └─ index.scss
```
</details>

------------

## ⚙️ **SCRIPTS DISPONIBLES**


#### `npm install` o `yarn install`

Antes de inicializar la aplicaión, hay que instalar las dependencias de las que hace uso, mediante una de estos comandos.

#### `npm start` o `yarn start`

Arranca la aplicación en modo desarrollo.
Abre `http://localhost:3000` para visualizarla en el navegador.

La página se actualizará automáticamente con cada cambio que ocurra en el código.
Igualmente, se mostrarán los errores y los warning del lint en la consola.

#### `npm test` o `yarn test`

Arranca el "test watcher" en modo interactivo
Por defecto, se arrancan los tests relacionados con los archivos que hayan sufrido algún cambio desde el últimos commit.

<!-- ------------

## 💻 **DESARROLLO**

1\. **Librería react-webcam**

Porqué he decidido usar esa librería para lanzar la cámara

2\. **Uso de React Router**

Enrutamiento dinámico de las dos vistas de la navegación de la app:

| Vista | Componente | URL |
| -- | -- | -- |
| Pantalla principal | Home | `/` |
| Vista de cámara | CamView | `/cam-view` |

3\. **xxx**

A través de un dos `<input>` (de tipo `radio` y de tipo `select`) se realiza un filtrado en la búsqueda realizada, pudiendo filtrar por uno o por los dos conceptos: GENERO y ESTADO. 
Una vez filtrados, se renderiza de nuevo y aparece en la interfaz los personajes que cumplen esos requisitos. 

4\. **xxx**

Al hacer click sobre alguna de las tarjetas se pinta la tarjeta clicada a pantalla completa con el detalle de cada personaje. 
En los detalles aparece la siguiente información: imagen, nombre, especie, planeta de origen, género,  número de episodios en los que aparece el personaje, listado de episodios, y si está vivo o muerto.

------------

## ✨ Detalles de calidad

- Incluir el campo de texto dentro de una etiqueta `<form>` para cuidar la semántica.
-  Impedir que el navegador envíe una petición o cambie de ruta al dar a intro sobre el campo de texto vacío aplicando un `prevent event default`.
- Al entrar en detalles del personaje y volver al listado de personajes se debe poder leer el texto que se había incluido inicialmente en el campo de texto.
 Para ello se recoge el valor del input y aplicando lifting se guarda en el estado del componente principal para bajarlo nuevamente al value del componente filters.

*BONUS:* Mejoras visuales
- Mostrar el estado del personaje con un icono.
- Usar un sistema de grid para pintar el listado de personajes.
- Cuidar el funcionamiento del responsive en dispositivos pequeños.

*BONUS:* URL compartible
- La URL del detalle del personaje debe ser compartible y poder acceder a ella visitándola directamente desde el navegador.

------------

## 💡 Improvements

- Mostrar un mensaje de error si se introduce una ruta inexistente en el navegador. -->

------------

## 🚀 RESULTADO

Puedes navegar por la aplicación en modo usuario siguiendo el siguiente enlace:

#### **https://alicia-colom.github.io/z1-frontend-developer/#/**