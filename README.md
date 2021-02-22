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
 |  ├─ App.tsx _____________ Componente principal que gestiona el enrutamiento y los estados de la app
 |  └─ layout
 |     ├─ Header.tsx
 |     ├─ Home.tsx _________ Componente de vista principal de la app
 |     ├─ CardFrame.tsx ____ Componente integrado en la vista principal
 |     └─ CamView.tsx ______ Componente de vista secundaria: acción de cámara
 |
 ├─ services
 |  └─ Api.ts ______________ Gestión de llamada a la API
 |
 ├─ stylesheets
 |  ├─ App.scss
 |  ├─ core
 |  |  ├─ _reset.scss ______ Reset de ciertos parámetros para reducir la inconsistencia entre navegadores
 |  |  └─ _variables.scss __ Centralización de parámetros usados en los estilos
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

Antes de inicializar la aplicación: instala las dependencias mediante uno de estos comandos.

#### `npm start` o `yarn start`

Arranca la aplicación en modo desarrollo.
Abre `http://localhost:3000` para visualizarla en el navegador.

La página se actualizará automáticamente con cada cambio que ocurra en el código.
Igualmente, se mostrarán los errores y los warning del lint en la consola.

#### `npm test` o `yarn test`

Arranca la suite de tests en modo interactivo.
Por defecto, se arrancan los tests relacionados con los archivos que hayan sufrido algún cambio desde el últimos commit.

------------

## 💻 **DESARROLLO**

<details>
<summary>Desplegar para ver algunas notas sobre el desarrollo</summary>

.

1\. **Uso de React Router**

Enrutamiento dinámico de las dos vistas de la navegación de la app:

| Vista | Componente | URL |
| -- | -- | -- |
| Pantalla principal | Home | `/` |
| Vista de cámara | CamView | `/cam-view` |

.

2\. **Integración de librería React-Webcam**

Para realizar la funcionalidad de activación de la cámara del usuario y la captura de imágenes a través de esta, se hace uso de la librería [React-Webcam](https://www.npmjs.com/package/react-webcam).

.

</details>

<!-- .

------------

<!-- ## ✨ Detalles de calidad

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

 -->

------------

## 💡 Improvements

*Mejoras sugeridas para desarrollar a futuro en siguientes versiones:*

- Actualizar la dependencia **`immer`** a la úlitma versión recomendada (`8.0.1`).

- Implementar mensaje de error si se introduce una ruta inexistente en el navegador.

- Implementar componente **loader** para ofrecer y mostrar información de carga al usuario, en los siguientes casos:
    - Durante la habilitación de la cámara por parte del usuario.
    - En el proceso de llamadas al servidor hasta recepción de *"Approved"*.
    - Durante la carga de la pantalla principal ***Home***, en el renderizado de la fotografía en el componente ***CardFrame***.

------------

## 🚀 RESULTADO

Puedes navegar por la aplicación en modo usuario siguiendo el siguiente enlace:

#### **https://alicia-colom.github.io/z1-frontend-developer/#/**